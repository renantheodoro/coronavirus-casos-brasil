import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import * as VueRouter from "vue-router";
import routes from "./routes";

import "@/assets/scss/main.scss";
import "@/assets/fonts/css/iconmonstr-iconic-font.min.css";

// Route definition
const router = new VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

// App config
const app = createApp(App);

app.use(router);
app.use(VueAxios, axios);

// App mount
app.mount("#app");
