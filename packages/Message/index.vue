<template>
  <Transition name="slide-fade">
    <div
      class="message"
      v-show="showValue"
      :class="[
        type === 'info' ? 'color-info' : '',
        type === 'error' ? 'color-error' : '',
        type === 'success' ? 'color-success' : '',
        type === 'warn' ? 'color-warn' : ''
      ]"
    >
      <i :class="iconStyle[type].icon"></i>
      <span class="message-slot">{{ message }}</span>
    </div>
  </Transition>
</template>
<script>
export default {
  name: 'rMessage'
}
</script>
<script setup>
import { defineProps, ref, onMounted } from 'vue'

const props = defineProps({
  message: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'info'
  },
  icon: String
})

const iconStyle = ref({
  info: {
    icon: props.icon || 'm-icon-prompt-filling'
  },
  error: {
    icon: props.icon || 'm-icon-delete-filling'
  },
  success: {
    icon: props.icon || 'm-icon-success'
  },
  warn: {
    icon: props.icon || 'm-icon-warning'
  }
})

const showValue = ref(false)
onMounted(() => {
  showValue.value = true
})
</script>

<style lang="less" scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

div.slide-fade-enter-from,
div.slide-fade-leave-to {
  transform: translate(-50%, -65px);
  opacity: 0;
}

.message {
  display: flex;
  position: fixed;
  left: 50%;
  top: 25px;
  transform: translateX(-50%);
  padding: 5px 20px;
  min-height: 45px;
  border-radius: 5px;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  &.color-info {
    background-color: #f4f4f5;
    color: #909399;
  }
  &.color-error {
    background-color: #fef0f0;
    color: #f56f6f;
  }
  &.color-success {
    background-color: #f0f9eb;
    color: #68c23b;
  }
  &.color-warn {
    background-color: #fdf6ec;
    color: #e6a33e;
  }

  i {
    margin-right: 8px;
    vertical-align: middle;
    font-size: 16px;
  }
}
</style>
