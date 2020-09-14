import '@mdi/font/css/materialdesignicons.min.css'
import 'quasar/dist/quasar.min.css'
import '@/assets/css/style.styl'

import Vue from 'vue'
import App from './App.vue'
import router from './router'

import store from './store'
import axios from 'axios'
import iconSet from 'quasar/icon-set/mdi-v5'
import Quasar from 'quasar'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(Quasar, {
  iconSet: iconSet,
  config: {
    brand: {
      primary: '#027BE3',
      secondary: '#26A69A',
      accent: '#9C27B0',

      dark: '#1d1d1d',

      positive: '#21BA45',
      negative: '#C10015',
      info: '#31CCEC',
      warning: '#F2C037'
    }
  }
})

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
