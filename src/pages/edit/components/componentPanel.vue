<script>
import element from '@/config/element-ui'

export default {
  data() {
    return {
      components: element
    }
  },
  render() {
    return (
      <div class="efe-component-panel">
        {this.components.map(comp => {
          return (
            <div class="efe-padding--vertical">
              <efe-render name={comp.name} attribute={comp.attribute}
                children={comp.children}
                comp={comp}
                selectable={false}
                draggable="true"
                nativeOnDragstart={(evt) => {this.handleDragStart(event, comp)}}>
              </efe-render>
            </div>)
          })
        }
      </div>
    )
  },
  methods: {
    handleDragStart(evt, comp) {

      // 传递组件配置
      evt.dataTransfer.setData('comp', JSON.stringify(comp))
    }
  }
}
</script>

<style lang="less">
  .efe-component-panel {
    padding-right: 15px;
  }
</style>
