const components = [

  // {
  //   name: 'el-form', // 组件名称
  //   attribute: [], // 属性集合
  //   children: [
  //     {
  //       name: 'efe-placeholder',
  //       attribute: [{
  //         prop: 'height', // 属性字段
  //         value: '200px', // 属性值
  //         type: 'string' // 属性类型
  //       }, {
  //         prop: 'minHeight',
  //         value: '200px'
  //       }]
  //     } // 默认在default slot
  //   ] // 嵌套子组件
  // },
  {
    name: 'el-card',
    attribute: [],
    children: [
      {
        name: 'efe-placeholder',
        attribute: [
          {
            prop: 'height',
            value: '20px'
          },
          {
            prop: 'text',
            value: '头部'
          }
        ],
        slot: 'header'
      },
      {
        name: 'efe-placeholder',
        attribute: [
          {
            prop: 'height',
            value: '200px'
          },
          {
            prop: 'text',
            value: '内容'
          }
        ]
      }
    ]
  }

  // {
  //   name: 'el-input',
  //   attribute: [],
  //   children: [
  //     {
  //       name: 'span',
  //       attribute: [],
  //       slot: 'prepend',
  //       children: [
  //         'http://'
  //       ]
  //     }
  //   ]
  // },
  // {
  //   name: 'el-rate'
  // },
  // {
  //   name: 'el-progress',
  //   attribute: [
  //     {
  //       prop: 'color',
  //       value: '#8e71c7',
  //       type: 'string'
  //     },
  //     {
  //       prop: 'percentage',
  //       value: 80,
  //       type: 'number'
  //     }
  //   ]
  // }
]

export default components
