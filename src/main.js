import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
Vue.config.productionTip = false

// Vue.prototype.BACKEND_DOMAIN = 'https://ehsan.hmachinery.ir';
Vue.prototype.BACKEND_DOMAIN = 'http://localhost:8000';

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
