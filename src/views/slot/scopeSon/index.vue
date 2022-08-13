<template>
  <div class="app-container">
    <h3>作用域插槽子组件</h3>
    <ul>
      <li v-for="item in list" :key="item.id">
        <slot :row="item">
          <span style="color: red">{{ item.name }} --- 默认值</span>
        </slot>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  components: {},
  props: ['list'],
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
