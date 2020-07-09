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
          },
          {
            text: 'Demo',
            link: '/demo/'
          },
          {
            text: 'Dropdown',
            ariaLabel: 'Dropdown',
            items: [
              {
                text: 'CLI',
                link: '/api/cli.html'
              },
              {
                text: 'Node',
                link: '/api/node.html'
              }
            ]
          },
          {
            text: 'Dropdown2',
            ariaLabel: 'Dropdown2',
            items: [
              {
                text: 'API',
                items: [
                  {
                    text: 'CLI',
                    link: '/api/cli.html'
                  },
                  {
                    text: 'Node',
                    link: '/api/node.html'
                  }
                ]
              },
              {
                text: 'Miscellaneous',
                items: [
                  {
                    text: 'Migrate from 0.x',
                    link: '/miscellaneous/migration-guide.html'
                  },
                  {
                    text: 'Changelog',
                    link: 'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md'
                  }
                ]
              }
            ]
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