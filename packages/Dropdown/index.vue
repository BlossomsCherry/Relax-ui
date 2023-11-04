<template>
  <div class="r-dropdown">
    <div
      class="r-dropdown-default-menu"
      @mouseenter="enterShow"
      @click="clickShow"
      @mouseleave="leaveShow"
    >
      <span> {{ title ? title : '下拉菜单' }}</span>
      <i v-if="!isShow" class="m-icon-arrow-down-bold"></i>
      <i v-else class="m-icon-arrow-up-bold"></i>
    </div>

    <transition name="slide-fade">
      <div class="r-dropdown-list" v-show="isShow" @mouseleave="isShow = false">
        <div class="r-dropdown-all">
          <template v-for="(item, index) in options" :key="index">
            <div class="item">
              <slot>
                <i :class="item.icon"></i>
              </slot>
              <div class="r-dropdown-list-item" @click="change(item, index)">{{ item.label }}</div>
            </div>
          </template>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'rDropdown'
}
</script>
<script setup>
import { defineProps, ref, defineEmits } from 'vue'

const emit = defineEmits(['change'])
const props = defineProps({
  title: String,
  options: {
    type: Array,
    default: () => [
      {
        label: '菜单1'
      },
      {
        label: '菜单2'
      },
      {
        label: '菜单3'
      },
      {
        label: '菜单4'
      },
      {
        label: '菜单5'
      }
    ]
  },
  trigger: {
    type: String,
    default: 'hover'
  }
})

const isShow = ref(false)

const enterShow = () => {
  if (props.trigger === 'hover') {
    isShow.value = true
  }
}

const clickShow = () => {
  if (props.trigger === 'click') isShow.value = true
}

const change = (item, index) => {
  emit('change', item, index)
  isShow.value = false
}
</script>

<style lang="less" scoped>
.r-dropdown {
  position: relative;
  .r-dropdown-default-menu {
    display: inline-flex;
    font-size: 14px;
    color: var(--primary-color);
    align-items: center;
    cursor: pointer;
    span {
      margin-right: 5px;
    }
  }
  .r-dropdown-all {
    position: absolute;
    display: flex;
    margin-top: 20px;
    padding: 5px 10px;
    left: 0;
    border-radius: 3px;
    font-size: 14px;
    background-color: #fff;
    border: 1px solid #f0f0f0;
    flex-direction: column;
    justify-content: center;
    z-index: 99;
    &::after {
      content: '';
      position: absolute;
      top: -19px;
      left: 38%;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-top: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid #fff;
      z-index: 12;
    }
    &::before {
      content: '';
      position: absolute;
      top: -21px;
      left: 37%;
      width: 0;
      height: 0;
      border-left: 11px solid transparent;
      border-top: 11px solid transparent;
      border-right: 11px solid transparent;
      border-bottom: 11px solid #f0f0f0;
      z-index: 10;
    }

    .item {
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        color: var(--primary-color);
        background-color: #efefef;
        & > .r-dropdown-list-item {
          color: var(--primary-color);
        }
      }

      .r-dropdown-list-item {
        margin-left: 5px;
        color: #626262;
        line-height: 30px;
        text-align: center;
        cursor: pointer;
      }
    }
  }
  .slide-fade-enter-active {
    transition: all 0.2s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0.5;
  }
}
</style>
