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

  mounted () {
    this.setMainId()
  },

  methods: {
    setMainId () {
      const main = document.getElementsByTagName('main')
      if (main.length) main[0].setAttribute('id', 'main')
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
    border: 2px solid #666
    border-radius: 6px
    padding: 8px 14px
    font-weight: bold
    span
      text-transform: capitalize
</style>
