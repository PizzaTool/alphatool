<template>
	<el-config-provider :locale="locales">
		<RouterView />
	</el-config-provider>
</template>

<script setup lang="ts">
// import { useI18n } from 'vue-i18n';
// const { t, locale } = useI18n();
const locales = ref();

</script>

<style lang="less">
* {
	-webkit-tap-highlight-color: transparent;
	/* 去掉高亮 */
	outline: none;
	/* 去掉轮廓 */
}

.el-popover.el-popper {
	min-width: 100px !important;
}

.el-slider__button {
	width: 12px !important;
	height: 12px !important;
}

.el-slider__marks-text {
	font-size: 12px;
}
</style>