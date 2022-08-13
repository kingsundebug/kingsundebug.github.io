<template>
  <div class="home">
    1
    <input
      type="button"
      value="我是父组件中的按钮"
      @click="show"
    >
    <part2 v-model="titleVal" />
    <part1 v-show="isShow" :change-value.sync="isShow" />

  </div>
</template>

<script>
// 子组件改变父组件的值两种方法

// part1: 单纯子组件改变父组件的值,父组件没有传值给子组件
// part2: 父子组件数据双向绑定
import part1 from './part1'
import part2 from './part2'
export default {
  name: 'Home',
  components: {
    part1,
    part2
  },
  data() {
    return {
      isShow: false,
      titleVal: true
    }
  },
  created() {
    console.log(this.$route.params.id)
  },
  errorCaptured(dom, vm, err) {
    console.log('errorCaptured捕获', dom, vm, err)
  },
  mounted() {
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        console.log(11)
      }
    })
  },
  methods: {
    show() {
      this.isShow = true
    }

  }
}
</script>
