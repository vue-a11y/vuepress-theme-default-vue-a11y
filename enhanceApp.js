import VueAnnouncer from '@vue-a11y/announcer'
import VueDarkMode from '@vue-a11y/dark-mode'
import 'a11y-css-reset/combo.css'
import merge from 'deepmerge'
import VueSkipTo from 'vue-skip-to'
import FigureCode from './components/FigureCode.vue'
import FigureCodeCaption from './components/FigureCodeCaption.vue'
import WarningOpenLinkNewWindow from './components/WarningOpenLinkNewWindow.vue'
import { axe as axeDefaultConfig } from './config/defaultThemeConfig'
import { isObject } from './utils'

export default ({ Vue, router, isServer, siteData }) => {
  // built-in components
  Vue.component('WarningOpenLinkNewWindow', WarningOpenLinkNewWindow)
  Vue.component('FigureCode', FigureCode)
  Vue.component('FigureCodeCaption', FigureCodeCaption)

  // Development
  if (process.env.NODE_ENV === 'development') {
    const axeConfig = siteData.themeConfig.axe && isObject(siteData.themeConfig.axe) ? merge(axeDefaultConfig, siteData.themeConfig.axe) : axeDefaultConfig
    if (axeConfig.enabled) {
      const VueAxe = require('vue-axe').default
      Vue.use(VueAxe, axeConfig.options)
    }
  }
  // Client only
  if (!isServer) {
    Vue.use(VueSkipTo)
    Vue.use(VueDarkMode)
    Vue.use(VueAnnouncer, {}, router)
  }
}
