<template>
  <header class="header">
    <div class="header-box">
      <div class="header-menu-button">
        <MenuButton
          :is-open="sidebarOpen"
          @click="$emit('toggle-sidebar')"
        />
      </div>
      <div class="header-logo">
        <RouterLink
          :to="$localePath"
          class="home-link"
        >
          <img
            v-if="$site.themeConfig.logo"
            class="logo"
            :src="$withBase($site.themeConfig.logo)"
            :alt="$siteTitle"
          >
          <span
            v-show="$siteTitle && !$site.themeConfig.logo"
            ref="siteName"
            class="site-name"
          >{{ $siteTitle }}</span>
        </RouterLink>
      </div>
    </div>
    <div class="header-box">
      <div class="header-search">
        <span>SEARCH</span>
      </div>
      <div class="header-nav">
        <NavLinks />
      </div>
    </div>
  </header>
</template>

<script>
import NavLinks from '@theme/components/NavLinks'
import MenuButton from '@theme/components/MenuButton'

export default {
  name: 'TheHeader',

  components: {
    NavLinks,
    MenuButton
  },

  props: {
    sidebarOpen: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus">
.header
  grid-column span 2
  display flex
  flex-wrap wrap
  border-bottom 1px solid #F2F8F5

  > .header-box
      display flex
      padding 0 1.5rem
      justify-content space-between
      height 100%

      > div
        align-self center

      &:first-child
        width 100%

        @media (min-width: $MQMobile)
          width 16.4rem
          background-color var(--bg-sidebar)
          justify-content initial

        @media (min-width: $MQNarrow)
          width 20rem

      &:last-child
        flex 1

        @media (max-width: $MQMobile)
          display none

  &-logo > a
    position relative
    padding 4px
    left -4px

  .site-name
    font-size 1.3rem
    font-weight 600
    color var(--color)
</style>
