
<script>
import config from '../config'
export default {
  name: 'FormItemDemo',
  props: {
    itemConfig: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    componentShow() {
      const vIfArr = this.itemConfig?.options.vIf
      if (!vIfArr) return true
      const relationArr = config.filter(config => vIfArr.some(vIf => vIf.relationKey === config.formKey))
      for (const relationItem of relationArr) {
        const vIfItem = vIfArr.find(_ => _.relationKey === relationItem.formKey)
        // 这里就是判断 联动的表单值 是否不满足 可以显示 的条件，不满足则不显示
        if (relationItem.value !== vIfItem.value) return false
      }
      return true
    }
  },
  render(createElement) {
    if (!this.componentShow) return
    console.log(this.itemConfig)
    return createElement('el-form-item', {
      props: {
        label: this.itemConfig.label // 表单项的label
      }
    }, [
      // 表单组件
      createElement(this.itemConfig.type, {
        props: {
          value: this.itemConfig.value // 这里是自己实现一个 v-model
        },
        on: {
          input: (nVal) => { // 这里是自己实现一个 v-model
            this.itemConfig.value = nVal
          }
        }

      }, this.itemConfig.optionData && this.itemConfig.optionData.map(option => {
        // 这里只是 本demo 处理 el-select 的 option 数据，实际大家根据具体业务来实现即可
        return createElement('el-option', { props: { label: option.label, value: option.value }})
      }))
    ])
  }
}
</script>
<style lang='scss' scoped>
.app-container {}
</style>
