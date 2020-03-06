import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

Vue.config.productionTip = false;

import '@/assets/scss/main.scss';

new Vue({
  render: h => h(App),
}).$mount('#app')
