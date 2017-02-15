import Vue from 'vue'
import Router from 'vue-router'
import toplist from 'views/toplist'
import billboard from 'views/toplist/billboard'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'toplist',
      component: toplist,
      children : [
        {
          path : '',
          name : 'billboard',
          component : billboard,
        }
      ]
    }
  ]
})
