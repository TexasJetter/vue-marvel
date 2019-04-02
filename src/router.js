import Vue from 'vue'
import Router from 'vue-router'
import Characters from './views/Characters.vue'
import Comics from './views/Comics.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Characters
    },
    {
      path: '/characters',
      name: 'characters',
      component: Characters
    },
    {
      path: '/comics',
      name: 'comics',
      component: Comics
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
