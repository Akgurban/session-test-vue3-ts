import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
//import VueI18n from 'vue-i18n'

import App from "./App.vue";
import router from "./router";
import { createI18n } from "./plugins/i18n";
import { useDark, useToggle, useColorMode } from "@vueuse/core";

const app = createApp(App);
const i18n = createI18n();

app.use(createPinia());
app.use(router);

app.use(i18n);

app.mount("#app");
