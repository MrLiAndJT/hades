import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		menuCollapse: false,	// 左侧菜单栏是否收起
	},
	mutations: {
		changeCollapse (state) {
			state.menuCollapse = !state.menuCollapse;
		}
	},
	actions: {
	},
	modules: {
	}
})
