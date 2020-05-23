const md = require('markdown-it')()
let caption = ''

module.exports = [
  [
    'vuepress-plugin-code-copy',
    {
      staticIcon: true,
      color: 'currentColor'
    }
  ],
  [
    'container',
    {
      type: 'figurecode',
      defaultTitle: '',
      render: (tokens, idx) => {
        const m = tokens[idx].info.trim().match(/^figurecode\s+(.*)$/)
        if (tokens[idx].nesting === 1) {
          caption = m ? md.utils.escapeHtml(m[1]) : ''
          return `
          <figure-code caption="${caption}">
            <div slot="content">
        `
        } else {
          return `
            </div>
            <figure-code-caption
              slot="caption"
              caption="${caption}"
            />            
          </figure-code>
        `
        }
      }
    }
  ]
]
