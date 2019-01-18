import render from '@/components/render'
import preview from '@/components/preview'
import placeholder from '@/components/placeholder'

const plugin = {
  install(Vue) {
    Vue.component('efe-render', render)
    Vue.component('efe-preview', preview)
    Vue.component('efe-placeholder', placeholder)
  }
}

export default plugin
