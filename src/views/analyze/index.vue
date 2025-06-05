<template>
	<div class="page">
		<!-- <div class="tab-list">
			<div class="tab-list__item" :class="tab == item.chainId ? 'isTab' : ''" v-for="item in tabList"
				:key="item.chainId" @click="onTabChange(item.chainId)">
				<img v-if="item.chainIconUrl" :src="item.chainIconUrl" alt="">
				<span>{{ item.chainName }}</span>
			</div>
		</div> -->
		<div class="info">
			<div class="info-address">
				<el-input v-model="address" size="large" style="width: 240px" placeholder="请输入钱包地址" />
			</div>
			<div class="info-date">
				<el-date-picker v-model="date" size="large" type="date" placeholder="请选择日期" />
			</div>
			<el-button @click="handleSearchClick" size="large">查询</el-button>
		</div>
		<div class="data">
			<div class="data-box">
				<div class="data-box__row">
					<div class="data-box__col">
						<div>交易量</div>
						<div><span style="font-size: 14px;">买入:</span> <span style="color: green;font-size: 20px;">${{
							analyzeData.buyU ? util.formatNumberSmart(analyzeData.buyU) : '--' }}</span></div>
						<div><span>卖出:</span><span class="mark">${{ analyzeData.sellU ?
							util.formatNumberSmart(analyzeData.sellU) : '--' }}</span></div>
					</div>
					<div class="data-box__col">
						<div>交易次数</div>
						<div><span style="color: green;">{{ analyzeData.buyCount ? analyzeData.buyCount : '--' }}</span>
							/ <span style="color: red;">{{ analyzeData.sellCount ? analyzeData.sellCount : '--'
								}}</span></div>
						<div></div>
					</div>
				</div>
				<div class="data-box__row">
					<div class="data-box__col">
						<div>消耗BNB</div>
						<div style="color: #f5b70a;">{{ analyzeData.Gas ? util.formatNumberSmart(analyzeData.Gas) : '--'
							}}BNB</div>
						<div></div>
					</div>
					<div class="data-box__col">
						<div>预计积分</div>
						<div style="color: #f5b70a;">+{{ analyzeData.buyU ? util.getPowerRange(analyzeData.buyU * 2) :
							"--" }}</div>
						<div></div>
					</div>
				</div>
			</div>

			<div class="data-item">
				<div class="data-item__title">磨损</div>
				<template v-if="analyzeData.abrase">
					<div class="data-item__info" v-for="[value, key] in Object.entries(analyzeData.abrase)"
						:key="value">
						<template v-if="key == 'USDT' && value !== '0'">
							<span>{{ key }}:</span><span class="mark">{{ util.formatNumberSmart(value) }}</span>
						</template>
					</div>
				</template>

				<div class="data-item__title">净流入</div>
				<div class="data-item__info" v-for="(value, key) in analyzeData.inflow" :key="value"><span>{{ key
						}}:</span><span>{{
							util.formatNumberSmart(value) }}</span></div>
				<div class="data-item__title">净流出</div>
				<div class="data-item__info" v-for="(value, key) in analyzeData.outflow" :key="value"><span>{{ key
						}}:</span><span>{{
							util.formatNumberSmart(value) }}</span>
				</div>
			</div>
		</div>
		<div class="title">交易历史</div>
		<div class="list">
			<div class="list-head">
				<div class="list-head__col w-30">交易类型</div>
				<div class="list-head__col w-30">币种</div>
				<div class="list-head__col w-30">总额(USD)</div>
				<div class="list-head__col w-20">数量</div>
				<div class="list-head__col w-20">价格</div>
				<div class="list-head__col w-20">时间</div>
				<div class="list-head__col fr w-20">Hash</div>
			</div>
			<el-empty v-if="listAll.length == 0" description="暂无数据" />
			<template v-else>
				<div class="list-body" v-for="item in listAll" :key="item">
					<div class="list-body__col w-30">
						<el-tag size="large" type="success" v-if="item.TranType == 0">买入</el-tag>
						<el-tag size="large" type="danger" v-else>卖出</el-tag>
					</div>
					<div class="list-body__col w-30">{{ item.FromCoinName }} <el-icon>
							<Right />
						</el-icon> {{ item.ToCoinName }}</div>
					<div class="list-body__col w-30">${{ util.formatNumberSmart(item.Total) }}</div>
					<div class="list-body__col w-20">{{ item.TranType ==
						0 ? util.formatNumberSmart(item.ToAmount) : util.formatNumberSmart(item.FromAmount) }}</div>
					<div class="list-body__col w-20">{{ item.TranType ==
						0 ? util.formatNumberSmart(Number(item.Total) / Number(item.ToAmount)) :
						util.formatNumberSmart(Number(item.Total) / Number(item.FromAmount)) }}</div>

					<div class="list-body__col w-20">{{ util.formatTime(item.TxTime) }}</div>
					<div class="list-body__col fr w-20">
						<Share style="width: 1em; height: 1em; margin-right: 8px; cursor: pointer;"
							@click="handleOpenClick(item.TxHash)" />
					</div>
				</div>
			</template>

		</div>
	</div>
</template>

<script setup lang="ts">
import { getChain, transactions, } from "@/api/api";
import util from "@/util/util";
const tab = ref("56");
const tabList = ref<any>([]);
const date = ref("");
const address = ref("");
const listAll = ref<any>([]);
const analyzeData = ref<any>({});

// const onTabChange = (chanId)=>{
// 	tab.value = chanId;
// }

const handleOpenClick = (hash: string) => {
	let url = `https://bscscan.com/tx/${hash}`
	window.open(url, '_blank');
}


const handleSearchClick = async () => {
	if (address.value == "") {
		ElMessage.error("请输入钱包地址");
		return;
	}
	if (date.value == "") {
		ElMessage.error("请选择日期");
		return;
	}
	const loading = ElLoading.service({
		lock: true,
		text: "分析中",
		background: 'rgba(0, 0, 0, 0.7)',
	});
	let params = {
		address: address.value,
		timestamp: timestamp.value + "",
		chains: tab.value
	};
	try {
		const res: any = await transactions(params);
		if (res.code == 0) {
			listAll.value = res.data.list;
			analyzeData.value = res.data.summary;
		} else {
			ElMessage.error(res.msg);
		}
	} catch {
		ElMessage.error("网络错误");
	} finally {
		loading.close();
	}
};

const getChainFun = async () => {
	try {
		const res: any = await getChain();
		if (res.code == 0) {
			tabList.value = res.data;
		} else {
			ElMessage.error(res.msg);
		}
	} catch {
		ElMessage.error("网络错误");
	}
};

const timestamp = computed(() => {
	if (!date.value) return '';
	return Math.floor(new Date(date.value).getTime() / 1000);
});

onMounted(() => {
	getChainFun();
});

</script>

<style lang="less" scoped>
.page {
	padding-bottom: 20px;
}

.tab-list {
	display: flex;
	align-items: center;
	gap: 6px;
	margin-top: 30px;

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


.info {
	display: flex;
	align-items: center;
	padding: 30px 0;
	gap: 10px;

	img {
		width: 44px;
		height: 44px;
		border-radius: 4px;
		background: red;
		margin-right: 10px;
	}
}

.date {
	margin-bottom: 20px;
}

.data {
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;

	&-box {
		width: 49%;

		&__row {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 20px;
		}

		&__row:nth-of-type(1) {
			margin-top: 0px;
		}

		&__col {
			width: 48%;
			height: 150px;
			background: #202127;
			border-radius: 10px;
			padding: 20px;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			div:nth-of-type(1) {
				font-size: 16px;
				color: #969faf;
				font-weight: 600;
			}

			div:nth-of-type(2) {
				font-size: 20px;
				font-weight: 600;
				text-align: center;
			}

			div:nth-of-type(3) {
				text-align: right;
				font-size: 12px;
			}
		}
	}

	&-item {
		width: 49%;
		border-radius: 10px;
		background: #202127;
		padding: 20px;
		height: 320px;
		overflow-y: auto;

		&__title {
			font-size: 16px;
			color: #969faf;
			font-weight: 600;
			padding-bottom: 10px;
			border-bottom: solid 1px #4C4D4F;
			margin-top: 10px;
		}

		&__title:nth-of-type(1) {
			margin-top: 0;
		}

		&__info {
			padding-left: 40px;
			line-height: 40px;
			font-size: 14px;
			display: flex;
			align-items: center;

			span {
				display: flex;
				width: 50%;
			}
		}

		.mark {
			color: #f5b70a;
			font-weight: bold;
			font-size: 16px;
		}
	}
}

.title {
	margin-bottom: 20px;
	font-size: 20px;
}

.list {

	&-head,
	&-body {
		display: flex;
		align-items: center;
		gap: 4px;

		&__col {
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
			background: red;
			margin-right: 10px;
		}
	}
}
</style>