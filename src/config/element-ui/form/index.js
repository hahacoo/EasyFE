export default {
  name: 'el-form', // 组件名称
  description: '表单', // 组件描述
  attribute: [{
    prop: 'label-width',
    value: '60px',
    label: '属性宽度',
    type: 'string',
    formType: 'input'
  }], // 属性集合
  children: [
    {
      name: 'el-form-item',
      description: '表单域',
      attribute: [{
        prop: 'label',
        value: 'label',
        label: '属性',
        type: 'string',
        formType: 'input'
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
      description: '表单域',
      attribute: [{
        prop: 'label',
        value: 'label',
        label: '属性',
        type: 'string',
        formType: 'input'
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
      description: '表单域',
      attribute: [{
        prop: 'label',
        value: 'label',
        label: '属性',
        type: 'string',
        formType: 'input'
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
  ] // 嵌套组件
}
