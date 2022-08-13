<template>
  <div class="app-container">
    <TableH5 :loading="loading" :list="list" :th-array="tableHead" :props-arr="propsArr" @checkChange="checkChangeHandle" />

    <h3>遍历选中项</h3>
    <ul>
      <li v-for="(item, index) in checkList" :key="index">{{ item }}---{{ index }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  components: { },
  data() {
    return {
      loading: false,
      list: [],
      tableHead: [],
      propsArr: [],
      checkList: []
    }
  },
  created() {
    this.getInfoList()
  },
  mounted() {},
  methods: {

    getInfoList() {
      this.loading = true
      this.list = [
        { total: 2121, maxda: 'dsadj', fada: '211', sf: 'sadsd' },
        { total: 313, maxda: '45543fs', fada: 'gfsg', sf: 'fds' },
        { total: 2143421, maxda: 'ffafsa', fada: 'gfs', sf: 'hhy' }
      ]
      this.tableHead = ['表头标题1', '表头标题2', '表头标题3', '表头标题4']
      this.propsArr = ['total', 'maxda', 'fada', 'sf']

      this.loading = false
    },
    checkChangeHandle(check) {
      console.log(check, 'check')
      this.checkList = check
    }
  }
}
</script>
<style lang='scss' scoped>
.app-container {}
</style>
