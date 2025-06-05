<template>
	<div class="page">
		<div class="head">
			<div class="head-left">
				<div class="head-left__logo">
					<img src="@/assets/imgs/logo.png" alt="">
					<div>Alpha</div>
				</div>
				<div class="head-left__link">
					<div @click="handleLinkClick(2)" :class="tab == 2 ? 'isClick' : ''">代币列表</div>
					<div @click="handleLinkClick(3)" :class="tab == 3 ? 'isClick' : ''">交易分析</div>
					<div @click="handleLinkClick(4)" :class="tab == 4 ? 'isClick' : ''">实时监控</div>
					<div @click="handleLinkClick(5)" :class="tab == 5 ? 'isClick' : ''">积分计算器</div>
					<div @click="handleLinkClick(6)" :class="tab == 6 ? 'isClick' : ''">代币授权</div>
				</div>
			</div>
			<div class="head-right">

				<div id="rainbowkit-modal"></div>
				<div class="content">
					<appkit-button />
				</div>
				<!-- <el-popover placement="bottom" :width="40" trigger="click">
					<template #reference>
						<el-button>{{langStr}}</el-button>
					</template>
<div class="head-lang" :class="langTab == 1?'isLang':''" @click="handleLangClick(1)">简体中文</div>
<div class="head-lang" :class="langTab == 2?'isLang':''" @click="handleLangClick(2)">English</div>
</el-popover> -->
			</div>
		</div>

	</div>
</template>

<script setup lang="ts">
import { createAppKit, } from '@reown/appkit/vue'
import { ethersAdapter, networks, projectId } from '@/config/index'

createAppKit({
	adapters: [ethersAdapter],
	networks,
	projectId,
	themeMode: 'dark',
	features: {
		analytics: true // Optional - defaults to your Cloud configuration
	},
	metadata: {
		name: 'AppKit Vue Example',
		description: 'AppKit Vue Example',
		url: window.location.origin,
		icons: ['https://avatars.githubusercontent.com/u/179229932?s=200&v=4']
	},
})



const router = useRouter()
const tab = ref(2)


const handleLinkClick = (type: any) => {
	tab.value = type;
	if (type == 2) {
		router.push("/")
	} else if (type == 3) {
		router.push("/analyze")
	} else if (type == 4) {
		router.push("/monitor")
	} else if (type == 5) {
		router.push("/calculator")
	} else if (type == 6) {
		router.push("/auth")
	}

}

onMounted(async () => {
	watch(() => router.currentRoute.value.path, (newValue,) => {
		let newArr = newValue.split('/');
		let proName = '/' + newArr[1]
		if (proName == '/') {
			tab.value = 2;
		} else if (proName == '/analyze') {
			tab.value = 3;
		} else if (proName == '/monitor') {
			tab.value = 4;
		} else if (proName == '/calculator') {
			tab.value = 5;
		} else if (proName == '/auth') {
			tab.value = 6;
		}
	}, { immediate: true })
	await nextTick()
})

</script>

<style lang="less" scoped>
.head {
	height: 56px;
	background: #202127;
	padding: 0 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	&-left {
		display: flex;
		align-items: center;

		&__logo {
			display: flex;
			align-items: center;
			margin-right: 20px;
			font-size: 20px;
			gap: 4px;
			font-weight: bold;

			img {
				width: 30px;
				height: 30px;
			}
		}

		&__link {
			display: flex;
			align-items: center;
			gap: 10px;

			div {
				color: #969faf;
				cursor: pointer;
			}

			div:hover {
				opacity: .8;
			}
		}
	}

	&-lang {
		cursor: pointer;
		text-align: center;
		line-height: 30px;
		border-top: solid 1px #262C37;
	}

	&-lang:hover {
		opacity: 0.7;
	}

	&-lang:nth-of-type(1) {
		border: none;
	}

}

.isLang {
	color: #fff;
	font-weight: 600;
}

.isClick {
	color: #fff !important;
	font-weight: 600;
}
</style>