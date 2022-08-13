<template>
  <div class="app-container">
    <el-tree :data="resData" :props="defaultProps" @node-click="handleNodeClick" />
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      resData: [],
      defaultProps: {
        children: 'employee',
        label: 'name'
      }
    }
  },
  created() {
    this.getData()
  },
  mounted() {},
  methods: {
    formatStr(str) {
      let forArr = str.split('|')

      forArr = forArr.map(item => {
        const temparr = item.split(',')
        const obj = {}
        obj.name = temparr[0].trim()
        obj.lead = temparr[1].trim()
        obj.professional = temparr[2].trim()
        obj.year = temparr[3].trim()
        return obj
      })
      function handleEmployee(name) {
        return forArr.filter(item => {
          return item.lead === name
        })
      }

      forArr.forEach(item => {
        item.employee = handleEmployee(item.name)
      })

      const arr = []
      arr[0] = forArr.find(item => {
        return item.lead === 'NULL'
      })
      return arr
    },
    getData() {
      const str = 'Tom,lan,technical lead, 2009 | lan,NULL,CEO,2007| Fred, Tom, developer, 2010'
      this.resData = this.formatStr(str)
      console.log(this.resData)
    },
    handleNodeClick(data) {
      console.log(data)
    }
  }
}
</script>
<style lang='scss' scoped>
.app-container {}
</style>
