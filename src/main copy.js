import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



/**
 * Boostrap-Vue.js
**/
import BootstrapVue from 'bootstrap-vue'
// Archivos CSS:
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)



/**
 * Apex Charts
**/
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
 
Vue.component('apexchart', VueApexCharts)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')