import { boot } from "quasar/wrappers";
import axios from "axios";

const api = axios.create({ baseURL: "http://10.4.22.30:3000/" });

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { axios, api };
