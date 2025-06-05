<template>
	<div class="page">
		<div class="box">
			<div class="box-left">
				<div class="section">
					<div class="section-label">目标积分:</div>
					<el-input v-model.number="targetPoints" style="width: 240px" placeholder="目标积分" />
					<div class="section-label">交易所余额:</div>
					<el-select v-model="exchangePoints" placeholder="选择交易档位" style="width: 240px">
						<el-option v-for="item in exchangeList" :key="item.value" :label="item.label"
							:value="item.value" />
					</el-select>
					<el-checkbox v-model="double" style="margin-top: 10px;" label="双倍积分" />

					<div class="section-label">单次交易额:</div>
					<el-input v-model.number="countPoints" style="width: 120px" placeholder="单次交易额" />
					<el-button type="primary" @click="handleClick" style="margin-top: 10px;width: 240px;">计算</el-button>
				</div>

				<template v-for="item in resultList" :key="item.targetPoints">
					<div class="section" v-if="item.targetPoints == targetPoints">
						<div class="msg-row">
							<div>15天积分</div>
							<div>{{ item.targetPoints }}积分</div>
						</div>
						<div class="msg-row">
							<div>平均每日积分</div>
							<div>{{ item.dayAllPoints }}积分</div>
						</div>
						<div class="msg-row">
							<div>每日余额积分</div>
							<div>{{ exchangePoints }}积分</div>
						</div>
						<div class="msg-row">
							<div>每日所需交易量积分</div>
							<div>{{ item.dayExchangePoints }}积分</div>
						</div>
						<div class="msg-row">
							<div>买入次数</div>
							<div>{{ item.dayCount }}次 每次${{ countPoints }}.00</div>
						</div>
					</div>
				</template>



				<div class="section">
					<el-table :data="resultList" style="width: 100%;" stripe>
						<el-table-column prop="targetPoints" label="目标积分(15天)">
							<template #default="scope">
								<span style="color: red;font-weight: 600;"
									v-if="scope.row.targetPoints == targetPoints">当前 {{ scope.row.targetPoints }}</span>
								<span v-else>{{ scope.row.targetPoints }}</span>
							</template>
						</el-table-column>
						<el-table-column prop="dayAllPoints" label="每日可得积分" />
						<el-table-column prop="dayExchangePoints" label="交易量积分" />
						<el-table-column prop="dayCount" label="买入次数" />
						<el-table-column prop="dayAmount" label="买入交易量">
							<template #default="scope">
								<span>${{ scope.row.dayAmount }}.00</span>
							</template>
						</el-table-column>
						<el-table-column prop="dayAmount" label="预估磨损">
							<template #default="scope">
								<span>${{ scope.row.dayAmount * 0.0002 }} ~ ${{ scope.row.dayAmount * 0.0003 }}</span>
							</template>
						</el-table-column>
					</el-table>
				</div>

			</div>
			<div class="box-right">
				<div style="font-size: 24px;font-weight: 600;margin-bottom: 10px;">Alpha 积分系统规则</div>
				<div>Alpha 积分系统是币安用于衡量用户参与度和活跃度的机制，通过资产余额和交易量计算。积分直接影响用户是否能参与币安的 TGE 或空投活动。</div>
				<div style="font-size: 20px;font-weight: 600;">一、什么是 Alpha 积分系统？</div>
				<div>Alpha 积分系统主要通过以下两部分计算积分：</div>

				<div>资产余额：过去 15 天内，用户持有的现货及 Alpha 代币的总价值。</div>
				<div class="rules">
					<div>交易量：过去 15 天内，用户每日买入 Alpha 代币的交易额。</div>

					<div>交易量：过去 15 天内，用户每日买入 Alpha 代币的交易额。</div>
				</div>

				<div style="font-size: 20px;font-weight: 600;margin: 10px;">二、积分规则详解</div>
				<div style="font-size: 16px;font-weight: 600;margin: 10px;">1. 余额积分规则（每日计算）</div>
				<div class="rules">
					<div>$0 - $100 = 0 积分/天</div>
					<div>$100 - $1,000 = 1 积分/天</div>
					<div>$1,000 - $10,000 = 2 积分/天</div>
					<div>$10,000 - $100,000 = 3 积分/天</div>
					<div>$100,000 及以上 = 4 积分/天</div>
				</div>

				<div style="font-size: 16px;font-weight: 600;margin: 10px;">2. 交易量积分规则（每日计算）</div>
				<div>交易额与积分对照表：</div>
				<div style="margin: 10px 0;">
					<el-table :data="transList" style="width: 100%;" stripe>
						<el-table-column prop="label" label="交易额" align="center" />
						<el-table-column prop="value" label="积分" align="center" />
					</el-table>
				</div>
				<div>注：每当您的购买金额翻倍时，您将额外获得 1 积分。</div>
			</div>
		</div>



	</div>
</template>

<script setup lang="ts">
const targetPoints = ref(255)
const exchangePoints = ref(2)
const resultList = ref<any>([])
const double = ref(true)
const countPoints = ref(1024)

const exchangeList = reactive([
	{ label: '0-100 (0积分/天)', value: 0 },
	{ label: '100-1000 (1积分/天)', value: 1 },
	{ label: '1000-10000 (2积分/天)', value: 2 },
	{ label: '10000-100000 (3积分/天)', value: 3 },
	{ label: '100000及以上 (4积分/天)', value: 4 }
])

const transList = reactive<any>([])

for (let i = 1; i <= 30; i++) {
	const amount = 2 ** i // 2 的 i 次方
	transList.push({
		label: `$${amount.toLocaleString()}`, // 金额用千分位格式化
		value: String(i)
	})
}

const handleClick = () => {
	const base = targetPoints.value
	const list = []

	for (let i = -9; i <= 9; i++) {
		const tp = Math.max(0, base + i * 5) // 确保不为负数

		if (tp === 0) continue
		const dayAllPoints = Math.ceil(tp / 15)
		const dayExchangePoints = dayAllPoints - exchangePoints.value
		let dayAmount = 0
		if (double.value) {
			dayAmount = dayExchangePoints >= 0 ? (2 ** dayExchangePoints) / 2 : 0
		} else {
			dayAmount = dayExchangePoints >= 0 ? 2 ** dayExchangePoints : 0
		}

		const dayCount = Math.ceil(dayAmount / countPoints.value);
		list.push({
			targetPoints: tp,
			dayAllPoints,
			dayExchangePoints,
			dayCount,
			dayAmount
		})
	}

	resultList.value = list
}

onMounted(() => {
	handleClick()
})
</script>

<style lang="less" scoped>
.page {
	padding: 20px 0;
}

.box {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;

	&-left {
		width: 50%;

		.section {
			box-sizing: border-box;
			width: 100%;
			padding: 20px;
			background: #202127;
			display: flex;
			flex-direction: column;
			border-radius: 10px;
			margin-bottom: 20px;

			&-label {
				font-size: 16px;
				margin: 10px 0;
			}

			&-label:nth-of-type(1) {
				margin-top: 0;
			}
		}

		.msg-row {
			display: flex;
			justify-content: space-between;
			line-height: 40px;
			border-top: solid 1px #4C4D4F;
		}

		.msg-row:nth-of-type(1) {
			border: none;
		}
	}

	&-right {
		width: 49%;
		padding: 20px;
		background: #202127;
		border-radius: 10px;

		.rules div {
			padding: 0 20px;
		}

		.rules div::before {
			content: '•';
			/* 小圆点 */
			margin-right: 8px;
			color: #fff;
			/* 圆点颜色 */
		}
	}
}
</style>
