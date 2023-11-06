<template>
  <transition name="fade" @after-enter="handleAfterEnter">
    <div class="notification" :style="positionStyle" v-show="visible">
      <div :class="'iconfont icon-' + type" v-if="type"></div>
      <div style="width: 310px">
        <div class="notification__top">
          <h2>{{ title }}</h2>
          <span class="notification__btn" @click="handleClose" v-if="showClose">{{ btn }}</span>
        </div>
        <span class="notification__content">
          <p v-if="!dangerouslyUseHTMLString">{{ content }}</p>
          <p v-else v-html="content"></p>
        </span>
      </div>
    </div>
  </transition>
</template>
<script setup>
defineOptions({
  name: 'rNotification'
})

defineProps({
  title: {
    type: String
  },
  content: {
    type: String,
    required: true
  },
  btn: {
    type: String,
    default: '×'
  },
  type: {
    type: String,
    validator(val) {
      return ['success', 'warning', 'info', 'error'].indexOf(val) > -1
    }
  },
  showClose: {
    type: Boolean,
    default: true
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="less" scoped>
.iconfont {
  margin-right: 20px;
  font-size: 24px;
}
.icon-success {
  color: var(--success-color);
}
.icon-error {
  color: var(--error-color);
}
.icon-info {
  color: var(--info-color);
}
.icon-warning {
  color: var(--warn-color);
}
@keyframes show {
  0% {
    transform: rotate(-5deg);
  }
  10% {
    transform: rotate(5deg);
  }
  20% {
    transform: rotate(-5deg);
  }
  30% {
    transform: rotate(5deg);
  }
  40% {
    transform: rotate(-3deg);
  }
  50% {
    transform: rotate(3deg);
  }
  60% {
    transform: rotate(-3deg);
  }
  70% {
    transform: rotate(3deg);
  }
  80% {
    transform: rotate(-1deg);
  }
  90% {
    transform: rotate(1deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
h2 {
  font-weight: 500;
  font-size: 16px;
  color: #303133;
  margin: 0;
}
.fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.notification {
  z-index: 9999999999;
  background-color: #fff;
  padding: 20px;
  position: fixed;
  width: 310px;
  display: flex;
  transition: all 0.3s;
  box-shadow: -5px 5px 12px 0 rgba(204, 204, 204, 0.8);
  border-radius: 10px;
  border: 1px solid #ebeef5;
  animation: show 0.6s;
  &__top {
    display: flex;
    margin-bottom: 10px;
  }
  &__content {
    padding: 0;
    font-size: 14px;
    color: #515a6e;
  }
  &__btn {
    color: #9c9c9c;
    padding-left: 24px;
    margin-left: auto;
    cursor: pointer;
  }
}
</style>
