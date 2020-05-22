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
          // aria-label for macOS VoiceOver + Chrome
          // see more: https://www.scottohara.me/blog/2019/01/21/how-do-you-figure.html
          return `
          <figure
            aria-label="${caption}"
            class="figurecode"
          >
            <div class="figurecode__content">
        `
        } else {
          return `
            </div>
            <figcaption class="figurecode__caption">
              ${caption}
            </figcaption>
          </figure>
        `
        }
      }
    }
  ]
]
