<template>
  <div class="app-container">

    <el-form label-width="100px">
      <FormItemDemo v-for="(itemConfig, index) in config" :key="index" :item-config="itemConfig" />
    </el-form>

  </div>
</template>
<script>
import FormItemDemo from './FormItemDemo'
import config from './config'
export default {
  components: { FormItemDemo },
  data() {
    return {
      config
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {

  }
}
</script>
<style lang='scss' scoped>
.app-container {}
</style>
