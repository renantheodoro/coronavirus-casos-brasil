import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMeta from 'vue-meta'
import VueRouter from 'vue-router'
import Routes from './routes';

// Router definition
const router = new VueRouter({
  mode: 'history',
  // linkActiveClass: "active",
  routes: Routes
});

Vue.use(VueRouter)
Vue.use(VueMeta)
Vue.use(VueAxios, axios)

import '@/assets/scss/main.scss';

Vue.config.productionTip = false;

// Start
const app = new Vue({
  router,
  render: createEle => createEle(App)
});

app.$mount("#app");