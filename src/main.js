import { createApp } from "vue";

import router from "./router.js";

import App from "./App.vue";


const app = createApp(App).use(router);

app.use(router);

app.mount("#app");
