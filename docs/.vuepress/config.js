module.exports = {
  theme: require.resolve('../../'),
  title: 'Vue A11y theme',
  head: [
    ['meta', { name: 'theme-color', content: '#fff' }],
  ],
  themeConfig: {
    home: false,
    repo: 'vue-a11y/vuepress-theme-vue-a11y-docs',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    // TODO: Fazer o color mode seja totalmente flexível através daqui e dos locales
    colorMode: {},
    // TODO: Fazer o skip-to seja totalmente flexível através daqui e dos locales
    skipTo: {},
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
              '/guide/'
            ]
          }
        ]
      }
    }
  }
}