<template>
  <div class="set-container">
    <el-row :gutter="15">
      <el-col :span="12">
        <div class="pre">
          为啥不换行为啥不换行为啥不换行为啥不换行为啥不换行为啥不换行为啥不换行为啥不换行
        </div>
      </el-col>
      <el-col :span="12">
        <div class="set">2</div>
      </el-col>
    </el-row>
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
.set-container {
  padding: 0;
  height: 100%;
  // .el-row {
  //   width: 100%;
  // }
   .el-row,.el-col {
    height: 100%;
  }
  .pre {
    height: 100%;
    background-color: lightpink;
  }
  .set {
    height: 100%;
    background-color: lightgreen;
  }
}
</style>
