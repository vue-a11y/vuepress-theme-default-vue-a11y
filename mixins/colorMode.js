import merge from 'deepmerge'
import { colorMode } from '../config/defaultThemeConfig'

export default {
  computed: {
    configColorMode () {
      if (!this.$themeConfig.colorMode || !Object.keys(this.$themeConfig.colorMode).length) return colorMode
      return merge(colorMode, this.$themeConfig.colorMode)
    },

    isColorModeEnabled () {
      return this.configColorMode.enabled
    },

    isColorModeVisible () {
      return this.configColorMode.visible
    },

    getColorModeProps () {
      return { ...this.configColorMode.props, ...this.getColorModeAriaByLocale }
    },

    getColorModeAriaByLocale () {
      if (!this.$themeLocaleConfig.colorMode || !Object.keys(this.$themeLocaleConfig.colorMode).length) return {}
      return this.$themeLocaleConfig.colorMode
    }
  }
}
