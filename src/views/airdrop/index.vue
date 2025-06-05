<template>
	<div class="page">
		<div class="title">最新项目</div>
		<div class="newest" v-if="listAll.actives">
			<div class="newest-box">
				<div class="newest-box__row">
					<div class="newest-box__col w-10">
						<div>日期</div>
					</div>
					<div class="newest-box__col w-10">
						<div>项目</div>
					</div>
					<div class="newest-box__col w-10">
						<div>类型</div>
					</div>
					<div class="newest-box__col w-17">
						<div>积分门槛</div>
					</div>
					<div class="newest-box__col w-19">
						<div>门槛以上人数</div>
					</div>
					<div class="newest-box__col w-17">
						<div>已卖人数</div>
					</div>
					<div class="newest-box__col w-17">
						<div>单号收益($)</div>
					</div>
				</div>
				<div class="newest-box__row">
					<div class="newest-box__col w-10">
						<div>5月21日</div>
					</div>
					<div class="newest-box__col w-10">
						<div>TGT</div>
					</div>
					<div class="newest-box__col w-10">
						<div>alpha</div>
					</div>
					<div class="newest-box__col w-17">
						<div>199</div>
					</div>
					<div class="newest-box__col w-19">
						<div>19925</div>
						<div>38%</div>
					</div>
					<div class="newest-box__col w-17">
						<div>7487</div>
					</div>
					<div class="newest-box__col w-17">
						<div>65($)</div>
					</div>
				</div>
			</div>
			<div class="newest-box">
				<div class="newest-box__row">
					<div class="newest-box__col w-14">
						<div>领取剩余时间</div>
					</div>
					<div class="newest-box__col w-14">
						<div>总计空投(币)</div>
					</div>
					<div class="newest-box__col w-16">
						<div>币安钱包剩余币数</div>
					</div>
					<div class="newest-box__col w-14">
						<div>单号币数</div>
					</div>
					<div class="newest-box__col w-14">
						<div>潜在补发币数</div>
					</div>
					<div class="newest-box__col w-14">
						<div>潜在补发价值</div>
					</div>
					<div class="newest-box__col w-14">
						<div>空投总价值($)</div>
					</div>
				</div>
				<div class="newest-box__row">
					<div class="newest-box__col w-14">
						<div>5月21日</div>
					</div>
					<div class="newest-box__col w-14">
						<div>TGT</div>
					</div>
					<div class="newest-box__col w-16">
						<div>alpha</div>
					</div>
					<div class="newest-box__col w-14">
						<div>199</div>
					</div>
					<div class="newest-box__col w-14">
						<div>19925</div>
					</div>
					<div class="newest-box__col w-14">
						<div>7487</div>
					</div>
					<div class="newest-box__col w-14">
						<div>65($)</div>
					</div>
				</div>
			</div>
		</div>
		<div class="title" v-if="listAll.pends && listAll.pends.length > 0">审核项目</div>
		<div class="list" v-if="listAll.pends && listAll.pends.length > 0">
			<div class="list-row">
				<div class="list-row__col w-7">
					<div>日期</div>
				</div>
				<div class="list-row__col w-7">
					<div>项目</div>
				</div>
				<div class="list-row__col w-7">
					<div>积分门槛</div>
				</div>
				<div class="list-row__col w-10">
					<div>门槛以上人数</div>
				</div>
				<div class="list-row__col w-7">
					<div>单号币数</div>
				</div>
				<div class="list-row__col w-7">
					<div>补发币数</div>
				</div>
				<div class="list-row__col w-10">
					<div>总计空投(币)</div>
				</div>
				<div class="list-row__col w-11">
					<div>币安钱包剩余币数</div>
				</div>
				<div class="list-row__col w-10">
					<div>单号收益($)</div>
				</div>
				<div class="list-row__col w-7">
					<div>已卖人数</div>
				</div>
				<div class="list-row__col w-10">
					<div>空投总价值($)</div>
				</div>
				<div class="list-row__col w-7">
					<div>类型</div>
				</div>
			</div>
			<div class="list-row" v-for="item in 10" :key="item">
				<div class="list-row__col w-7">
					<div>5月20日</div>
				</div>
				<div class="list-row__col w-7">
					<div>项目</div>
				</div>
				<div class="list-row__col w-7">
					<div>193</div>
				</div>
				<div class="list-row__col w-10">
					<div>31414</div>
				</div>
				<div class="list-row__col w-7">
					<div>1000</div>
				</div>
				<div class="list-row__col w-7">
					<div>530</div>
				</div>
				<div class="list-row__col w-10">
					<div>31364000</div>
				</div>
				<div class="list-row__col w-11">
					<div>21136100</div>
				</div>
				<div class="list-row__col w-10">
					<div>134</div>
				</div>
				<div class="list-row__col w-7">
					<div>17673</div>
				</div>
				<div class="list-row__col w-10">
					<div>2827260</div>
				</div>
				<div class="list-row__col w-7">
					<div>alpha</div>
				</div>
			</div>
		</div>

		<div class="title">历史项目</div>

		<div class="list">
			<div class="list-row">
				<div class="list-row__col w-7">
					<div>日期</div>
				</div>
				<div class="list-row__col w-7">
					<div>项目</div>
				</div>
				<div class="list-row__col w-7">
					<div>积分门槛</div>
				</div>
				<div class="list-row__col w-10">
					<div>门槛以上人数</div>
				</div>
				<div class="list-row__col w-7">
					<div>单号币数</div>
				</div>
				<div class="list-row__col w-7">
					<div>补发币数</div>
				</div>
				<div class="list-row__col w-10">
					<div>总计空投(币)</div>
				</div>
				<div class="list-row__col w-11">
					<div>币安钱包剩余币数</div>
				</div>
				<div class="list-row__col w-10">
					<div>单号收益($)</div>
				</div>
				<div class="list-row__col w-7">
					<div>已卖人数</div>
				</div>
				<div class="list-row__col w-10">
					<div>空投总价值($)</div>
				</div>
				<div class="list-row__col w-7">
					<div>类型</div>
				</div>
			</div>
			<div class="list-row" v-if="listAll.ends" v-for="item in listAll.ends" :key="item.ID">
				<div class="list-row__col w-7">
					<div>5月20日</div>
				</div>
				<div class="list-row__col w-7">
					<div>{{ item.Name }}</div>
				</div>
				<div class="list-row__col w-7">
					<div>{{ item.ThresholdScore }}</div>
				</div>
				<div class="list-row__col w-10">
					<div>{{ item.ThresholdScore }}</div>
				</div>
				<div class="list-row__col w-7">
					<div>1000</div>
				</div>
				<div class="list-row__col w-7">
					<div>{{ item.ReIssuedCoins }}</div>
				</div>
				<div class="list-row__col w-10">
					<div>{{ item.TotalAirdropCoins }}</div>
				</div>
				<div class="list-row__col w-11">
					<div>{{ item.RemainingCoins }}</div>
				</div>
				<div class="list-row__col w-10">
					<div>{{ item.SingleNumberIncome }}</div>
				</div>
				<div class="list-row__col w-7">
					<div>{{ item.NumberOfPeople }}</div>
				</div>
				<div class="list-row__col w-10">
					<div>2827260</div>
				</div>
				<div class="list-row__col w-7">
					<div>{{ item.Class }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { alpha } from "@/api/api"
const listAll = ref<any>({})

const getAlpha = async () => {
	try {
		const res: any = await alpha()
		if (res.code == 0) {
			listAll.value = res.data;
		} else {
			ElMessage.error(res.msg)
		}
	} catch {
		ElMessage.error("网络错误")
	}
}

onMounted(() => {
	getAlpha()
})
</script>

<style lang="less" scoped>
.page {
	padding-bottom: 20px;
}

.title {
	text-align: center;
	font-size: 18px;
	color: #f0b90b;
	padding: 10px 0;
	font-weight: 600;
}

.newest {
	&-box {
		background: #202127;
		margin-bottom: 10px;
		border-radius: 10px;

		&__row {
			padding: 0 20px;
			border-bottom: solid 1px #14171A;
			display: flex;
			align-items: center;
		}

		&__col {
			min-height: 52px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}
}

.list {
	background: #202127;
	border-radius: 10px;
	padding: 0 10px;

	&-row {
		border-bottom: solid 1px #14171A;
		display: flex;
		align-items: center;

		&__col {
			min-height: 48px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}
}
</style>