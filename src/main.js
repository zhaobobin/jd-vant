import Vue from 'vue';
import App from './App.vue';
import router from './router';
import BaseNavBar from './components/BaseNavBar.vue';
import SearchBar from './components/SearchBar.vue';
import './vant/vant.js';
import './global.less';

Vue.component('BaseNavBar', BaseNavBar);
Vue.component('SearchBar', SearchBar);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
