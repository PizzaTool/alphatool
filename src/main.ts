import { createApp } from "vue";
import App from "./App.vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import router from "./router";
import { pinia } from "./store";
import i18n from "./language/i18n.js";
import "@/assets/styles/reset.less";
import "element-plus/theme-chalk/dark/css-vars.css";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(pinia);
app.use(router);
app.use(i18n);

app.mount("#app");
