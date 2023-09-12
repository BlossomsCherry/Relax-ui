<script setup>
defineOptions({
  name: 'r-footer'
})
defineProps({
  height: {
    type: Number,
    default: null
  }
})
</script>
<template>
  <div class="r-footer" :style="{ height: height + 'px' }">
    <slot>Footer</slot>
  </div>
</template>

<style lang="less" scoped></style>
