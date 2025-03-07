import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);

const options = {
  position: POSITION.BOTTOM_RIGHT,
};

app.use(router);
app.use(Toast, options);

app.mount("#app");
