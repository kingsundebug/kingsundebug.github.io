<template>
  <div class="app-container">
    <h1>父组件区域</h1>
    <br>
    <Son>
      <template v-slot:one>具名插槽11111</template>
      <template v-slot:two>具名插槽2222</template>
      <template #three>具名插槽3333</template>
    </Son>
    <br>
    <ScopeSon :list="list">
      <template slot-scope="{ row }">
        <span :style="{'color': row.id > 3 ? 'green' : 'blue'}">{{ row.name }}</span>
      </template>
    </ScopeSon>
    <br>
    <h1>父组件区域</h1>
  </div>
</template>
<script>

import Son from './son/index.vue'
import ScopeSon from './scopeSon/index.vue'

export default {
  components: { Son, ScopeSon },
  data() {
    return {
      list: [
        { id: 1, name: '孙悟空' },
        { id: 2, name: '猪八戒' },
        { id: 3, name: '沙和尚' },
        { id: 4, name: '唐僧' },
        { id: 5, name: '小白龙' }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang='scss' scoped>
.app-container {}
</style>
