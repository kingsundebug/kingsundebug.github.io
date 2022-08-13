import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index.vue'

Vue.use(VueRouter)

const routerList = []
const routers = require.context('./', false, /router\.js$/)
routers.keys().forEach(file => {
  routerList.push(...routers(file).default)
})

const routes = [
  ...routerList,
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/weibo',
    name: 'weibo',
    component: () => import('@/views/weibo/index.vue')
  },
  {
    path: '/demo1/:code/:id',
    name: 'demo1',
    component: () => import('@/views/demo1/index.vue')
  },
  {
    path: '/slot',
    name: 'slot',
    component: () => import('@/views/slot/index.vue')
  },
  {
    path: '/toggleCom',
    name: 'toggleCom',
    component: () => import('@/views/toggleCom/index.vue')
  },
  {
    path: '/transition',
    name: 'transition',
    component: () => import('@/views/transition/index.vue')
  },
  {
    path: '/companyPerson',
    name: 'companyPerson',
    component: () => import('@/views/companyPerson')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('@/views/list')
  },
  {
    path: '/activity',
    name: 'activity',
    component: () => import('@/views/activity')
  },
  {
    path: '/cropper',
    name: 'cropper',
    component: () => import('@/views/cropper')
  },
  {
    path: '/tableComDemo',
    name: 'tableComDemo',
    component: () => import('@/views/tableComDemo')
  },
  {
    path: '/formConfig',
    name: 'formConfig',
    component: () => import('@/views/formConfig')
  },

  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main')
  },
  {
    name: '404',
    path: '/404.html',
    component: resolve => require(['@/views/NotFound.vue'], resolve)
  },
  {
    path: '*',
    redirect: {
      name: '404'
    }
  }

]

const router = new VueRouter({
  routes
})

export default router
