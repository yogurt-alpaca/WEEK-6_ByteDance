import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import AOS from "aos";


createApp(App).use(store).use(AOS).use(router).mount("#app");
