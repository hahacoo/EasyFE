const context = require.context('./', true, /\.js$/)
const uiFiles = context.keys().filter(item => item !== './index.js')

export default uiFiles.map(item => context(item).default)
