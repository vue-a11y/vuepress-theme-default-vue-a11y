<template>
  <div>
    <VueSkipTo />
    <ParentLayout>
      <template #sidebar-top>
        <VueDarkMode
          v-if="isColorModeEnabled"
          v-show="isColorModeVisible"
          class="btn-color-mode"
          v-bind="getColorModeProps"
        >
          <template v-slot="{ mode }">
            Color mode: <span data-cy="color-mode">{{ mode }}</span>
          </template>
        </VueDarkMode>
      </template>
      <template #page-bottom>
        <VueAnnouncer />
      </template>
    </ParentLayout>
  </div>
</template>

<script>
import colorModeMixin from '../mixins/colorMode'
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
  components: {
    ParentLayout
  },

  mixins: [colorModeMixin],

  watch: {
    $route: {
      handler: 'init',
      immediate: true
    }
  },

  methods: {
    init () {
      this.$nextTick(() => {
        this.setMainId()
        this.setWarningInExternalLinks()
      })
    },
    setMainId () {
      const main = document.getElementsByTagName('main')
      if (main.length) main[0].setAttribute('id', 'main')
    },
    setWarningInExternalLinks () {
      const links = document.querySelectorAll('a[target="_blank"]')
      if (!links.length) return
      links.forEach(link => {
        const textContent = link.textContent.trim()
        const warning = `<span class="visually-hidden">, ${this.$themeLocaleConfig.warningExternalLinkText || 'opens in a new window'}</span>`
        link.innerHTML = link.innerHTML.replace(textContent, `${textContent} ${warning}`)
      })
    }
  }
}
</script>

<style lang="stylus" src="../styles/content.styl"></style>
<style lang="stylus" src="../styles/override-components.styl"></style>
<style lang="stylus">
.btn-color-mode
  margin-top: 1.5rem
  margin-left: 1.5rem
  &.vue-dark-mode
    border: 2px solid var(--border-color)
    border-radius: 6px
    padding: 8px 14px
    font-weight: bold
    span
      text-transform: capitalize
</style>
