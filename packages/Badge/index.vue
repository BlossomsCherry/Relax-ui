<template>
  <div class="r-badge">
    <slot></slot>

    <template v-if="!hidden">
      <div v-if="!dot" :class="['badge', type]">
        <span v-if="max && Number(value) > max">{{ max }}+</span>
        <span v-else>{{ value }}</span>
      </div>
      <div v-else class="dot"></div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'rBadge'
}
</script>
<script setup>
import { defineProps } from 'vue'

defineProps({
  type: String,
  dot: Boolean,
  value: [String, Number],
  hidden: Boolean,
  max: [Number, String]
})
</script>

<style lang="less" scoped>
.r-badge {
  position: relative;
  /* 防止文本换行，并使文本保持在一行内，直到达到容器的边界 */
  white-space: nowrap;

  .dot,
  .badge {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 99;
  }

  .dot {
    transform: translate(50%, -50%);
    width: 12px;
    height: 12px;
    border-radius: 20px;
    background-color: var(--error-color);
  }

  .badge {
    display: flex;
    transform: translate(80%, -50%);
    min-width: 33px;
    border-radius: 10px;
    background-color: red;
    justify-content: center;
    box-sizing: border-box;

    span {
      padding: 0 5px;
      color: #fff;
      font-size: 12px;
      line-height: 1.5;
    }
    &.primary {
      background-color: var(--primary-color);
    }
    &.success {
      background-color: var(--success-color);
    }
    &.warn {
      background-color: var(--warn-color);
    }
  }
}
</style>
