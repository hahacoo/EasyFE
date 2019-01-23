<template>
  <div class="efe-edit">
    <div class="efe-edit__attribute efe-padding">
      <!-- 左侧属性面板 -->
      <efe-attribute-panel></efe-attribute-panel>
    </div>
    <div class="efe-edit__main efe-padding">
      <!-- 预览面板 -->
      <efe-preview-panel :components="components"></efe-preview-panel>
    </div>
    <div class="efe-edit__component">
      <!-- 右侧组件面板 -->
      <efe-component-panel></efe-component-panel>
    </div>
  </div>
</template>

<script>
import previewPanel from './components/previewPanel'
import attributePanel from './components/attributePanel'
import componentPanel from './components/componentPanel'

export default {
  data() {
    return {
      components: [

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
      ],
      source: '',
      currComp: {} // 选中节点
    }
  },
  provide() {
    return {
      container: this
    }
  },
  components: {
    'efe-attribute-panel': attributePanel,
    'efe-component-panel': componentPanel,
    'efe-preview-panel': previewPanel
  },
  methods: {

    /**
     * 更新组件
     */
    update(comp, attr) {
      const { attribute } = comp

      this.$set(comp, 'attribute', {
        ...attribute,
        ...attr
      })
    },
    /**
     * 删除组件
     */
    delete(parent, child, index) {

    },

    /**
     * 添加组件
     */
    append(parent, child) {
      if (!parent.children) {
        this.$set(parent, 'children', [])
      }
      parent.children.push(child)
    },

    print() {
      this.source = getSource(this.components)
    }
  },
  created() {

    // 监听更新事件
    this.$on('render', (type, ...args) => {
      this[type].apply(this, args)
    })

    // 监听选择事件
    this.$on('select', comp => {
      this.currComp = comp
      console.log(comp)
    })
  }
}
</script>

<style lang="less">
.efe-edit {
  height: 100%;
  display: flex;
  &__attribute,
  &__main,
  &__component {
    height: 100%;
  }
  &__attribute,
  &__component {
    width: 300px;
  }
  &__main {
    flex: 1;
  }
}
</style>
