<template>
	<div class="page">
		<div class="box">
			<div class="tab">
				<div class="tab-list">
					<div class="tab-list__item" :class="tab == item.chainId ? 'isTab' : ''" v-for="item in tabList"
						:key="item.chainId" @click="onTabChange(item.chainId)">
						<img v-if="item.chainName == 'BSC'" src="@/assets/imgs/BSC.png" alt="">
						<img v-if="item.chainName == 'Ethereum'" src="@/assets/imgs/Eth.png" alt="">
						<img v-if="item.chainName == 'Solana'" src="@/assets/imgs/Sol.png" alt="">
						<img v-if="item.chainName == 'Base'" src="@/assets/imgs/Base.png" alt="">
						<img v-if="item.chainName == 'Sonic'" src="@/assets/imgs/Sonic.png" alt="">
						<img v-if="item.chainName == 'Sui'" src="@/assets/imgs/Sui.png" alt="">
						<span>{{ item.chainName }}</span>
					</div>
				</div>
				<div class="tab-input">
					<el-input v-model="search" style="width: 240px" placeholder="请输入" @keyup.enter="handleSearch" />
				</div>
			</div>

			<div class="list">
				<div class="list-head">
					<div class="list-head__col">代币名称</div>
					<div class="list-head__col fr">代币价格</div>
					<div class="list-head__col fr">涨跌幅</div>
					<div class="list-head__col fr">24H交易量</div>
					<div class="list-head__col fr">流通市值</div>
					<div class="list-head__col fr">流动性</div>
					<div class="list-head__col fr">持币地址</div>
				</div>

				<div class="list-body" v-for="item in paginatedList" :key="item.contractAddress">
					<div class="list-body__col">
						<img :src="item.chainIconUrl" alt="" />
						<div class="info">
							<div>{{ item.symbol }}</div>
							<div>{{ util.formatString(item.contractAddress, 8, 4) }}</div>
						</div>
					</div>
					<div class="list-body__col fr">${{ util.formatNumberSmart(item.price) }}</div>
					<div class="list-body__col fr">
						<span v-if="Number(item.percentChange24h) > 0" style="color: #2EBD85;font-weight: 600;">+{{
							util.formatNumberSmart(item.percentChange24h) }}%</span>
						<span v-else style="color: #F6465D;font-weight: 600;">{{
							util.formatNumberSmart(item.percentChange24h) }}%</span>
					</div>
					<div class="list-body__col fr">${{ util.formatNumberSmart(item.volume24h) }}</div>
					<div class="list-body__col fr">${{ util.formatNumberSmart(item.fdv) }}</div>
					<div class="list-body__col fr">${{ util.formatNumberSmart(item.liquidity) }}</div>
					<div class="list-body__col fr">{{ util.formatNumberSmart(item.holders) }}</div>
				</div>
			</div>
			<div class="pagination">
				<el-pagination layout="prev, pager, next" background :total="filteredList.length" :page-size="pageSize"
					:current-page="currentPage" @current-change="handlePageChange" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { getChain, postTokens } from "@/api/api"
import util from "@/util/util"

const tab = ref("")
const tabList = ref<any>([])
const listAll = ref<any>([])
const filteredList = ref<any>([])
const currentPage = ref(1)
const pageSize = ref(10)
const search = ref("")

// const formatImg = (str) => {
// 	return `https://web3.okx.com/cdn/web3/currency/token/small/56-${str}-97`
// }

const getChainFun = async () => {
	try {
		const res: any = await getChain()
		if (res.code == 0) {
			res.data.unshift({
				chainId: "",
				chainName: "全部"
			})
			tabList.value = res.data
		} else {
			ElMessage.error(res.msg)
		}
	} catch {
		ElMessage.error("网络错误")
	}
}

const postTokensFun = async () => {
	try {
		const res: any = await postTokens({
			chainId: tab.value
		})
		if (res.code == 0) {
			listAll.value = res.data
			filteredList.value = res.data // 初始化默认显示所有
		} else {
			ElMessage.error(res.msg)
		}
	} catch {
		ElMessage.error("网络错误")
	}
}

const handleSearch = () => {
	const keyword = search.value.trim().toLowerCase()
	currentPage.value = 1
	if (!keyword) {
		filteredList.value = listAll.value
	} else {
		filteredList.value = listAll.value.filter((item: any) =>
			item.Symbol?.toLowerCase().includes(keyword)
		)
	}
}

const handlePageChange = (page: number) => {
	currentPage.value = page
}

const onTabChange = (id: string) => {
	tab.value = id
	postTokensFun()
	search.value = ""
	currentPage.value = 1
}

const paginatedList = computed(() => {
	const start = (currentPage.value - 1) * pageSize.value
	return filteredList.value.slice(start, start + pageSize.value)
})

onMounted(() => {
	getChainFun()
	postTokensFun()
})
</script>


<style lang="less" scoped>
.page {
	padding-bottom: 20px;
}

.box {
	background: #202127;
	margin-top: 20px;
	padding: 20px;
	border: 10px;
}

.tab {
	display: flex;
	align-items: center;
	justify-content: space-between;

	&-list {
		display: flex;
		align-items: center;
		gap: 6px;

		&__item {
			height: 32px;
			line-height: 32px;
			padding: 0 6px;
			border-radius: 4px;
			min-width: 52px;
			text-align: center;
			cursor: pointer;
			color: #969faf;

			img {
				width: 20px;
				height: 20px;
				border-radius: 100%;
				margin-right: 10px;
			}
		}

		&-item:hover {
			opacity: 0.8;
		}

		.isTab {
			background: #2a2b35;
			color: #f1f1f1;
		}
	}

}

.list {
	min-height: 715px;

	&-head,
	&-body {
		display: flex;
		align-items: center;
		gap: 4px;

		&__col {
			width: 20%;
			height: 65px;
			display: flex;
			align-items: center;
			color: #969faf;
		}

		.fr {
			justify-content: flex-end;
		}
	}

	&-body__col {
		color: #f1f1f1;
		font-size: 16px;
		border-top: solid 1px #2a2b35;

		img {
			width: 38px;
			height: 38px;
			border-radius: 100%;
			margin-right: 10px;
		}

		.info {
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			div:nth-of-type(2) {
				font-size: 14px;
			}
		}
	}
}

.pagination {
	display: flex;
	margin-top: 10px;
	justify-content: flex-end;
}
</style>