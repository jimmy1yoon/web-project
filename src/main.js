import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store/index.js'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),
  store
}).$mount('#app')
