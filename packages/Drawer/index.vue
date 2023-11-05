<template>
  <!-- 遮罩 -->
  <transition name="fade-mask">
    <div class="r-overlay" v-if="modelValue && model" @click="close($event)"></div>
  </transition>

  <transition name="slide-right">
    <div class="r-drawer" v-if="modelValue" :style="drawerStyle">
      <div class="r-drawer-header" v-if="withHeader">
        <slot name="header"></slot>
        <span class="r-drawer-title" v-if="title">{{ title }}</span>
        <r-button leftIcon="m-icon-close" @click="close"></r-button>
      </div>
      <div class="r-drawer-body">
        <slot></slot>
      </div>
      <div class="r-drawer-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </transition>
</template>
<script setup>
import { computed } from 'vue'

defineOptions({
  name: 'rDrawer'
})

const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: Boolean,
  title: String,
  beforeClose: {
    type: Function,
    default: null
  },
  size: [String, Number],
  // 是否显示遮罩
  model: {
    type: Boolean,
    default: true
  },
  // 抽屉方向
  direction: String,
  // 是否显示头部
  withHeader: {
    type: Boolean,
    default: true
  }
})

const close = (e) => {
  if (props.beforeClose) {
    props.beforeClose()
    return
  }
  emits('update:modelValue', false)

  console.log(e.target.className)
}

const drawerStyle = computed(() => {
  return {
    width: typeof props.size === 'number' ? `${props.size}px` : props.size
  }
})
</script>

<style lang="less" scoped>
// 动画
.fade-mask-enter-active,
.fade-mask-leave-active {
  transition: opacity 0.2s ease;
}
.fade-mask-enter-from,
.fade-mask-leave-to {
  opacity: 0;
  transition: opacity 0.5s ease;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease;
  transform: translateX(0);
}
.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-100%);
}

.slide-top-enter-active,
.slide-top-leave-active {
  transition: all 0.3s ease;
  transform: translateY(0);
}
.slide-top-enter-from,
.slide-top-leave-to {
  transform: translateY(-100%);
}
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease;
  transform: translateX(0);
}
.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}
.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: all 0.3s ease;
  transform: translateY(0);
}
.slide-bottom-enter-from,
.slide-bottom-leave-to {
  transform: translateY(100%);
}

// 遮罩
.r-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: hidden;
  z-index: 2000;
}

.r-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #fff;
  box-shadow:
    0px 16px 48px 16px rgba(0, 0, 0, 0.08),
    0px 12px 32px rgba(0, 0, 0, 0.12),
    0px 8px 16px -8px rgba(0, 0, 0, 0.16);
  z-index: 20001;

  .r-drawer-header {
    display: flex;
    margin-bottom: 32px;
    padding: 20px;
    padding-bottom: 0;
    color: #72767b;
    justify-content: space-between;
    align-items: center;

    .r-drawer-title {
      flex: 1;
      margin: 0;
      line-height: inherit;
      font-size: 1rem;
    }

    .r-button {
      padding: 0;
      border: 0;

      &:hover {
        background-color: transparent;
      }
    }
  }

  .r-drawer-body {
    flex: 1;
    padding: 20px;
    overflow: auto;
  }

  .r-drawer-footer {
    padding: 20px;
    text-align: right;
  }
}
</style>
