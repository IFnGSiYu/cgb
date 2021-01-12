import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import { Slider, Progress, Button } from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(Slider);
// Vue.use(Progress);
// Vue.use(Button);

// import { Dialog } from 'vant';

// // // 全局注册
// Vue.use(Dialog);
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios)

// import 'uview-ui/theme.scss';
// import uView from "uview-ui"
// Vue.use(uView);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
