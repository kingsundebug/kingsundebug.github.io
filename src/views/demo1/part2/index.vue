<template>
  <div class="app-container">
    <button @click="handleClick">按钮</button>
  </div>
</template>
<script>
export default {
  components: {},
  model: {
    prop: 'isWhat',
    event: 'changeWhat'
  },
  props: {
    isWhat: {
      type: Boolean
    }
  },
  data() {
    return {}
  },
  created() {
    // console.log('demo报错')
    // const a = null
    // if (a.length.length > 1) {
    //   console.log('demo报错')
    // }
  },
  mounted() {},
  methods: {
    handleClick() {
      const a = null
      if (a.length.length > 1) {
        console.log('demo报错')
      }
      this.$emit('changeWhat', false)
    }
  }
}
</script>
<style lang='scss' scoped>
.app-container {}
</style>
