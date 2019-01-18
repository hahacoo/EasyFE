<script>
export default {
  name: 'efe-render',
  props: {

    // 组件名称
    name: {
      type: String,
    },

    // 属性
    attribute: {
      type: Object,
      default() {
        return {}
      }
    },

    // 子节点
    children: {
      type: Array
    }
  },
  render(h) {
    const { slot, ...attribute } = this.attribute

    return h(
      this.name,
      {
        props: {
          ...this.attribute
        },
        slot: this.slot
      },
      this.renderChild(h)
    )
  },
  methods: {

    /**
     * 渲染组件节点
     */
    renderComponent(h, child) {
      const { name, attribute, children } = child
      const { slot, ...props } = attribute

      return h('efe-render',
        {
          props: {
            name,
            attribute: props,
            children
          },
          slot
        })
    },

    /**
     * 返回文本节点
     */
    renderText(text) {
      return this._v(text)
    },

    renderChild(h) {
      if (this.children == null) return // 没有子节点
      if (Object.prototype.toString.call(this.children) === '[object Array]') {
        return this.children.map(child => {
          if (typeof child === 'string') {
           return this.renderText(child) // 渲染文本节点
          }
          return this.renderComponent(h, child) // 渲染子组件
       })
      }
    }
  }
}
</script>

<style>
</style>
