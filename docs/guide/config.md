# Config

The theme uses the vue-a11y packages, some of which you can configure via the `$themeConfig` in your `.vuepress/config.js` file.

## Color mode

We use the `colorMode` property in `$themeConfig` to customize the vue-dark-mode package.

```javascript
// e.g. docs/.vuepress/config.js
module.exports = {
  theme: 'vuepress-theme-default-vue-a11y',
  // ...
  themeConfig: {
    colorMode: {
      enabled: true,
      visible: true,
      props: {
        // e.g. color modes
        modes: [ 'light', 'dark', 'system', 'sepia' ]
      }
    }
  }
```

::: tip
See more props available in VueDarkMode:  
[https://github.com/vue-a11y/vue-dark-mode](https://github.com/vue-a11y/vue-dark-mode)
:::

In VueDarkMode we also have ARIA properties for the button label and for the live region. To do this, you can use a `ColorMode` property in `$themeConfig.locales`

```javascript
// e.g. docs/.vuepress/config.js
module.exports = {
  theme: 'vuepress-theme-default-vue-a11y',
  // ...
  themeConfig: {
    // ...
    locales: {
      '/': {
        // ...
        colorMode: {
          ariaLabel: 'toggle to %cm mode color',
          ariaLive: '%cm color mode is enabled'
        }
      },
      '/pt': {
        // ...
        colorMode: {
          ariaLabel: 'Trocar para o modo de cor %cm',
          ariaLive: 'Modo de cor %cm está habilitado'
        }
      },
      '/es': {
        // ...
        colorMode: {
          ariaLabel: 'Cambiar al modo de color %cm',
          ariaLive: 'Se eligió el modo de color %cm'
        }
      }
    }
  }
```

## Skip to

Pretty soon

## Announcer

The [@vue-a11y/announcer](https://github.com/vue-a11y/vue-announcer) provides an easy way for people using screen readers to know what’s going on in your app.

It is already installed and configured in the theme to announce the routes changes.

You can configure the title add-on according to the location, by default the value is `has loaded`.

```javascript
// e.g. docs/.vuepress/config.js
module.exports = {
  theme: 'vuepress-theme-default-vue-a11y',
  // ...
  themeConfig: {
    // ...
    locales: {
      '/': {
        // ...
        announcer: {                          
          complementRoute: 'has loaded'       // optional
        }
      },
      '/pt': {
        // ...
        announcer: {
          complementRoute: 'foi carregado'
        }
      },
      '/es': {
        // ...
        announcer: {
          complementRoute: 'ha cargado'
        }
      }
    }
  }
```
