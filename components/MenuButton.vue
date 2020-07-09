<template functional>
  <button
    class="menu-button reset-button"
    v-on="listeners"
  >
    {{ props.isOpen ? (parent.$themeLocaleConfig.menuButtonTextClose || 'CLOSE') : (parent.$themeLocaleConfig.menuButtonText || 'MENU') }}
  </button>
</template>

<script>
export default {
  name: 'MenuButton',

  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus">
.menu-button
  position relative
  left -8px
  display none
  padding 8px

@media (max-width: $MQMobile)
  .menu-button
    display block
</style>
