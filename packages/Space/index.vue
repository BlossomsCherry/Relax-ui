<template>
  <div class="r-space" :style="styles" ref="spaceRef">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'rSpace'
}
</script>
<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  inline: Boolean,
  size: {
    type: Array,
    default: () => [10, 10]
  }
})

const styles = computed(() => {
  return {
    display: props.inline ? 'inline-flex' : 'flex',
    margin: `${props.size[0] / 2}px 0px`,
    gap: `${props.size[1]}px`,
    flexDirection: props.inline ? 'inherit' : 'column',
    flexWrap: 'wrap',
    width: props.inline ? '100%' : 'fit-content'
  }
})
</script>

<style lang="less" scoped></style>
