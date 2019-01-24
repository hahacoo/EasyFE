export default {
  name: 'el-button', // 组件名称
  description: '按钮',
  attribute: [
    {
      prop: 'type',
      value: 'default',
      label: '类型',
      type: 'string',
      formType: 'select',
      options: [
        {
          value: 'default',
          label: 'default'
        },
        {
          value: 'primary',
          label: 'primary'
        },
        {
          value: 'danger',
          label: 'danger'
        }
      ]
    },
    {
      prop: 'size',
      value: '',
      label: '大小',
      type: 'string',
      formType: 'select',
      options: [
        {
          value: '',
          label: 'default'
        },
        {
          value: 'medium',
          label: 'medium'
        },
        {
          value: 'small',
          label: 'small'
        },
        {
          value: 'mini',
          label: 'mini'
        }
      ]
    },
    {
      prop: 'circle',
      value: false,
      label: '圆形按钮',
      type: 'boolean',
      formType: 'select',
      options: [
        {
          value: true,
          label: '是'
        },
        {
          value: false,
          label: '否'
        }
      ]
    }
  ], // 属性集合
  children: [
    '按钮' // 默认在default slot
  ] // 嵌套子组件
}
