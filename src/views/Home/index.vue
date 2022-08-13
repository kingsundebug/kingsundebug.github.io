<template>
  <div class="home">
    <div class="toggle-list">
      <router-link v-for="(item, index) in list" :key="item.path" class="item" :to="{path: item.path}">{{ index + 1 }} . {{ item.title }}</router-link>
    </div>
    <el-button @click="handleC">传参</el-button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      isShow: false,
      titleVal: true,
      list: [
        { path: '/test', title: '测试' },
        { path: '/slot', title: '插槽' },
        { path: '/demo1', title: '子组件直接修改父组件的值' },
        { path: '/weibo', title: '微博' },
        { path: '/toggleCom', title: '点击按钮切换组件' },
        { path: '/transition', title: '过渡动画' },
        { path: '/list', title: '触底加载更多' },
        { path: '/activity', title: '活动' },
        { path: '/cropper', title: '剪切' },
        { path: '/tableComDemo', title: 'h5表格原生,传自定义表头,字段,支持选中' },
        { path: '/formConfig', title: '表单配置' }
      ]
    }
  },
  created() {
    console.log('created1111')
  },
  mounted() {
    console.log('mounted11111')
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        console.log(11)
      }
    })
  },
  methods: {
    handleC() {
      this.$router.push({
        name: 'demo1',
        params: {
          id: 111111111,
          code: 'wodea你的'
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.toggle-list {
  display: flex;
  width: 400px;
  min-height: 200px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  margin: 100px auto 0;
  background-color: rgb(80, 185, 226);
  border-radius: 8px;
  padding: 15px 0;
  .item {
    color: #fff;
  }
}
</style>
