import Vue from 'vue'
import VueRouter from 'vue-router';

// 引入进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import Index from '@/views/index/index';

Vue.use(VueRouter)

const routes = [
	{
		path: '/login',
		name: '登录',
		component: () => import('@/views/login/login.vue')
	},
	{
		path: '/',
		redirect: '/home',
		// name: '首页',
		component: Index,
		children: [
			{
				path: 'home',
				// redirect: '/home',
				name: '首页',
				component: () => import('@/views/home/home.vue'),
			},
			{
				path: 'menu/userManage',
				name: '用户管理',
				component: () => import('@/views/liveMenu/userManage')
			},
			{
				path: 'menu/dataManage',
				name: '数据管理',
				component: () => import('@/views/liveMenu/dataManage')
			},
		]
	}
]

const router = new VueRouter({
	routes,
	mode: 'history',
	scrollBehavior: () => ({
        y: 0
    }),
});

router.beforeEach((from, to, next) => {
    NProgress.start();
    next();
})

router.afterEach(t => {
    NProgress.done()
})

export default router
