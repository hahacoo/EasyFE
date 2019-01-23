import Vue from 'vue'
import 'normalize.css'
import '../style/efe.less'
// 为代码文本提供高亮、缩进
import VueHighlightJS from 'vue-highlightjs'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 为代码文本格式化
import plugin from './plugin'
import router from './router'
import store from './store'
import App from './App'

Vue.config.productionTip = false
Vue.use(VueHighlightJS)
Vue.use(element)
Vue.use(plugin)
Vue.prototype.$compile = Vue.compile

window._Vue = new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
