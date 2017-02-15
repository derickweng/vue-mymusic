import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import toplist from 'views/toplist'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'toplist',
      component: toplist
    }
  ]
})
