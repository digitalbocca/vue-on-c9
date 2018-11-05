'use strict'

import Vue from 'vue'
import swal from 'sweetalert2'

import App from './App'
import router from './router'

window.swal = swal

Vue.config.productionTip = false

window.vm = new Vue({
  router,
  render: h => h(App),
  mounted () {
    require('bootstrap/dist/css/bootstrap.min.css')
    require('sweetalert2/dist/sweetalert2.min.css')
  }
}).$mount('#app')
