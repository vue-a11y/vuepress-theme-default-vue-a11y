<template>
  <figcaption
    class="figurecode__caption"
    v-html="caption"
  />
</template>

<script>
export default {
  name: 'FigureCodeCaption',
  props: {
    caption: {
      type: String,
      required: true
    }
  }
}
</script>
