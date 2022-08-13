
<template>
<!-- eslint-disable -->
  <div class="app-container">
    <ul class="container">
      <!--  eslint-disable-next-line vue/require-v-for-key -->
      <li :class="item.id === list.length - 1 ? 'last_item':''" class="listitem" v-for="(item) in list" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      list: [

      ],
      start: false
    }
  },
  watch: {
    start: {
      handler() {
        if (this.start) return
        const container = document.querySelector('.container')
        const last_child = container.lastChild
        console.dir(last_child)
        container.addEventListener('scroll', function(e) {
          // const lastItemTop = document.querySelector('.last_item').offsetTop
          console.log('scroll', container.scrollTop, document.querySelector('.last_item').parentNode.offsetTop)
        })
      }
    }
  },
  created() {
    this.getData()
  },
  mounted() {
  },
  methods: {
    getData() {
      this.start = true
      setTimeout(() => {
        for (let i = 0; i < 15; i++) {
          const obj = { name: 1, id: i }
          this.list.push(obj)
        }
        console.log('获取数据结束')
        this.start = false
      }, 1000)
    }
  }
}
</script>
<style lang='scss' scoped>
.app-container {
  .container {
    margin-top: 20px;
    height: 400px;
    overflow-y: auto;
    .listitem {
      height: 40px;
      line-height: 40px;
      text-align: center;
      background-color: #fff;
      border-bottom: 1px solid #ccc;
    }
    .last_item {
      color: red;
    }
  }

}
</style>
