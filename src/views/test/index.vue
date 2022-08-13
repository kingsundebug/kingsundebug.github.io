<template>
  <div class="app-container">
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.text }}</li>
    </ul>

    <button @click="handlec">按钮</button>
    <Son />
  </div>
</template>
<script>
import Son from './son.vue'
export default {
  components: { Son },
  data() {
    return {
      obj: {
        aa: 1111
      },
      timer: null,
      list: [
        { text: '11', id: 0 },
        { text: 'das', id: 1 },
        { text: 'fds', id: 2 },
        { text: 'saas', id: 3 }
      ]
    }
  },
  errorCaptured(Error, com, string) {
    console.log('errorCaptured', Error, '---', com, '-=--', string)
    return false
  },
  created() {},
  mounted() {
    // throw new Error('报错信息')
    this.a = 12
  },
  methods: {
    change() {
      function handle() {
        console.log('处理点击')
      }
      this.debounce(handle, 1000)
    },
    debounce(fn, time) { // 防抖
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }
      this.timer = setTimeout(() => {
        fn.call(this)
      }, time)
    },
    handlec() {
      this.list
    }
  }
}
</script>
<style lang='scss' scoped>
.app-container {}
</style>
