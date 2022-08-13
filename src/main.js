import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './assets/comm.css'
import './assets/iconfont/iconfont.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'xe-utils'
import vxetable from 'vxe-table'
import 'vxe-table/lib/style.css'

// 全局组件自动注册
import '@/components/autoComponentRegestier'

import '@/utils/global'
import VueCropper from 'vue-cropper' // 图片裁剪

Vue.use(VueCropper)

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.$eventBus = new Vue()
import VueMeta from 'vue-meta'
Vue.use(VueMeta)

Vue.config.errorHandler = function(err, vm, info) {
  console.log('errorHandler', err, vm, '-=--', info)
}

Vue.use(vxetable)
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
