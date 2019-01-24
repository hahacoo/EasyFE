<script>
import Vue from 'vue'
import { inherits } from 'util';

export default {
  name: 'efe-render',
  inject: ['container'],
  props: {

    // 组件名称
    name: {
      type: String,
    },

    // 属性
    attribute: {
      type: Array,
      default() {
        return []
      }
    },

    domAttribute: {
      type: Object,
      default() {
        return {}
      }
    },

    // 子节点
    children: {
      type: Array
    },

    // 组件配置完整信息
    comp: {
      type: Object
    },

    // 组件是否可选择
    selectable: {
      type: Boolean,
      default: true
    }
  },
  render(h) {
    const attribute = this.formatAttribute(this.attribute)
    const attrs = {
      ...this.domAttribute
    }
    const props = {
      ...attribute
    } // 组件prop
    const events = this.bindEvents() // 事件绑定

    return h(
      this.name,
      {
        props,
        attrs,
        ...events
      },
      this.renderChild(h, this.selectable)
    )
  },
  methods: {

    /**
     * 渲染组件节点
     */
    renderComponent(h, comp, selectable) {
      const { slot, ...inheritsProps } = comp

      return h('efe-render',
        {
          props: {
            ...inheritsProps,
            selectable,
            comp
          },
          slot // 设置插槽
        })
    },

    /**
     * 返回文本节点
     */
    renderText(text) {
      return this._v(text)
    },

    /**
     * 渲染子组件
     */
    renderChild(h, selectable) {
      if (this.children == null) return // 没有子节点
      if (Object.prototype.toString.call(this.children) === '[object Array]') {
        return this.children.map(child => {
          if (typeof child === 'string') {
           return this.renderText(child) // 渲染文本节点
          }
          return this.renderComponent(h, child, selectable) // 渲染子组件
       })
      }
    },

    /**
     * 格式化属性
     */
    formatAttribute(attribute) {
      const ret = {}

      attribute.forEach(({prop, value}) => {
        if (prop !== 'slot') {
          ret[prop] = value
        }
      })
      return ret
    },

    bindEvents() {
      let data = {}

      if (this.selectable) {
        if (Vue.config.isReservedTag(this.name)) {

          // 设置原生标签事件
          Object.assign(data, {
            on: {
              click: this.selectComp
            }
          })
        } else {

          // 设置组件原生事件
          if (this.name !== 'efe-placeholder') {
            Object.assign(data, {
              nativeOn: {
                click: this.selectComp
              }
            })
          }
        }
      }

      return data
    },

    /**
     * 选择组件
     */
    selectComp(evt) {
      this.container.$emit('select', this.comp)
      evt.stopPropagation()
    },

    /**
     * 添加组件
     */
    addComp(comp) {
      this.container.$emit('render', 'append', this.comp, comp)
    }
  }
}
</script>

<style>
</style>
