<template>
  <button
    :class="[
      'r-button',
      `r-button-${type}`,
      { 'is-plain': plain, 'is-round': round, 'is-disabled': disabled }
    ]"
    :style="{ width: width + 'px', height: height + 'px' }"
    :disabled="disabled"
  >
    <span>
      <slot>Default</slot>
    </span>
  </button>
</template>

<script setup>
defineOptions({
  name: 'r-button'
})
const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  //禁用按钮
  disabled: {
    type: Boolean,
    default: false
  },

  //按钮宽度
  width: {
    type: Number,
    default: null
  },
  //按钮高度
  height: {
    type: Number,
    default: null
  }
})
</script>

<style lang="less" scoped></style>
