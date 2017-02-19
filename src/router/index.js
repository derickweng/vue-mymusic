import Vue from 'vue'
import Router from 'vue-router'
import toplist from 'views/toplist'
import billboard from 'views/toplist/billboard'
import playing from 'views/playing'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: toplist,
      children : [
        {
          path : '',
          name : 'billboard',
          component : billboard,
        }
      ]
    },
    {
      path:'/playing',
      name : playing,
      component : playing
    }
  ]
})
