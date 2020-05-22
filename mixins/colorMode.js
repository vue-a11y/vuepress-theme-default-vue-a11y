export default {
  computed: {
    configColorMode () {
      if (!this.$themeConfig.colorMode || !Object.keys(this.$themeConfig.colorMode).length) return {}
      return this.$themeConfig.colorMode
    },

    isColorModeEnabled () {
      return typeof this.configColorMode.enabled === 'undefined' ? true : this.configColorMode.enabled
    },

    isColorModeVisible () {
      return typeof this.configColorMode.visible === 'undefined' ? true : this.configColorMode.visible
    },

    getColorModeProps () {
      const props = this.configColorMode.props || {}
      return { ...props, ...this.getColorModeAriaByLocale }
    },

    getColorModeAriaByLocale () {
      if (!this.$themeLocaleConfig.colorMode || !Object.keys(this.$themeLocaleConfig.colorMode).length) return {}
      return this.$themeLocaleConfig.colorMode
    }
  }
}
