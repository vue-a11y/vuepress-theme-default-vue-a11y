const plugins = require('./config/plugins')
const chainMarkdown = require('./config/chainMarkdown')

module.exports = {
  extend: '@vuepress/theme-default',
  plugins,
  chainMarkdown
}
