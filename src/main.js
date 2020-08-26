import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 公共样式
import '@/style/common.less';

// ELement-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);




Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
