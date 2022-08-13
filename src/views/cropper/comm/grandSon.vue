<template>
  <div class="app-container">孙子</div>
</template>
<script>
export default {
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {
    this.$eventBus.$on('check', () => {
      this.handle()
    })
  },
  beforeDestroy() {
    this.$eventBus.$off('check')
  },
  methods: {
    handle() {
      console.log('sunzi de fangfa')
    }
  }
}
</script>
<style lang='scss' scoped>
.app-container {}
</style>
