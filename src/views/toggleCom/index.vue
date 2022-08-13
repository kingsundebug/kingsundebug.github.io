<template>
  <div class="app-container">
    <button @click="handleClick(1)">按钮1</button>
    <button @click="handleClick(2)">按钮2</button>
    <button @click="handleClick(3)">按钮3</button>
    <transition name="fade" mode="out-in">
      <component :is="whichCom" />
    </transition>
  </div>
</template>
<script>
import Components1 from './component/comm1'
import Components2 from './component/comm2'
import Components3 from './component/comm3'
// import Vue from 'vue'
// const Components1 = Vue.extend({
//   name: 'One',
//   template: `<div>
//   <span>111</span>
//   </div>`
// })
// const Components2 = Vue.extend({
//   name: 'Two',
//   template: `<div>
//   <span>222</span>
//   </div>`
// })
// const Components3 = Vue.extend({
//   name: 'Three',
//   template: `<div>
//   <span>333</span>
//   </div>`
// })
export default {
  components: {
    Components1, Components2, Components3
  },
  data() {
    return {
      whichCom: 'Components1'
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleClick(v) {
      this.whichCom = `Components${v}`
    }
  }
}
</script>
<style lang='scss' scoped>
.app-container {
  .fade-enter-active,.fade-leave-active {
    transition: opacity .3s ease;
  }
  .fade-leave-to,.fade-enter {
    opacity: 0;
  }
}
</style>
