'use strict'

import Vue from 'vue'
import swal from 'sweetalert2'

import App from './App'
import router from './router'

window.swal = swal

Vue.config.productionTip = false

window.vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  mounted () {
    require('bootstrap/dist/css/bootstrap.min.css')
    require('sweetalert2/dist/sweetalert2.min.css')
  }
})
