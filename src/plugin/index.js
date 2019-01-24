import render from '@/components/render'
import placeholder from '@/components/placeholder'
import dynamic from '@/components/dynamic'

const plugin = {
  install(Vue) {
    Vue.component('efe-render', render)
    Vue.component('efe-placeholder', placeholder)
    Vue.component('efe-dynamic', dynamic)
  }
}

export default plugin
