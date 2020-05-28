function chainMarkdown (config) {
  config
    .plugin('anchor')
    .tap(([options]) => [
      Object.assign(options, { permalinkAttrs: () => ({ 'aria-label': 'Anchor' }) })
    ])
}

module.exports = chainMarkdown
