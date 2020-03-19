import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vue-select/dist/vue-select.css';

Vue.config.productionTip = false
Vue.config.ignoredElements = ['ion-icon'];

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
