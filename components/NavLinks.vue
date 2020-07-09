<template>
  <nav
    v-if="userLinks.length || repoLink"
    class="nav-links"
    :aria-label="$siteTitle"
  >
    <ul
      id="nav-menubar"
      ref="menubar"
      class="menubar"
      role="menubar"
      :aria-label="$siteTitle"
      @keydown="handleFocus"
    >
      <!-- user links -->
      <li
        v-for="(item, index) in userLinks"
        :key="item.link"
        class="menubar-item"
        role="none"
      >
        <Dropdown
          v-if="item.type === 'links'"
          :id="`menubar-dropdown-${index}`"
          :tabindex="focusableIndex === index ? '0' : '-1'"
          :item="item"
          :display="focusableIndex === index && dropdownOpen"
          :trigger-key="dropdownTriggerKey"
          @close="closeDropdown"
          @button-focus="focusableIndex = index"
        />
        <NavLink
          v-else
          class="menubar-item__title menubar-item__link"
          role="menuitem"
          :tabindex="focusableIndex === index ? '0' : '-1'"
          :item="item"
          @focus="focusableIndex = index"
        />
      </li>
      <li
        v-show="repoLink"
        class="menubar-item"
        role="none"
      >
        <!-- repo link -->
        <a
          :href="repoLink"
          class="repo-link"
          role="menuitem"
          :tabindex="focusables && focusableIndex === (focusables.length - 1) ? '0' : '-1'"
          target="_blank"
          rel="noopener noreferrer"
          @focus="handleGithubLinkFocus"
        >
          {{ repoLabel }}
          <OutboundLink />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { resolveNavLinkItem } from '@theme/util'
import NavLink from '@theme/components/NavLink.vue'
import Dropdown from '@theme/components/Dropdown.vue'

export default {
  name: 'NavLinks',

  components: {
    NavLink,
    Dropdown
  },

  data () {
    return {
      dropdownOpen: false,
      dropdownTriggerKey: null,
      focusables: null,
      focusableIndex: 0
    }
  },

  computed: {
    userNav () {
      return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || []
    },

    nav () {
      const { locales } = this.$site
      if (locales && Object.keys(locales).length > 1) {
        const currentLink = this.$page.path
        const routes = this.$router.options.routes
        const themeLocales = this.$site.themeConfig.locales || {}
        const languageDropdown = {
          text: this.$themeLocaleConfig.selectText || 'Languages',
          ariaLabel: this.$themeLocaleConfig.ariaLabel || 'Select language',
          items: Object.keys(locales).map(path => {
            const locale = locales[path]
            const text = (themeLocales[path] && themeLocales[path].label) || locale.lang
            let link
            // Stay on the current page
            if (locale.lang === this.$lang) {
              link = currentLink
            } else {
              // Try to stay on the same page
              link = currentLink.replace(this.$localeConfig.path, path)
              // fallback to homepage
              if (!routes.some(route => route.path === link)) {
                link = path
              }
            }
            return { text, link }
          })
        }
        return [...this.userNav, languageDropdown]
      }
      return this.userNav
    },

    userLinks () {
      return (this.nav || []).map(link => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem)
        })
      })
    },

    repoLink () {
      const { repo } = this.$site.themeConfig
      if (repo) {
        return /^https?:/.test(repo)
          ? repo
          : `https://github.com/${repo}`
      }
      return null
    },

    repoLabel () {
      if (!this.repoLink) return
      if (this.$site.themeConfig.repoLabel) {
        return this.$site.themeConfig.repoLabel
      }

      const repoHost = this.repoLink.match(/^https?:\/\/[^/]+/)[0]
      const platforms = ['GitHub', 'GitLab', 'Bitbucket']
      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i]
        if (new RegExp(platform, 'i').test(repoHost)) {
          return platform
        }
      }

      return 'Source'
    }
  },

  mounted () {
    this.focusables = this.$refs.menubar.querySelectorAll('.menubar-item > a[tabindex], .menubar-item button[tabindex]')
    document.addEventListener('keydown', this.closeDropdownByEscKey)
  },

  beforeDestroy () {
    document.removeEventListener('keydown', this.closeDropdownByEscKey)
  },

  methods: {
    // TODO: Refactor and unify
    handleFocus ({ key, code = '' }, submenu = false) {
      if (this.dropdownOpen) return
      const safeKey = key.trim() || code.trim()
      const focusablesLength = this.focusables.length - 1
      const index = {
        ArrowLeft: this.focusableIndex === 0 ? focusablesLength : this.focusableIndex - 1,
        ArrowRight: this.focusableIndex === focusablesLength ? 0 : this.focusableIndex + 1,
        ArrowUp: null,
        ArrowDown: null,
        Home: 0,
        End: focusablesLength,
        Space: null,
        Enter: null,
        Escape: this.focusableIndex
      }
      if (!Object.keys(index).includes(safeKey)) return
      if (['ArrowUp', 'ArrowDown', 'Space', 'Enter'].includes(safeKey)) {
        return this.focusables[this.focusableIndex].hasAttribute('aria-haspopup') && this.setOpenDropdown(key)
      }
      this.focusableIndex = index[safeKey]
      this.focusables[this.focusableIndex].focus()
      if (submenu) {
        this.$nextTick(() => this.focusables[this.focusableIndex].hasAttribute('aria-haspopup') && this.setOpenDropdown(key))
      }
    },

    setOpenDropdown (key) {
      this.dropdownOpen = true
      this.dropdownTriggerKey = key
    },

    closeDropdown (key = null) {
      this.dropdownOpen = false
      key && this.handleFocus({ key }, ['ArrowLeft', 'ArrowRight'].includes(key))
    },

    handleGithubLinkFocus () {
      if (this.focusables) {
        this.focusableIndex = (this.focusables.length - 1)
      }
    },

    closeDropdownByEscKey ({ keyCode }) {
      if (keyCode !== 27) return
      this.closeDropdown()
    }
  }
}
</script>

<style lang="stylus">
.nav-links
  display inline-block
  font-size .9rem

  .nav-item
    position relative
    display inline-block
    margin-left 1.5rem
    line-height 2rem
    &:first-child
      margin-left 0

@media (max-width: $MQMobile)
  .nav-links
    .nav-item, .repo-link
      margin-left 0

@media (min-width: $MQMobile)
  .nav-links a
    &:hover, &.router-link-active
      color $textColor
  .nav-item > a:not(.external)
    &:hover, &.router-link-active
      margin-bottom -2px
      border-bottom 2px solid lighten($accentColor, 8%)

.menubar
  display flex
  list-style-type none

  &-item
    line-height 2rem

    a
      font-weight 500
      line-height 1.4rem
      color inherit
      padding 6px 2px

      &:hover, &.router-link-active
        color $accentColor

    &__title
      font-weight 500

@media (min-width: $MQMobile)
  .menubar
    &-item
      margin-left 1.5rem
</style>
