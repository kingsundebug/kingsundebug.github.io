<template>
  <div class="table2-page">
    <table>
      <thead>
        <tr>
          <template v-if="thArray.length">
            <th>
              <input v-model="checked" type="checkbox" @click="checkedAll">
            </th>
            <th>
              序号
            </th>
          </template>
          <th v-for="(item, index) in thArray" :key="index">{{ item }}</th>
        </tr>
      </thead>
      <tbody v-if="list.length>0">
        <tr v-for="(item, index) in list" :key="index">
          <td>
            <input v-model="checkList" type="checkbox" :value="item">
          </td>
          <td>{{ index + 1 }}</td>

          <td v-for="tds in propsArr" :key="tds">
            {{ item[tds] }}
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="list.length<=0 && !loading" class="nodata">暂无数据</div>
    <div v-if="loading" class="nodata">数据加载中...</div>

  </div>
</template>
<script>
export default {
  name: 'TableH5', //
  props: {
    list: {
      type: [Object, Array],
      required: true
    },
    thArray: {
      type: [Object, Array],
      required: true
    },
    propsArr: {
      type: [Object, Array],
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      checked: false,
      checkList: []
    }
  },
  computed: {
  },
  watch: {
    checkList: {
      handler(newval) {
        console.log(newval)
        this.$emit('checkChange', newval)
        this.checked = this.checkList.length === this.list.length
      },
      deep: true
    },
    list: {
      handler() {
        this.checked = false
        this.checkList = []
      },
      deep: true
    }
  },
  methods: {
    hanldeTd2Click() {
      // alert('驳回')
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
.nodata{
  width: 100%;
  color: #CACACC;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
}
</style>
