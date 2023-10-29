<template>
  <div class="rCol" :style="style">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'rCol'
}
</script>
<script setup>
import { computed, defineProps, inject } from 'vue'

const props = defineProps({
  span: {
    type: Number,
    default: 24
  }
})

//通过 provide 和 inject 来实现跨组件通信
const gutter = inject('gutter', { gutter: computed(() => 0) })

const style = computed(() => {
  return {
    width: `${(props.span / 24) * 100}%`,
    paddingLeft: gutter.value / 2 + 'px',
    paddingRight: gutter.value / 2 + 'px'
  }
})
</script>

<style lang="less" scoped></style>
