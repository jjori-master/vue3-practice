import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

const app = createApp(App).mount("#app");

app.config.errorHandler = (err, vm, info) => {
  console.error(err, vm, info);
  debugger;
};
