<template>
  <div class="rRow">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'rRow'
}
</script>
<script setup>
import { defineProps, computed, provide } from 'vue'

const props = defineProps({
  gutter: {
    type: Number,
    default: 0
  }
})

//通过 provide 和 inject 来实现跨组件通信
provide(
  'gutter',
  computed(() => {
    return props.gutter
  })
)
</script>

<style lang="less" scoped>
.rRow {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
