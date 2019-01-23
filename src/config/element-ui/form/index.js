export default {
  name: 'el-form', // 组件名称
  attribute: [{
    prop: 'label-width',
    value: '60px'
  }], // 属性集合
  children: [
    {
      name: 'el-form-item',
      attribute: [{
        prop: 'label',
        value: 'label'
      }],
      children: [
        {
          name: 'efe-placeholder',
          attribute: [{
            prop: 'text',
            value: '表单域'
          }]
        }
      ]
    },
    {
      name: 'el-form-item',
      attribute: [{
        prop: 'label',
        value: 'label'
      }],
      children: [
        {
          name: 'efe-placeholder',
          attribute: [{
            prop: 'text',
            value: '表单域'
          }]
        }
      ]
    },
    {
      name: 'el-form-item',
      attribute: [{
        prop: 'label',
        value: 'label'
      }],
      children: [
        {
          name: 'efe-placeholder',
          attribute: [{
            prop: 'text',
            value: '表单域'
          }]
        }
      ]
    }
  ]
}
