<template functional>
  <!-- eslint-disable vuejs-accessibility/no-redundant-roles -->

  <!-- role="figure" for IE11 screen reader support -->
  <!-- aria-label for macOS VoiceOver + Chrome -->
  <!-- see more: https://www.scottohara.me/blog/2019/01/21/how-do-you-figure.html#wrapping-up -->
  <figure
    role="figure"
    :aria-label="props.caption"
    class="figurecode teste-fig"
  >
    <slot name="content" />
    <slot name="caption" />
  </figure>
</template>

<script>
export default {
  name: 'FigureCode',

  props: {
    caption: {
      type: String,
      required: true
    }
  }
}
</script>
