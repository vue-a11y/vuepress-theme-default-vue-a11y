<template functional>
  <figcaption
    class="figurecode__caption"
    v-html="props.caption"
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
