import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'indexPage',
    component: () => import('./views/simpleSvg/index.vue')
  },
  {
    path: '/complexSvg',
    name: 'complexSvg',
    component: () => import('./views/complexSvg/index.vue')
  }
  ]
})