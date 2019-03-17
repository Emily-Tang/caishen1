import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vant from 'vant'
import 'vant/lib/index.css'
import '@/assets/css/base.less'
import '@/assets/css/base.css'

Vue.config.productionTip = false
Vue.use(Vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
