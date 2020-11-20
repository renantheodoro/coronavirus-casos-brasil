import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueMeta from 'vue-meta';
import VueRouter from 'vue-router';
import Routes from './routes';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth'
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBbNnu91Tj9XDV6QJpmK7sbkRh3cvA1ghs',
  authDomain: 'coronavirus-d8238.firebaseapp.com',
  databaseURL: 'https://coronavirus-d8238.firebaseio.com',
  projectId: 'coronavirus-d8238',
  storageBucket: 'coronavirus-d8238.appspot.com',
  messagingSenderId: '1043723412030',
  appId: '1:1043723412030:web:bfacebb48117aefb1d276f',
  measurementId: 'G-54PN6STKV8'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
Vue.prototype.$analytics = firebase.analytics();

// Router definition
const router = new VueRouter({
  mode: 'history',
  // linkActiveClass: "active",
  routes: Routes
});

Vue.use(VueRouter);
Vue.use(VueMeta);
Vue.use(VueAxios, axios);

import numeral from 'numeral';
import numFormat from 'vue-filter-number-format';

Vue.filter('numFormat', numFormat(numeral));

import '@/assets/scss/main.scss';
import '@/assets/fonts/css/iconmonstr-iconic-font.min.css';

Vue.prototype.$results = require('./services/results').default;

Vue.config.productionTip = false;

// Start
const app = new Vue({
  router,
  render: createEle => createEle(App)
});

app.$mount('#app');
