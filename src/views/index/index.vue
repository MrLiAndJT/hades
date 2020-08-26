<template>
    <div>
		<el-container>
			<!-- <el-header>Header</el-header> -->
			<el-container>
				<el-aside :width="menuCollapse ? '64px' : '200px'">
					<my-menu></my-menu>
				</el-aside>
				<el-main>
					<my-content></my-content>
					<!-- <router-view></router-view> -->
				</el-main>
			</el-container>
		</el-container>
    </div>
</template>

<script>
	import myMenu from './myMenu.vue';
	import myContent from './myContent.vue';
	import commonTitle from './commonTitle.vue';
	import { mapState } from 'vuex';
    export default {
        data() {
            return {

            };
        },
        methods: {

		},
		components: {
			myMenu,
			myContent,
			commonTitle
		},
		computed: {
			...mapState(['menuCollapse']),
		}
    };
</script>

<style lang="less" scoped>
	.el-main {
		background-color: #f5f5f5f8;
	}
	.el-main {
		padding: 0;
	}
	.el-aside {
		transition: all .3s linear;
	}
</style>
