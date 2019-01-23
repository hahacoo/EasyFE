export default {
  name: 'el-button', // 组件名称
  attribute: [
    {
      prop: 'type',
      value: 'default',
      type: 'string'
    }
  ], // 属性集合
  children: [
    '按钮' // 默认在default slot
  ] // 嵌套子组件
}
