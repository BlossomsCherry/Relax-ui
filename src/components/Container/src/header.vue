<script setup>
defineOptions({
  name: 'r-header'
})

defineProps({
  height: {
    type: Number,
    default: null
  }
})
</script>
<template>
  <div class="r-header" :style="{ height: height + 'px' }">
    <slot>Header</slot>
  </div>
</template>

<style lang="less" scoped></style>
