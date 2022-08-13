<template>
  <div class="home">
    <h1>Hello! This is Website of Kingsun. Welcome!</h1>
    <div class="toggle-list">
      <router-link v-for="(item, index) in list" :key="item.path" class="item" :to="{path: item.path}">{{ index + 1 }} . {{ item.title }}</router-link>
    </div>
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
        { path: '/intro', title: '个人介绍' },
        // { path: '/article1', title: '关于人生' },
        // { path: '/experience', title: '关于过往' },
        // { path: '/tomorrow', title: '关于明天' },
        { path: '/thinks', title: '碎碎念' },
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
h1 {
  text-align: center;
  padding: 20px;
}
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
