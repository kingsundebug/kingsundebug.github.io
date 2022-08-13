<template>
  <div class="app-container">
    <el-row :gutter="15">
      <el-col :span="8">
        <el-tabs v-model="tabName" type="border-card" tab-position="left" @tab-click="tabClick">
          <el-tab-pane name="first">
            <span slot="label"><i class="el-icon-folder" /> 全局设置</span>
            <el-form ref="whoFormRef" label-width="80px">
              <el-form-item label="活动底图">
                <upload @uploadSuccess="hanldebBgFileSuccess" />
              </el-form-item>
              <el-form-item label="提交按钮">
                <upload @uploadSuccess="hanldeBtnFileSuccess" />
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane name="second">
            <span slot="label"><i class="el-icon-copy-document" />内容设置</span>
            <h3>活动说明组件</h3>
            <div class="content">
              <div v-for="(item, index) in arr1" :key="index" class="box">{{ item.text }}</div>
            </div>
            <h3>活动交互组件</h3>
            <div class="content">
              <div v-for="(item, index) in arr2" :key="index" class="box">{{ item.text }}</div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="8">
        <!-- 展示区域 -->
        <div class="preview-area" :style="{backgroundImage: 'url(' + bgImg + ')'}">

          <!-- 提交按钮 -->
          <div v-if="submitBtnSrc" class="sub-btn">
            <el-image fit="fit" :src="submitBtnSrc" />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import upload from './comms/upload'
// import settings from './settings'
export default {
  name: 'Setting',
  components: { upload },
  data() {
    return {
      id: '',

      isPreview: false,
      isSetter: false,
      tabName: 'first',
      arr1: [{ text: '顶部图片' }, { text: '活动说明' }],
      arr2: [
        { text: '素材标题' },
        { text: '素材说明' },
        { text: '素材标签' },
        { text: '素材上传' }
      ],
      bgImg: '', // require('@/assets/logo.png')
      submitBtnSrc: ''
    }
  },
  created() {},
  mounted() {
    this.id = this.$route.query.id
  },
  methods: {
    tabClick(tab, event) {
      console.log(tab, event)
    },
    hanldebBgFileSuccess(id) {
      console.log('文件上传成功', id)
      this.bgImg = 'https://img.tukuppt.com/ad_preview/00/06/79/5c98f7a7edbd7.jpg!/fw/980'
    },
    hanldeBtnFileSuccess(id) {
      console.log('文件上传成功', id)
      this.submitBtnSrc = 'https://img.tukuppt.com/ad_preview/00/06/79/5c98f7a7edbd7.jpg!/fw/980'
    }

  }
}
</script>
<style lang='scss' scoped>
.app-container {
  .el-row,.el-col {
    height: 100%;
  }
  .el-tabs {
    height: 100%;
  }
  .preview-area {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #E7E7E7;
    .sub-btn {
      width: 228px;
      height: 47px;
      margin: 0 auto;

      .el-image {
        width: 100%;
        height: 100%;
         border-radius: 16px;
      }
    }
  }
}
</style>
