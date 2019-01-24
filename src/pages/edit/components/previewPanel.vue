<script>
import { getSource } from '@/utils'

export default {
  name: 'efe-preview',
  inject: ['container'],
  props: {
    components: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      activeTab: 'page'
    }
  },
  computed: {
    source() {
      return getSource(this.components)
    }
  },
  render() {
    return (
      <div class="efe-preview efe-padding--horizontal">
        <el-tabs value={this.activeTab} onInput={tab => this.activeTab = tab}>
          <el-tab-pane label="源码" name="source">
            <pre v-highlightjs={this.source}><code class="html"></code></pre>
          </el-tab-pane>
          <el-tab-pane label="页面" name="page">
            <div>
              {this.components.map(comp => <efe-render name={comp.name}
                attribute={comp.attribute}
                children={comp.children}
                comp={comp}
              ></efe-render>)}
            </div>
          </el-tab-pane>
          <el-tab-pane label="样式" name="style">
          </el-tab-pane>
        </el-tabs>
      </div>
    )
  }
}
</script>

<style lang="less">
.efe-preview {
  height: 100%;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  #pane-page {
    padding: 0 10px;
  }
}
</style>
