<template functional>
  <button
    class="menu-button"
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
  background-color transparent
  padding 8px
  border: none

@media (max-width: $MQMobile)
  .menu-button
    display block
</style>
