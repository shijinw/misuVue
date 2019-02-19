import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../node_modules/less'; //引入全局less文件
import indecss from './assets/css/index.css'
import join from './assets/css/join.css'
import Shop from './assets/css/shopcss.css'
import news from './assets/css/news.css'
import aboutc from './assets/css/about.css'
import MuseUI from '../node_modules/muse-ui';
import '../node_modules/muse-ui/dist/muse-ui.css';
import reset from './assets/css/reset.min.css'
import animtion from './assets/css/animtion.css';

Vue.config.productionTip = false
Vue.use(MuseUI);
new Vue({
  router,
  store,
  indecss,
  reset,
  join,
  Shop,
  news,
  aboutc,
  animtion,
  render: h => h(App)
}).$mount('#app')