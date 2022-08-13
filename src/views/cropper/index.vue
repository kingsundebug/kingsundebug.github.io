<template>
  <div class="app-container">
    <div v-if="show" style="width:500px;height:500px">
      <vue-cropper ref="cropper" auto-crop :img="croperSrc" center-box />
    </div>
    <el-button block style="margin:10px 0" type="primary" @click="getCropData()">获取截图后的图片</el-button>
    <el-upload action="" />
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList"
      :http-request="handleRequest"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
      show: false,
      croperSrc: 'https://jth.zqread.com/static/zqsw/dyttx/activeall/runSpring/images/cover.png'
    }
  },
  created() {},
  mounted() {},
  methods: {
    getCropData() {
      this.$refs.cropper.getCropData(data => {
        console.log(data)
      })
    },
    handleRequest() {
      console.log(11)
      this.show = true
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>
<style lang='scss' scoped>
.app-container {}
</style>
