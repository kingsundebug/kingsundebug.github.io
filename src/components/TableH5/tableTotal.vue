<template>
  <div class="table2-page">
    <table>
      <thead>
        <tr>
          <th>
            <input v-model="checked" type="checkbox" @click="checkedAll">
          </th>
          <th v-for="(item, index) in thArray" :key="index">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="index">
          <td>
            <input v-model="checkList" type="checkbox" :value="item">
          </td>
          <td>{{ item.order }}</td>
          <td @click="hanldeTd2Click">{{ item.name }}({{ item.status }})</td>
          <td>{{ item.total }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'TableTotal', //
  props: {
    list: {
      type: [Object, Array],
      required: true
    }
  },
  data() {
    return {
      thArray: ['序号', '姓名', '总分'],
      checked: false,
      checkList: []
    }
  },
  watch: {
    checkList: {
      handler(newval) {
        console.log(newval)
        this.$emit('checkChange', newval)
      },
      deep: true
    }
  },
  methods: {
    hanldeTd2Click() {
      alert('驳回')
    },
    checkedAll: function() {
      var _this = this
      if (_this.checked) {
        // 实现反选
        _this.checkList = []
      } else {
        // 实现全选
        _this.checkList = []
        _this.list.forEach(function(item, index) {
          if (index >= 0) {
            _this.checkList.push(item)
          }
        })
      }

      console.log(_this.checkList)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./tableCss/index.scss";
.table2-page {
  overflow-x: auto;
}
</style>
