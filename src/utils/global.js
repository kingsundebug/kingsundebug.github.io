import Vue from 'vue'

Vue.directive('pin', {
  bind: function(el, binding, vnode) {
    el.style.position = 'fixed'
    var s = (binding.arg === 'left' ? 'left' : 'top')
    el.style[s] = binding.value + 'px'
  }
})
