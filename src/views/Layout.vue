<template>
	<div class="layout">
		<Header />
		<div class="layout-content">
			<div class="layout-content__box">
				<RouterView />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import Header from "@/components/layout/Header.vue";

</script>

<style lang="less" scoped>
.layout {
	height: 100%;

	&-content {
		height: calc(100% - 56px);
		overflow-y: auto;

		&__box {
			max-width: 1400px;
			margin: 0 auto;
		}
	}
}
</style>