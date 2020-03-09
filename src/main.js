import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMeta from 'vue-meta'

Vue.use(VueMeta)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false;

import '@/assets/scss/main.scss';

new Vue({
  render: h => h(App),
}).$mount('#app')
