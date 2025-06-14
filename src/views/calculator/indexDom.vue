<template>
	<div class="page">
		<div class="main-container">
			<div class="calculator-column">
				<div id="inputSection">
					<div class="input-group">
						<label for="targetPoints">目标积分：</label>
						<input type="number" id="targetPoints" min="0" step="1" placeholder="输入目标积分" class="input-field">
					</div>

					<div class="input-group">
						<label for="balanceTierPoints">交易所余额：</label>
						<select id="balanceTierPoints" class="input-field">
							<option value="0">$0 - $100 (0 积分/天)</option>
							<option value="1">$100 - $1,000 (1 积分/天)</option>
							<option value="2">$1,000 - $10,000 (2 积分/天)</option>
							<option value="3">$10,000 - $100,000 (3 积分/天)</option>
							<option value="4">$100,000 及以上 (4 积分/天)</option>
						</select>
					</div>

					<div class="checkbox-group">
						<div class="checkbox-container">
							<input type="checkbox" id="bscDoubleVolume" @change="handleBscDoubleVolumeChange">
							<label for="bscDoubleVolume">BSC 双倍成交量活动</label>
							<div class="info-icon">i
								<div class="tooltip">
									<p><strong>BSC 双倍成交量活动规则</strong></p>
									<p>5 月 1 日起至另行通知，符合条件的用户可以赚取额外的 Alpha 积分：</p>
									<ul>
										<li>购买 BSC Alpha 代币</li>
										<li>通过限价单购买 Alpha 代币（适用于任何网络）</li>
									</ul>
									<p>这些交易将双倍记入用户的 Alpha 交易量。</p>
									<p><strong>Alpha 交易量计算公式：</strong><br>
										Alpha 交易量 = 2 *（BSC Alpha 代币购买量 + 限价单购买量）+ 其它购买量</p>
									<p>注：同一笔交易若同时符合 BSC 和限价单条件，仅计算一次双倍。</p>
								</div>
							</div>
						</div>

						<div class="checkbox-container">
							<input type="checkbox" id="farmingMode" @change="handlefarmingModeChange">
							<label for="farmingMode">刷分模式</label>
							<div class="info-icon">i
								<div class="tooltip">
									<p><strong>刷分模式说明</strong></p>
									<p>计算使用指定交易量多少次可以达到目标积分。</p>
									<p>如果启用BSC双倍活动，则计算会相应调整。</p>
									<p>此模式适合小额资金分多次交易来达成积分目标。</p>
								</div>
							</div>
							<div class="farming-amount-inline" id="farmingAmountInline">
								<label for="farmingAmount">每次刷分金额：$</label>
								<input type="number" id="farmingAmount" min="2" step="1" value="2" @change="handlefarmingAmountChange">
							</div>
						</div>
					</div>

					<button id="applyBtn" @click="handleApplyBtnClick">计算</button>
				</div>

				<div id="resultSection">
					<table class="result-table">
						<tbody>
							<tr>
								<td>15天积分</td>
								<td><span class="normal-text" id="targetPointsResult">150</span> 积分</td>
							</tr>
							<tr>
								<td>平均每日积分</td>
								<td><span class="normal-text" id="dailyPointsResult">10</span> 分</td>
							</tr>
							<tr>
								<td>每日余额积分</td>
								<td><span class="normal-text" id="balancePointsResult">0</span> 分</td>
							</tr>
							<tr>
								<td>每日所需交易量积分</td>
								<td><span class="normal-text" id="volumePointsResult">10</span> 分，至少 <span class="result-highlight"
										id="volumeResult">$1024.00</span><span id="bscNormalResult"></span></td>
							</tr>
							<tr id="normalModeResult" style="display:none">
								<td>每日所需交易量</td>
								<td><span class="result-highlight" id="volumeResult2">$1024.00</span><span id="bscNormalResult2"></span>
								</td>
							</tr>
							<tr id="farmingModeResult" style="display:none">
								<td>刷分方案</td>
								<td>刷 <span class="result-highlight" id="transactionsResult">1024</span> 次<span
										id="bscFarmingResult"></span></td>
							</tr>
						</tbody>
					</table>
				</div>

				<div id="comparisonTableSection" class="comparison-table-section">
					<h3>积分对照表</h3>
					<p id="comparisonTableDescription" class="table-description"></p>
					<table id="comparisonTable" class="comparison-table">
						<thead>
							<tr id="comparisonTableHeader">
								<th>目标积分</th>
								<th>每日所需积分</th>
								<th>交易量积分</th>
								<th id="volumeHeader">所需交易量</th>
							</tr>
						</thead>
						<tbody id="comparisonTableBody">
							<!-- 动态生成的表格内容 -->
						</tbody>
					</table>
				</div>
			</div>

			<div class="rules-column">
				<div class="rules-section">
					<h2>Alpha 积分系统规则</h2>
					<div class="rules-content">
						<p>Alpha 积分系统是币安用于衡量用户参与度和活跃度的机制，通过资产余额和交易量计算。积分直接影响用户是否能参与币安的 TGE 或空投活动。</p>

						<h3>一、什么是 Alpha 积分系统？</h3>
						<p>Alpha 积分系统主要通过以下两部分计算积分：</p>
						<ul>
							<li>资产余额：过去 15 天内，用户持有的现货及 Alpha 代币的总价值。</li>
							<li>交易量：过去 15 天内，用户每日买入 Alpha 代币的交易额。</li>
						</ul>

						<h3>二、积分规则详解</h3>

						<h4>1. 余额积分规则（每日计算）</h4>
						<ul>
							<li>$0 - $100 = 0 积分/天</li>
							<li>$100 - $1,000 = 1 积分/天</li>
							<li>$1,000 - $10,000 = 2 积分/天</li>
							<li>$10,000 - $100,000 = 3 积分/天</li>
							<li>$100,000 及以上 = 4 积分/天</li>
						</ul>

						<h4>2. 交易量积分规则（每日计算）</h4>
						<p>交易额与积分对照表：</p>
						<table class="volume-points-table">
							<thead>
								<tr>
									<th>交易额</th>
									<th>积分</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>$2</td>
									<td>1</td>
								</tr>
								<tr>
									<td>$4</td>
									<td>2</td>
								</tr>
								<tr>
									<td>$8</td>
									<td>3</td>
								</tr>
								<tr>
									<td>$16</td>
									<td>4</td>
								</tr>
								<tr>
									<td>$32</td>
									<td>5</td>
								</tr>
								<tr>
									<td>$64</td>
									<td>6</td>
								</tr>
								<tr>
									<td>$128</td>
									<td>7</td>
								</tr>
								<tr>
									<td>$256</td>
									<td>8</td>
								</tr>
								<tr>
									<td>$512</td>
									<td>9</td>
								</tr>
								<tr>
									<td>$1,024</td>
									<td>10</td>
								</tr>
								<tr>
									<td>$2,048</td>
									<td>11</td>
								</tr>
								<tr>
									<td>$4,096</td>
									<td>12</td>
								</tr>
								<tr>
									<td>$8,192</td>
									<td>13</td>
								</tr>
								<tr>
									<td>$16,384</td>
									<td>14</td>
								</tr>
								<tr>
									<td>$32,768</td>
									<td>15</td>
								</tr>
								<tr>
									<td>$65,536</td>
									<td>16</td>
								</tr>
								<tr>
									<td>$131,072</td>
									<td>17</td>
								</tr>
								<tr>
									<td>$262,144</td>
									<td>18</td>
								</tr>
								<tr>
									<td>$524,288</td>
									<td>19</td>
								</tr>
								<tr>
									<td>$1,048,576</td>
									<td>20</td>
								</tr>
								<tr>
									<td>$2,097,152</td>
									<td>21</td>
								</tr>
								<tr>
									<td>$4,194,304</td>
									<td>22</td>
								</tr>
								<tr>
									<td>$8,388,608</td>
									<td>23</td>
								</tr>
								<tr>
									<td>$16,777,216</td>
									<td>24</td>
								</tr>
								<tr>
									<td>$33,554,432</td>
									<td>25</td>
								</tr>
								<tr>
									<td>$67,108,864</td>
									<td>26</td>
								</tr>
								<tr>
									<td>$134,217,728</td>
									<td>27</td>
								</tr>
								<tr>
									<td>$268,435,456</td>
									<td>28</td>
								</tr>
								<tr>
									<td>$536,870,912</td>
									<td>29</td>
								</tr>
								<tr>
									<td>$1,073,741,824</td>
									<td>30</td>
								</tr>
							</tbody>
						</table>
						<p>注：每当您的购买金额翻倍时，您将额外获得 1 积分。</p>

						<div class="rules-full">
							<!-- 移除此处的表格，因为已经移到上面完整显示 -->
						</div>
					</div>

					<div class="show-more" @click="handleMoreClick">显示更多<span class="arrow-down"></span></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	// 页面加载后调整规则部分高度
	document.addEventListener('DOMContentLoaded', function() {
		adjustRulesHeight();

		// 窗口大小改变时重新调整
		window.addEventListener('resize', adjustRulesHeight);

		// 初始隐藏内联刷分金额输入框
		document.getElementById('farmingAmountInline').style.display = 'none';
	});

	// 调整规则部分高度与输入部分一致
	function adjustRulesHeight() {
		const inputSection = document.getElementById('inputSection');
		const rulesSection = document.querySelector('.rules-section');

		if (inputSection && rulesSection) {
			const inputHeight = inputSection.offsetHeight;
			rulesSection.style.minHeight = inputHeight + 'px';
		}
	}

	function getBalanceRange(tierPoints) {
		switch (parseInt(tierPoints)) {
			case 0:
				return "$0 - $100";
			case 1:
				return "$100 - $1,000";
			case 2:
				return "$1,000 - $10,000";
			case 3:
				return "$10,000 - $100,000";
			case 4:
				return "$100,000 及以上";
			default:
				return "未知";
		}
	}

	function calculateRequiredVolume(pointsNeeded, isBscDouble) {
		// 反向计算点数需要的交易量
		if (pointsNeeded <= 0) return 0;

		// 计算$2的2^(pointsNeeded-1)次方
		const baseVolume = 2 * Math.pow(2, pointsNeeded - 1);

		// 如果启用BSC双倍，所需交易量减半
		return isBscDouble ? baseVolume / 2 : baseVolume;
	}

	// 计算指定交易额对应的积分
	function calculatePointsForVolume(volume, isBscDouble) {
		if (volume <= 0) return 0;

		// BSC双倍时，交易额效果翻倍
		const effectiveVolume = isBscDouble ? volume * 2 : volume;

		// 积分计算：log2(effectiveVolume/2) + 1
		return Math.floor(Math.log2(effectiveVolume / 2) + 1);
	}

	function generateComparisonTable(targetPoints, balanceTierPoints, isBscDouble, isFarmingMode, farmingAmount) {
		const tableBody = document.getElementById('comparisonTableBody');
		tableBody.innerHTML = '';

		// 更新表头，根据模式选择显示对应列
		const volumeHeader = document.getElementById('volumeHeader');

		if (isFarmingMode) {
			volumeHeader.textContent = "刷分次数";
		} else {
			volumeHeader.textContent = "所需交易量";
		}

		// 生成目标积分上下各9个档位（步长5分）
		const step = 5;
		const rangeCount = 9;
		const variations = [];

		// 添加当前值下方的档位（不低于0）
		for (let i = rangeCount; i > 0; i--) {
			const variation = -i * step;
			if (targetPoints + variation > 0) {
				variations.push(variation);
			}
		}

		// 添加当前值
		variations.push(0);

		// 添加当前值上方的档位
		for (let i = 1; i <= rangeCount; i++) {
			variations.push(i * step);
		}

		variations.forEach(variation => {
			const currentTargetPoints = Math.max(0, targetPoints + variation);
			const dailyNeeded = Math.ceil(currentTargetPoints / 15);
			const volumePointsNeeded = Math.max(0, dailyNeeded - balanceTierPoints);

			let displayValue;

			if (isFarmingMode) {
				// 计算刷分次数
				// 根据交易量积分表：$2=1分，$4=2分，$8=3分...每翻倍增加1分
				// 因此，计算每天需要多少次farmingAmount交易来达到volumePointsNeeded

				// 计算BSC双倍效果后的每次交易金额
				const effectiveAmount = isBscDouble ? farmingAmount * 2 : farmingAmount;

				// 计算每天达到所需积分需要的总交易量
				const dailyVolumeNeeded = 2 * Math.pow(2, volumePointsNeeded - 1);

				// 计算需要多少次交易才能达到这个交易量
				const transactionsNeeded = Math.ceil(dailyVolumeNeeded / effectiveAmount);

				displayValue = transactionsNeeded;
			} else {
				// 正常交易量计算
				const requiredVolume = calculateRequiredVolume(volumePointsNeeded, isBscDouble);
				displayValue = "$" + requiredVolume.toFixed(2);
			}

			const row = document.createElement('tr');
			if (variation === 0) {
				row.classList.add('target-row');

				row.innerHTML = `
					<td class="current-row" style="text-align:center;"><span class="current-marker">当前</span>${currentTargetPoints}</td>
					<td class="current-row" style="text-align:center;">${dailyNeeded}</td>
					<td class="current-row" style="text-align:center;">${volumePointsNeeded}</td>
					<td class="current-row" style="text-align:center;">${displayValue}</td>
				`;
			} else {
				row.innerHTML = `
					<td style="text-align:center;">${currentTargetPoints}</td>
					<td style="text-align:center;">${dailyNeeded}</td>
					<td style="text-align:center;">${volumePointsNeeded}</td>
					<td style="text-align:center;">${displayValue}</td>
				`;
			}

			tableBody.appendChild(row);
		});

		// 更新表格描述
		const descriptionElem = document.getElementById('comparisonTableDescription');
		const balanceRange = getBalanceRange(balanceTierPoints);

		if (isFarmingMode) {
			descriptionElem.textContent =
				`账户余额每日得分 ${balanceTierPoints} 分，$${farmingAmount} 本金刷量的模式下，不同积分所需的次数${isBscDouble ? "（已开启 BSC 双倍活动）" : ""}`;
		} else {
			descriptionElem.textContent = `账户余额每日得分 ${balanceTierPoints} 分，不同得分所需交易量计算如下`;
		}

		document.getElementById('comparisonTableSection').style.display = 'block';
	}

	function handleApplyBtnClick() {
		const targetPoints = parseInt(document.getElementById('targetPoints').value) || 0;
		const balanceTierPoints = parseInt(document.getElementById('balanceTierPoints').value);
		const isBscDouble = document.getElementById('bscDoubleVolume').checked;
		const isFarmingMode = document.getElementById('farmingMode').checked;
		const farmingAmount = parseFloat(document.getElementById('farmingAmount').value) || 2;

		// 计算每日所需积分
		const totalDaysPoints = targetPoints;
		const dailyBalancePoints = balanceTierPoints;

		// 15天内每天需要的积分
		const dailyPointsNeeded = Math.ceil(totalDaysPoints / 15);

		// 每天交易量需要贡献的积分
		const dailyVolumePointsNeeded = Math.max(0, dailyPointsNeeded - dailyBalancePoints);

		// 显示结果部分
		document.getElementById('resultSection').style.display = 'block';

		// 填充结果表格
		const balanceRange = getBalanceRange(balanceTierPoints);

		// 填充通用结果
		document.getElementById('targetPointsResult').textContent = targetPoints;
		document.getElementById('dailyPointsResult').textContent = dailyPointsNeeded;
		document.getElementById('balancePointsResult').textContent = dailyBalancePoints;
		document.getElementById('volumePointsResult').textContent = dailyVolumePointsNeeded;

		// 计算所需交易量（不管是否是刷分模式都需要）
		const requiredVolume = calculateRequiredVolume(dailyVolumePointsNeeded, isBscDouble);
		document.getElementById('volumeResult').textContent = '$' + requiredVolume.toFixed(2);

		if (isFarmingMode) {
			// 刷分模式结果显示
			// 计算BSC双倍效果后的每次交易金额
			const effectiveAmount = isBscDouble ? farmingAmount * 2 : farmingAmount;

			// 计算每天达到所需积分需要的总交易量
			const dailyVolumeNeeded = 2 * Math.pow(2, dailyVolumePointsNeeded - 1);

			// 计算需要多少次交易才能达到这个交易量
			const transactionsNeeded = Math.ceil(dailyVolumeNeeded / effectiveAmount);

			// 填充刷分模式结果
			document.getElementById('transactionsResult').textContent = transactionsNeeded;
			// 显示BSC双倍信息（如果启用）
			document.getElementById('bscFarmingResult').textContent = isBscDouble ? "（已开启 BSC 双倍活动）" : "";

			// 显示刷分模式行，隐藏普通模式行
			document.getElementById('farmingModeResult').style.display = 'table-row';
			document.getElementById('normalModeResult').style.display = 'none';
		} else {
			// 正常模式结果显示
			// 复制交易量到第二个元素
			document.getElementById('volumeResult2').textContent = '$' + requiredVolume.toFixed(2);
			// 显示BSC双倍信息（如果启用）
			document.getElementById('bscNormalResult').textContent = isBscDouble ? "（已开启 BSC 双倍活动）" : "";
			document.getElementById('bscNormalResult2').textContent = isBscDouble ? "（已开启 BSC 双倍活动）" : "";

			// 显示普通模式行，隐藏刷分模式行
			document.getElementById('normalModeResult').style.display = 'table-row';
			document.getElementById('farmingModeResult').style.display = 'none';
		}

		// 生成比较表格
		generateComparisonTable(targetPoints, balanceTierPoints, isBscDouble, isFarmingMode, farmingAmount);
	};

	// 点击"显示更多"展开规则内容
	function handleMoreClick() {
		document.querySelector('.rules-section').classList.add('expanded');
	};

	// 监听BSC双倍成交量活动复选框变化，动态更新比较表格和结果
	function handleBscDoubleVolumeChange() {
		// 如果结果部分已经显示，则重新计算
		if (document.getElementById('resultSection').style.display === 'block') {
			document.getElementById('applyBtn').click();
		}

		// 如果比较表格已经显示，则重新生成
		if (document.getElementById('comparisonTableSection').style.display === 'block') {
			const targetPoints = parseInt(document.getElementById('targetPoints').value) || 0;
			const balanceTierPoints = parseInt(document.getElementById('balanceTierPoints').value);
			const isBscDouble = this.checked;
			const isFarmingMode = document.getElementById('farmingMode').checked;
			const farmingAmount = parseFloat(document.getElementById('farmingAmount').value) || 2;
			generateComparisonTable(targetPoints, balanceTierPoints, isBscDouble, isFarmingMode, farmingAmount);
		}
	};

	// 监听刷分模式复选框变化，动态更新比较表格
	function handlefarmingModeChange() {
		// 显示或隐藏刷分金额输入框
		document.getElementById('farmingAmountInline').style.display =
			this.checked ? 'inline-flex' : 'none';

		// 不再显示右侧刷分金额输入框

		// 同步两个刷分金额输入框的值（不再需要）

		// 如果比较表格已经显示，则重新生成
		if (document.getElementById('comparisonTableSection').style.display === 'block') {
			const targetPoints = parseInt(document.getElementById('targetPoints').value) || 0;
			const balanceTierPoints = parseInt(document.getElementById('balanceTierPoints').value);
			const isBscDouble = document.getElementById('bscDoubleVolume').checked;
			const isFarmingMode = this.checked;
			const farmingAmount = parseFloat(document.getElementById('farmingAmount').value) || 2;
			generateComparisonTable(targetPoints, balanceTierPoints, isBscDouble, isFarmingMode, farmingAmount);
		}
	};

	// 监听刷分金额变化
	function handlefarmingAmountChange() {
		// 不再同步右侧刷分金额输入框

		// 如果比较表格已经显示，则重新生成
		if (document.getElementById('comparisonTableSection').style.display === 'block') {
			const targetPoints = parseInt(document.getElementById('targetPoints').value) || 0;
			const balanceTierPoints = parseInt(document.getElementById('balanceTierPoints').value);
			const isBscDouble = document.getElementById('bscDoubleVolume').checked;
			const isFarmingMode = document.getElementById('farmingMode').checked;
			const farmingAmount = parseFloat(this.value) || 2;
			generateComparisonTable(targetPoints, balanceTierPoints, isBscDouble, isFarmingMode, farmingAmount);
		}
	};
</script>

<style lang="less" scoped>

	.main-container {
		display: flex;
		gap: 20px;
		flex-wrap: wrap;
		margin-top: 30px;
	}

	.calculator-column {
		flex: 1;
		min-width: 300px;
	}

	.rules-column {
		flex: 1;
		min-width: 300px;
	}

	#inputSection {
		background: #202127;
		padding: 20px;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		margin-bottom: 20px;
	}

	#inputSection label {
		display: block;
		/* margin-bottom: 8px;  */
		font-weight: 600;
		color: #fff;
	}

	.input-field {
		width: 100%;
		max-width: 300px;
		height: 42px;
		padding: 0 10px;
		margin-bottom: 20px;
		border: 1px solid #cccccc;
		border-radius: 4px;
		background: #fafafa;
		color: #333333;
		font-size: 16px;
		transition: border-color 0.2s, box-shadow 0.2s;
		box-sizing: border-box;
	}

	/* 针对目标积分和交易所余额的特定样式 */
	#targetPoints,
	#balanceTierPoints {
		margin-bottom: 20px;
	}

	.input-group {
		/* margin-bottom: 25px; */
	}

	.input-group label {
		margin-bottom: 10px;
		display: block;
	}

	/* 移除数字输入框的上下箭头 */
	input.input-field[type="number"]::-webkit-inner-spin-button,
	input.input-field[type="number"]::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input.input-field[type="number"] {
		-moz-appearance: textfield;
	}

	select.input-field {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
		background-repeat: no-repeat;
		background-position: right 10px center;
		background-size: 20px;
		padding-right: 30px;
	}

	.input-field:hover {
		border-color: #888888;
	}

	.input-field:focus {
		outline: none;
		border-color: #22aa22;
		box-shadow: 0 0 8px rgba(34, 170, 34, 0.3);
		// background: #ffffff;
	}

	.checkbox-container {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
		min-height: 36px;
	}

	.checkbox-container input[type="checkbox"] {
		margin-right: 10px;
	}

	.checkbox-container label {
		display: inline-flex;
		align-items: center;
		margin: 0;
		line-height: 1;
	}

	.checkbox-group {
		display: flex;
		flex-direction: column;
		/* gap: 12px; */
		/* margin-bottom: 25px; */
	}

	.info-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background-color: #F3BA2F;
		color: #000;
		text-align: center;
		font-size: 12px;
		font-weight: bold;
		margin-left: 8px;
		cursor: help;
		position: relative;
	}

	.tooltip {
		visibility: hidden;
		width: 300px;
		background-color: #fff;
		color: #333;
		text-align: left;
		border-radius: 6px;
		padding: 10px;
		position: absolute;
		z-index: 1;
		bottom: 125%;
		left: 50%;
		margin-left: -150px;
		opacity: 0;
		transition: opacity 0.3s;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
		font-weight: normal;
		font-size: 14px;
		line-height: 1.4;
	}

	.info-icon:hover .tooltip {
		visibility: visible;
		opacity: 1;
	}

	#applyBtn {
		display: inline-block;
		padding: 10px 24px;
		background: #22aa22;
		// color: #ffffff;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 16px;
		font-weight: 600;
		transition: background 0.3s, transform 0.2s, box-shadow 0.2s;
	}

	#applyBtn:hover {
		background: #1e991e;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(34, 170, 34, 0.3);
	}

	#applyBtn:active {
		transform: translateY(0);
		box-shadow: 0 2px 6px rgba(34, 170, 34, 0.3);
	}

	table {
		width: 100%;
		border-collapse: collapse;
		background: #202127;
		margin-top: 20px;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	th,
	td {
		padding: 12px;
		text-align: center;
		color: #fff;
		border-bottom: 1px solid #eeeeee;
	}

	th {
		background: #f9f9f9;
		font-weight: 600;
	}

	tfoot td {
		font-weight: 600;
		background: #f9f9f9;
	}

	#resultSection {
		background: #202127;
		padding: 20px;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		margin-top: 20px;
		display: none;
	}

	#resultSection p {
		margin: 10px 0;
		font-size: 16px;
		line-height: 1.5;
	}

	.result-table {
		width: 100%;
		border-collapse: collapse;
		margin-top: 15px;
	}

	.result-table tr td {
		padding: 8px 10px;
		text-align: left;
		border-bottom: 1px solid #2a2b35;
	}

	.result-table tr:last-child td {
		border-bottom: none;
	}

	.result-table td:first-child {
		width: 35%;
		color: #fff;
	}

	.result-highlight {
		font-weight: bold;
		color: #22aa22;
	}

	.normal-text {
		font-weight: normal;
		color: #fff;
	}

	.comparison-table-section {
		background: #202127;
		padding: 20px;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		margin-top: 20px;
		display: none;
	}

	.comparison-table-section h3 {
		margin-top: 0;
		margin-bottom: 15px;
		color: #fff;
	}

	.comparison-table {
		width: 100%;
	}

	.comparison-table th,
	.comparison-table td {
		padding: 10px;
		text-align: center;
		border: 1px solid #2a2b35;
	}

	.comparison-table th {
		background-color: #202127;
	}

	.target-row {
		background-color: #f3f9f3;
		font-weight: bold;
	}

	.current-row {
		color: #e53935;
		font-weight: bold;
		text-align: center;
	}

	.current-marker {
		display: inline-block;
		margin-left: 0;
		margin-right: 5px;
		color: #e53935;
		font-weight: bold;
		font-size: 14px;
	}

	.rules-section {
		background: #202127;
		padding: 20px;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		margin-top: 0;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.rules-section h2 {
		margin-top: 0;
		margin-bottom: 15px;
		color: #fff;
	}

	.rules-brief {
		margin-bottom: 15px;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.rules-full {
		display: none;
	}

	.rules-content {
		max-height: 400px;
		/* 约18行的高度 */
		overflow: hidden;
		position: relative;
	}

	.rules-section.expanded .rules-content {
		max-height: none;
		overflow: visible;
	}

	.rules-section.expanded .show-more {
		display: none;
	}

	.rules-section h3 {
		margin-top: 20px;
		color: #fff;
	}

	.rules-section h4 {
		margin-top: 15px;
		color: #fff;
	}

	.rules-section p,
	.rules-section li {
		margin: 10px 0;
		line-height: 1.5;
	}

	.volume-points-table {
		width: 100%;
		margin-top: 10px;
		border-collapse: collapse;
	}

	.volume-points-table th,
	.volume-points-table td {
		padding: 8px;
		text-align: center;
		border: 1px solid #eee;
	}

	.volume-points-table th {
		background-color: #202127;
	}

	.show-more {
		text-align: center;
		color: #fff;
		cursor: pointer;
		margin-top: 10px;
		padding: 5px;
		font-size: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.show-more .arrow-down {
		display: inline-block;
		width: 0;
		height: 0;
		margin-left: 5px;
		border-left: 6px solid transparent;
		border-right: 6px solid transparent;
		border-top: 6px solid #666;
	}

	#farmingAmountContainer {
		margin-top: 10px;
		margin-left: 25px;
		margin-bottom: 20px;
		display: none;
	}

	#farmingRightContainer {
		margin-top: 20px;
		margin-bottom: 20px;
		display: none;
	}

	#farmingAmount,
	#farmingRightAmount {
		width: 80px;
		height: 36px;
		padding: 0 8px;
		border: 1px solid #cccccc;
		border-radius: 4px;
		background: #fafafa;
		color: #333333;
		font-size: 16px;
	}

	.farming-amount-inline {
		display: inline-flex;
		align-items: center;
		margin-left: 15px;
	}

	.farming-amount-inline label {
		margin-right: 5px;
		white-space: nowrap;
	}
	
	@media (max-width: 768px) {
		.main-container {
			flex-direction: column;
		}

		.rules-column,
		.calculator-column {
			width: 100%;
		}
	}

	.table-description {
		font-size: 14px;
		color: #fff;
		margin: 5px 0 15px 0;
		text-align: left;
	}
</style>