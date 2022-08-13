<template>
  <div class="app-container">
    我是一个子组件，我在红色的海洋里！
    {{ changeValue }}21
    <input type="button" value="点我隐身" @click="upIsShow">
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    changeValue: {
      required: true,
      type: Boolean
    }
  },
  data() {
    return {}
  },
  created() {
    // console.log('part1报错')
    // const a = null
    // if (a.length.length > 1) {
    //   console.log('part1报错')
    // }
  },
  mounted() {},
  methods: {
    upIsShow() {
      this.$emit('update:changeValue', false)
    }
  }
}
</script>
<style lang='scss' scoped>
.app-container {
  width: 600px;
  height: 600px;
  background-color: red;
}
</style>
