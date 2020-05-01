import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"


import "./assets/css/settings.css"
import "./assets/css/meanmenu.css"
import "./assets/css/custom.css"
import "./assets/css/style.css"






Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
