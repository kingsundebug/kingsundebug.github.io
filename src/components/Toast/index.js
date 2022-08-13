import Vue from 'vue'
import Toast from './main.vue'
const ConstructorComponent = Vue.extend(Toast)

let instance
const instances = []
let seed = 1

const ToastInstance = (option = {}) => {
  option = option || {}
  if (typeof option === 'string') {
    option = {
      message: option
    }
  }
  const userOnClose = option.onClose
  const id = 'message_' + seed++

  option.onClose = function() {
    ToastInstance.close(id, userOnClose)
  }
  instance = new ConstructorComponent({
    data: option
  })
  instance.id = id
  instance.$mount()
  document.body.appendChild(instance.$el)

  let offTop = 20
  instance.verticalOffset = 20
  instances.forEach(instance => {
    offTop += instance.$el.offsetHeight + 16
  })
  instance.verticalOffset = offTop
  instances.push(instance)
  return instance
}
ToastInstance.close = function(id, userOnClose) {
  const len = instances.length
  let index = -1
  let removedHeight
  for (let i = 0; i < len; i++) {
    if (id === instances[i].id) {
      removedHeight = instances[i].$el.offsetHeight
      index = i
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i])
      }
      instances.splice(i, 1)
      break
    }
  }
  if (len <= 1 || index === -1 || index > instances.length - 1) return
  for (let i = index; i < len - 1; i++) {
    const dom = instances[i].$el
    dom.style['top'] =
      parseInt(dom.style['top'], 10) - removedHeight - 16 + 'px'
  }
}

export default {
  install: Vue => {
    Vue.prototype[`$${Toast.name}`] = ToastInstance
  }
}
