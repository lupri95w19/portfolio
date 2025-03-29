import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "@fontsource/inter";
import "@fontsource/jetbrains-mono";

createApp(App).mount("#app");
app.use(router);
