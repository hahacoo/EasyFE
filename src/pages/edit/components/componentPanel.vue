<script>
import commons from '@/config/commons'
import element from '@/config/element-ui'

export default {
  data() {
    return {
      components: [
        ...element,
        ...commons
      ]
    }
  },
  render() {
    return (
      <div class="efe-component-panel">
        <div class="efe-title">组件面板</div>
        {this.components.map(comp => {
          return (
            <div class="efe-component-panel__item efe-padding--vertical">
              <el-tooltip effect="dark" content={comp.description} placement="bottom">
                <div draggable="true" onDragstart={(evt) => {this.handleDragStart(event, comp)}}>
                  <efe-render name={comp.name} attribute={comp.attribute}
                    children={comp.children}
                    comp={comp}
                    selectable={false}
                    >
                  </efe-render>
                </div>
              </el-tooltip>
            </div>
            )
          })
        }
      </div>
    )
  },
  methods: {
    handleDragStart(evt, comp) {

      // 传递组件配置
      evt.dataTransfer.setData('comp', JSON.stringify(comp))
      evt.stopPropagation()
    }
  }
}
</script>

<style lang="less">
  .efe-component-panel {
    &__item {
      border-bottom: 1px solid #cccccc
    }
  }
</style>
