<template>
  <div
    class="dropdown-wrapper"
    :class="{ open: isOpen }"
  >
    <button
      class="dropdown-button reset-button"
      type="button"
      role="menuitem"
      :tabindex="tabindex"
      :aria-label="dropdownAriaLabel"
      aria-haspopup="true"
      :aria-expanded="isOpen.toString()"
      :aria-controls="id"
      @click="setOpen(!isOpen)"
      @focus="$emit('button-focus')"
    >
      <span>{{ item.text }}</span>
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="7.97"
        height="4.29"
      >
        <path
          d="M6.91 1.06L3.86 3.54s-2.22-2-2.8-2.48"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
      </svg>
    </button>
    <DropdownTransition>
      <ul
        v-show="isOpen"
        :id="id"
        ref="navDropdown"
        class="nav-dropdown"
        role="menu"
        @keydown.stop="handleFocus"
      >
        <li
          v-for="(subItem, index) in item.items"
          :key="subItem.link || index"
          class="dropdown-item"
          role="none"
        >
          <ul
            v-if="subItem.type === 'links'"
            class="dropdown-subitem-wrapper"
            role="menu"
          >
            <li>
              <span class="dropdown-subitem-title">{{ subItem.text }}</span>
            </li>
            <li
              v-for="childSubItem in subItem.items"
              :key="childSubItem.link"
              class="dropdown-subitem"
              role="none"
            >
              <NavLink
                role="menuitem"
                tabindex="-1"
                :item="childSubItem"
                @focus="focusableIndex = index"
              />
            </li>
          </ul>

          <NavLink
            v-else
            class="dropdown-item-link"
            role="menuitem"
            tabindex="-1"
            :item="subItem"
            @focus="focusableIndex = index"
          />
        </li>
      </ul>
    </DropdownTransition>
  </div>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import DropdownTransition from '@theme/components/DropdownTransition.vue'

export default {
  name: 'DropdownLink',

  components: {
    NavLink,
    DropdownTransition
  },

  props: {
    id: {
      type: String,
      required: true
    },

    tabindex: {
      type: String,
      required: true
    },

    display: {
      type: Boolean,
      required: false
    },

    triggerKey: {
      type: String,
      default: null
    },

    item: {
      type: [Array, Object],
      required: true
    }
  },

  data () {
    return {
      open: false,
      focusableIndex: 0,
      focusables: null
    }
  },

  computed: {
    dropdownAriaLabel () {
      return this.item.ariaLabel || this.item.text
    },

    isOpen () {
      return this.display && this.open
    }
  },

  watch: {
    $route () {
      this.open = false
    },
    display: 'handleDropdownOpen'
  },

  mounted () {
    this.focusables = this.$refs.navDropdown.querySelectorAll('[tabindex]')
  },

  methods: {
    setOpen (value, index = 0) {
      this.open = value
      if (!value) return this.$emit('close')
      this.$nextTick(() => this.focusables[index].focus())
    },

    handleDropdownOpen (val) {
      if (!val) return this.setOpen(false)
      const index = this.triggerKey === 'ArrowUp' ? (this.focusables.length - 1) : 0
      this.setOpen(true, index)
    },

    // TODO: Refactor and unify
    handleFocus ({ key, code = '' }) {
      const safeKey = key.trim() || code.trim()
      const focusablesLength = this.focusables.length - 1
      const index = {
        ArrowLeft: null,
        ArrowRight: null,
        ArrowUp: this.focusableIndex === 0 ? focusablesLength : this.focusableIndex - 1,
        ArrowDown: this.focusableIndex === focusablesLength ? 0 : this.focusableIndex + 1,
        Home: 0,
        End: focusablesLength,
        Tab: null,
        Escape: null
      }
      if (!Object.keys(index).includes(safeKey)) return
      if (['ArrowLeft', 'ArrowRight'].includes(safeKey) || ['Tab', 'Escape'].includes(safeKey)) return this.$emit('close', safeKey)
      this.focusableIndex = index[safeKey]
      this.focusables[this.focusableIndex].focus()
    }
  }
}
</script>

<style lang="stylus">
.dropdown-wrapper
  position relative
  top -1px
  cursor pointer
  display inline-block

  .dropdown-button
    display block
    font-size 0.9rem
    cursor inherit
    line-height 1.4rem
    font-weight 500
    color $textColor
    padding 6px 0

    > svg
      vertical-align middle
      margin-left 0.1rem

  .nav-dropdown
    .dropdown-item
      color inherit
      line-height 1.7rem
      padding 0 6px

      .dropdown-subitem-wrapper
        padding 0
        list-style none

        .dropdown-subitem-title
          font-weight 600
          display inline-block
          padding 0 1.5rem .15rem 1.25rem

        .dropdown-subitem
          font-size 0.9em

      &:not(:first-child) .dropdown-subitem-title
          border-top 1px solid #eee
          margin 0.45rem 0 0
          padding-top 0.45rem

      a
        display block
        line-height 1.7rem
        position relative
        border-bottom none
        font-weight 400
        margin-bottom 0
        padding 0 1.5rem 0 1.25rem

        &:hover
          color $accentColor

        &.router-link-active
          color $accentColor

          &::after
            content ""
            width 0
            height 0
            border-left 5px solid $accentColor
            border-top 3px solid transparent
            border-bottom 3px solid transparent
            position absolute
            top calc(50% - 2px)
            left 9px

@media (max-width: $MQMobile)
  .dropdown-wrapper
    &.open .dropdown-button
      margin-bottom 0.5rem
    .dropdown-button
      font-weight 600
      font-size inherit
      &:hover
        color $accentColor
    .nav-dropdown
      transition height .1s ease-out
      overflow hidden
      .dropdown-item
        h4
          border-top 0
          margin-top 0
          padding-top 0
        h4, & > a
          font-size 15px
          line-height 2rem
        .dropdown-subitem
          font-size 14px
          padding-left 1rem

@media (min-width: $MQMobile)
  .dropdown-wrapper
    height 1.8rem
    &:hover .nav-dropdown,
    &.open .nav-dropdown
      // override the inline style.
      display block !important
    &.open:blur
      display none
    .dropdown-button .arrow
      // make the arrow always down at desktop
      border-left 4px solid transparent
      border-right 4px solid transparent
      border-top 6px solid $arrowBgColor
      border-bottom 0
    .nav-dropdown
      display none
      // Avoid height shaked by clicking
      height auto !important
      box-sizing border-box;
      max-height calc(100vh - 2.7rem)
      overflow-y auto
      position absolute
      top 100%
      right 0
      background-color #fff
      padding 0.6rem 0
      border 1px solid #ddd
      border-bottom-color #ccc
      text-align left
      border-radius 0.25rem
      white-space nowrap
      margin-top 5px
</style>
