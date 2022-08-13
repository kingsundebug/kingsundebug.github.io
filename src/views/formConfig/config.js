
const config = [
  {
    type: 'el-input',
    label: '活动名称',
    formKey: 'name',
    value: '', // 默认值为空字符串
    options: {
      vIf: [
      // 表示：当 form.area === 'area1'，才显示
        { relationKey: 'area', value: 'area1' },
        { relationKey: 'area2', value: 'areaa' }
      ]
    }
  },
  {
    type: 'el-select',
    label: '活动区域',
    formKey: 'area',
    value: 'area1',
    options: {
      multiple: true
    },
    optionData: [ // 这里模拟去后端拉回数据
      { label: '区域1', value: 'area1' },
      { label: '区域2', value: 'area2' }
    ]
  },
  {
    type: 'el-select',
    label: '活动区域2',
    formKey: 'area2',
    value: 'areaa',
    options: {
      multiple: true
    },
    optionData: [ // 这里模拟去后端拉回数据
      { label: '区域1', value: 'areaa' },
      { label: '区域2', value: 'areaaa' }
    ]
  }
]
// 优化函数
function optimize(array) {
  return array.reduce((acc, cur) => {
    console.log(cur, 'cur')
    for (const key of Object.keys(cur)) {
      if (key === 'value') continue
      // 将不是 value 的属性都进行非响应式优化
      Object.defineProperty(cur, [key], { enumerable: false })
    }
    acc.push(cur)
    return acc
  }, [])
}
optimize(config)

export default config
