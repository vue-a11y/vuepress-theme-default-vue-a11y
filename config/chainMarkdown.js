const convertRouterLinkPlugin = require('./markdown/link')
const { PLUGINS } = require('@vuepress/markdown/lib/constant')

function chainMarkdown (config) {
  config
    .plugin('anchor')
    .tap(([options]) => [
      Object.assign(options, { permalinkAttrs: () => ({ 'aria-label': 'Anchor' }) })
    ])

  config
    .plugin(PLUGINS.CONVERT_ROUTER_LINK)
    .use(convertRouterLinkPlugin, [Object.assign({
      target: '_blank',
      rel: 'noopener noreferrer'
    })])
}

module.exports = chainMarkdown
