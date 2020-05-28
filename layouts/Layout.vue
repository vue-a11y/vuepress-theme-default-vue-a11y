<template>
  <div>
    <ClientOnly>
      <VueSkipTo />
    </ClientOnly>
    <ParentLayout>
      <ClientOnly slot="sidebar-top">
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
      </ClientOnly>
      <ClientOnly slot="page-bottom">
        <VueAnnouncer />
      </ClientOnly>
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
    $route: 'init'
  },

  mounted () {
    this.init()
  },

  methods: {
    init () {
      this.$nextTick(() => {
        this.setMainId()
        this.setWarningInExternalLinks()
        this.setComplementRouteToAnnouncer()
        this.setTabIndexSidebarButton()
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
    },

    setComplementRouteToAnnouncer () {
      if (this.$themeLocaleConfig.announcer) {
        this.$announcer.setComplementRoute(this.$themeLocaleConfig.announcer.complementRoute)
      }
    },

    setTabIndexSidebarButton () {
      const el = document.querySelector('.sidebar-button')
      if (!el) return
      el.setAttribute('tabindex', 0)
      el.setAttribute('aria-label', 'Open Sidebar Navigation')
    }
  }
}
</script>

<style lang="stylus" src="../styles/override/index.styl"></style>
<style lang="stylus">
.btn-color-mode
  margin-top: 2.75rem
  margin-left: 1.5rem
  &.vue-dark-mode
    border: 2px solid var(--border-color)
    background-color: var(--bg-secondary)
    border-radius: 2rem
    padding: 10px 16px
    font-weight: bold
    outline: none
    &:focus
      border-color: var(--accent-color)
    span
      text-transform: capitalize
</style>
