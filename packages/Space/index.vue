<template>
  <div class="space" ref="spaceRef">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'rSpace'
}
</script>
<script setup>
import { ref, defineProps, nextTick } from 'vue'

const props = defineProps({
  margin: {
    typeof: Number,
    default: 5
  }
})

const spaceRef = ref(null)
nextTick(() => {
  spaceRef.value.style.margin = `${props.margin}px 0px`
})
</script>

<style lang="less" scoped>
.space {
  display: inline-flex;
  width: 100%;
  flex-direction: inherit;
  gap: 10px;
  flex-wrap: wrap;
}
</style>
