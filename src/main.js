import Vue from "vue";
import VeeValidate, { Validator } from "vee-validate";
import App from "./App.vue";
import ru from "vee-validate/dist/locale/ru";
window.vue = Vue;
Validator.localize("ru", ru);
Vue.use(VeeValidate, {
  locale: "ru"
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
