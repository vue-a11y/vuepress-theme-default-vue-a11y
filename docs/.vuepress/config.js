module.exports = {
  theme: require.resolve('../../'),
  title: 'Vue A11y theme',
  head: [
    ['meta', { name: 'theme-color', content: '#fff' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
  ],
  themeConfig: {
    home: false,
    repo: 'vue-a11y/vuepress-theme-default-vue-a11y',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    locales: {
      '/': {
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          }
        ],
        sidebar: [
          '/',
          {
            title: 'Guide',
            collapsable: false,
            children: [
              '/guide/',
              '/guide/config.md',
              '/guide/styles.md',
              '/guide/extras.md',
              '/guide/markdown.md'
            ]
          }
        ]
      }
    }
  }
}