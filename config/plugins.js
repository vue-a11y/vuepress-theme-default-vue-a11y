const md = require('markdown-it')()
let caption = ''

module.exports = [
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
          <FigureCode caption="${caption}">
            <div slot="content">
        `
        } else {
          return `
            </div>
            <FigureCodeCaption
              slot="caption"
              caption="${caption}"
            />            
          </FigureCode>
        `
        }
      }
    }
  ]
]
