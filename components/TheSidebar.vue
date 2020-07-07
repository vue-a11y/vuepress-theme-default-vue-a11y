<template>
  <div
    class="sidebar"
    :class="{ 'sidebar--open': sidebarOpen }"
  >
    SIDEBAR
  </div>
</template>

<script>
export default {
  name: 'TheSidebar',

  props: {
    sidebarOpen: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus">
.sidebar
  background-color var(--bg-sidebar)
  position fixed
  top 60px
  left -100%
  visibility hidden
  width 16.4rem
  height calc(100vh - 60px)
  overflow auto
  transition: left .2s ease, visibility .2s;

  &--open
    left 0
    visibility visible

  @media (min-width: $MQMobile)
    position relative
    width 100%
    top: auto
    left 0
    visibility visible
    transition none
</style>
