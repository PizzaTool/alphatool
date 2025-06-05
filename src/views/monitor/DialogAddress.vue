<template>
	<el-dialog v-model="dialogVisible" title="批量添加地址" :before-close="close" :close-on-press-escape="false"
		:close-on-click-modal="false" id="pointDialog" width="700px">
		<div class="box">
			<div class="tip">
				<el-button type="primary" @click="addItem">添加地址</el-button>
			</div>
			<div class="wrap">
				<div class="item" v-for="(item, index) in listAll" :key="index">
					<div class="item-col">
						<div>{{ index + 1 }}.</div>
						<div class="item-row__label">名称:</div>
						<el-input v-model="item.name" style="width: 180px" placeholder="请输入名称" />
					</div>
					<div class="item-col">
						<div class="item-row__label">地址:</div>
						<el-input v-model="item.address" style="width: 180px" placeholder="请输入地址" />
					</div>
					<el-switch v-model="item.isShow" class="ml-2" width="60" inline-prompt active-text="显示"
						inactive-text="隐藏" />
					<el-button @click="removeItem(index)">删除</el-button>
				</div>
			</div>
		</div>
		<template #footer>
			<div class="dialog-footer">
				<el-button @click="close">取消</el-button>
				<el-button type="primary" @click="confirm">确认</el-button>
			</div>
		</template>
	</el-dialog>
</template>

<script setup lang="ts">
const dialogVisible = ref(false);
const emits = defineEmits(['closeBtn', 'subBtn']);
const props = defineProps({
	visible: {
		type: Boolean,
		default: false
	},
	dialogSize: {
		type: String,
		default: '80%'
	}
});

const STORAGE_KEY = 'addressListAll';

// 初始化 listAll，尝试从本地读取
const listAll = ref<any>([]);

const loadFromLocalStorage = () => {
	const stored = localStorage.getItem(STORAGE_KEY);
	if (stored) {
		try {
			listAll.value = JSON.parse(stored);
		} catch (e) {
			console.error('读取本地数据出错', e);
			listAll.value = [{ address: "", name: "", isShow: true }];
		}
	} else {
		listAll.value = [{ address: "", name: "", isShow: true }];
	}
};

watch(() => props.visible, (val) => {
	dialogVisible.value = val;
	if (val) {
		loadFromLocalStorage();
	}
});

const addItem = () => {
	listAll.value.push({ address: "", name: "", isShow: true });
};

const removeItem = (index: number) => {
	listAll.value.splice(index, 1);
};

const confirm = () => {
	// 存入本地
	localStorage.setItem(STORAGE_KEY, JSON.stringify(listAll.value));
	// 触发父组件事件
	emits('subBtn', listAll.value);
	// 可自动关闭对话框
	close();
};

const close = () => {
	emits('closeBtn', false);
};
</script>

<style lang="less" scoped>
.box {
	.tip {
		margin-bottom: 10px;
	}

	.wrap {
		height: 300px;
		overflow-y: auto;
	}

	.item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 10px;
		margin-bottom: 10px;

		&-col {
			display: flex;
			align-items: center;
			gap: 4px;
		}
	}
}
</style>
