<template>
  <div class="app-container">
    <el-upload
      class="avatar-uploader"
      action=""
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <img v-if="bgImg" :src="bgImg" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon" />
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，不超过3M</div>
    </el-upload>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      bgImg: ''
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleAvatarSuccess(res, file) {
      this.bgImg = URL.createObjectURL(file.raw)
      console.log(this.bgImg, 'this.bgImg')
    },
    beforeAvatarUpload(file) {
      console.log(file, 'file')

      // 上传成功的回调真实场景不会发生在这里
      this.$emit('uploadSuccess', 111111)
      this.bgImg = 'https://img.tukuppt.com/ad_preview/00/06/79/5c98f7a7edbd7.jpg!/fw/980'

      const isFormat = file.type === 'image/jpeg' || 'image/png'
      const isLt3M = file.size / 1024 / 1024 < 3

      if (!isFormat) {
        this.$message.error('上传头像图片只能是 JPG或者PNG 格式!')
      }
      if (!isLt3M) {
        this.$message.error('上传头像图片大小不能超过 3MB!')
      }
      return isFormat && isLt3M
    }
  }
}
</script>
<style lang='scss' scoped>
.app-container {
   ::v-deep .avatar-uploader {
     .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      &:hover {
        border-color: #409EFF;
      }
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
   }
}
</style>
