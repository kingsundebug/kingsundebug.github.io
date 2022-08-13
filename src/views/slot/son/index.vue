<template>
  <div class="app-container">
    <h3>具名插槽子组件</h3>
    <div>
      <slot name="one">具名插槽1: 默认值1</slot>
    </div>
    <div>
      <slot name="two">具名插槽2: 默认值2</slot>
    </div>
    <div>
      <slot name="three">具名插槽3: 默认值3</slot>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang='scss' scoped>
.app-container {}
</style>
