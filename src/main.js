import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '../src/assets/css/main.css';
// import http from '../src/core/services/http';
Vue.use(BootstrapVue)
// Vue.use(http)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')