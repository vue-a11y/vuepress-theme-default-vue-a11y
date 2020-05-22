module.exports = {
  theme: require.resolve('../../'),
  title: 'Vue A11y theme',
  head: [
    ['meta', { name: 'theme-color', content: '#fff' }],
  ],
  themeConfig: {
    home: false,
    repo: 'vue-a11y/vuepress-theme-default-vue-a11y',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    colorMode: {
      props: {
        modes: [ 'light', 'dark', 'system', 'sepia' ]
      }
    },
    locales: {
      '/': {
        editLinkText: 'Edit this page on GitHub',
        colorMode: {
          ariaLabel: 'toggle to %cm mode color, please',
          ariaLive: '%cm color mode is enabled, yeahh'
        },
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