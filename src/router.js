import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'indexPage',
    component: () => import('./views/guide/index.vue')
  },
  {
    path: '/basicShape',
    name: 'basicShape',
    component: () => import('./views/basicShape/index.vue')
  },
  {
    path: '/animate',
    name: 'animateDemo',
    component: () => import('./views/animateDemo/index.vue')
  }
  ]
})