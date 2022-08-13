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
    name: 'intro',
    path: '/intro',
    component: resolve => require(['@/views/intro/index.vue'], resolve)
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
