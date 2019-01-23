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
      <div class="efe-preview">
        <el-tabs value={this.activeTab} type="card" onInput={tab => this.activeTab = tab}>
          <el-tab-pane label="源码" name="source">
            <div>
              <pre v-highlightjs={this.source}><code class="html"></code></pre>
            </div>
          </el-tab-pane>
          <el-tab-pane label="页面" name="page">
            {this.components.map(comp => <efe-render name={comp.name}
              attribute={comp.attribute}
              children={comp.children}
              comp={comp}
            ></efe-render>)}
          </el-tab-pane>
          <el-tab-pane label="样式" name="style">
          </el-tab-pane>
        </el-tabs>
      </div>
    )
  }
}
</script>

<style>
</style>
