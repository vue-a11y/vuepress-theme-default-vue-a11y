<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <TheHeading
      v-if="shouldShowNavbar"
      :sidebar-open="isSidebarOpen"
      @toggle-sidebar="toggleSidebar"
    />

    <TheSidebar
      :items="sidebarItems"
      :sidebar-open="isSidebarOpen"
      @toggle-sidebar="toggleSidebar"
    />

    <main
      id="main"
      class="main"
    >
      <Home v-if="$page.frontmatter.home" />

      <Page
        v-else
        :sidebar-items="sidebarItems"
      >
        <template #top>
          <slot name="page-top" />
        </template>
        <template #bottom>
          <slot name="page-bottom" />
        </template>
      </Page>
    </main>
  </div>
</template>

<script>

import Home from '@theme/views/Home.vue'
import Page from '@theme/views/Page.vue'
import TheHeading from '@theme/components/TheHeading'
import TheSidebar from '@theme/components/TheSidebar'

import { resolveSidebarItems } from '@theme/util'

export default {
  name: 'Layout',

  components: {
    Home,
    Page,
    TheHeading,
    TheSidebar
  },

  data () {
    return {
      isSidebarOpen: false
    }
  },

  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false ||
        themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      )
    },

    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      )
    },

    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },

  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$emit('toggle-sidebar', this.isSidebarOpen)
    },

    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        this.toggleSidebar(!!(dx > 0 && this.touchStart.x <= 80))
      }
    }
  }
}
</script>
