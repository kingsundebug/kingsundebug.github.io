<template>
  <div class="app-container">儿子
    <GrandSon />
  </div>
</template>
<script>
import GrandSon from './grandSon.vue'
export default {
  components: { GrandSon },
  data() {
    return {
      te: 1
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
