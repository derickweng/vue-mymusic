import Vue from 'vue'
import Router from 'vue-router'
import toplist from 'views/toplist'
import billboard from 'views/toplist/billboard'
import playing from 'views/playing'
import list from 'views/listdetail'
Vue.use(Router)

export default new Router({
  base : '/',
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
      name : 'playing',
      component : playing
    },
    {
      path:'/list',
      name :'list',
      component : list
    },
    {
      path : '*',
      redirect : '/'
    }
  ]
})
