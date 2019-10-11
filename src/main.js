import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
//使用ElementUI组件
Vue.use(ElementUI);

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

//引入promise的HTTP客户端axios
import axios from 'axios';
//将axios改写为Vue的原型属性
Vue.prototype.$axios = axios;

//引入百度地图组件库的所有组件
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'bAeeLBKcoMORViTCM7L97OYwDnvaGGKd'
});

//引入vue-loading-overlay模块，加载过渡动画
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

Vue.use(Loading);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
