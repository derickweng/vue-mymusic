import Vue from 'vue'
import App from './App'
import router from './router'
import store from 'store/store.js'
import directives from 'directives'
import banner from 'components/banner'

Vue.use(banner)
new Vue({
  el: '#app',
  router,
  store,
  directives,
  template: '<App/>',
  components: { App }
})
