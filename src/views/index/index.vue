<template>
    <div>
		<el-container>
			<!-- <el-header>Header</el-header> -->
			<el-container>
				<el-aside width="200px">
					<my-menu></my-menu>
				</el-aside>
				<el-main>
					<main-content></main-content>
				</el-main>
			</el-container>
		</el-container>
    </div>
</template>

<script>
	import myMenu from './myMenu.vue';
	import mainContent from './mainContent.vue';
	import commonTitle from './commonTitle.vue';
    export default {
        data() {
            return {

            };
        },
        methods: {

		},
		components: {
			myMenu,
			mainContent,
			commonTitle
		}
    };
</script>

<style lang="less" scoped>
	.el-main {
		background-color: #f8f8f8f8;
	}
	.el-main {
		padding: 0;
	}
</style>
