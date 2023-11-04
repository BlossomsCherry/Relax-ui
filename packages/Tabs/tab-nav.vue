<template>
  <div class="tabs_header">
    <div :class="['tabs_nav_scroll', type]">
      <div :class="['tabs_nav', type]">
        <div v-if="panesState.length > 0" :class="['active_bar', type]" :style="barStyle"></div>
        <template v-if="panesState.length > 0">
          <div
            ref="refItem"
            v-for="(item, index) in panesState"
            :key="item.name"
            :class="['item', { active: currentIndex === index }]"
            @click="activeClick(index, item.name)"
          >
            <i
              style="{fontSize: 14px}"
              class="m-icon-folder-close"
              v-if="panesState[index].icon"
            ></i>
            {{ item.label }}
            <i v-if="closeable" class="m-icon-close close_btn"></i>
          </div>
        </template>
      </div>
      <div class="tabs_addBtn" v-if="addable" @click="onTabClick">
        <i class="m-icon-add-bold add_icon"></i>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, nextTick, inject, h, render, defineComponent } from 'vue'

const emits = defineEmits(['activeClick'])
const props = defineProps({
  panes: {
    type: Array,
    default: () => []
  },
  icon: String,
  type: String,
  closeable: Boolean,
  addable: Boolean
})

// 记录 index 的值,先判断本地有无 currentIndex,有则使用本地存储,没有则为 0
const currentIndex = ref(
  localStorage.getItem('currentIndex') ? Number(localStorage.getItem('currentIndex')) : 0
)
const width = ref(null)
const refItem = ref(null)
const offsetLeft = ref(0)

// const tabsContent = inject('tabsContent')

// const currentTab = computed(() => {
//   return tabsContent.currentTab.value
// })

// Tab数据列表
const panesState = props.panes.map((item) => {
  return item.props
})

console.log(panesState)

// 滑块渲染函数（计算宽度和位置）
const setWidthLeft = () => {
  // 宽度、偏移量

  // 当处于第一个选项时
  if (0 < currentIndex.value < props.panes.length - 1) {
    width.value = refItem.value[currentIndex.value]?.clientWidth - 40
    offsetLeft.value = refItem.value[currentIndex.value]?.offsetLeft + 20
  }

  // 当处于中间选项时
  if (currentIndex.value === props.panes.length - 1) {
    width.value = refItem.value[currentIndex.value].clientWidth - 20
    offsetLeft.value = refItem.value[currentIndex.value].offsetLeft + 20
  }

  // 当处于最后一个选项时
  if (currentIndex.value === 0) {
    offsetLeft.value = 0
    width.value = refItem.value[currentIndex.value].clientWidth - 20
  }
}

// 初始渲染
nextTick(() => {
  // 先判断Tab栏有无数据，无则不渲染
  if (props.panes.length > 0) {
    // 渲染滑块
    setWidthLeft()

    // 渲染Tab栏
    {
      if (props.type === 'border-card') {
        refItem.value[currentIndex.value].style.backgroundColor = '#fff'
        refItem.value[currentIndex.value].style.borderBottomColor = '#fff'
      }
    }
  }
})

/**
 * Tab点击事件
 * @param {*} index  当前点击的tab页的索引
 * @param {*} activeName 当前点击的tab页的唯一标识
 */
const activeClick = (index, activeName) => {
  currentIndex.value = index

  // 带边框卡片风格样式
  {
    if (props.type === 'border-card')
      refItem.value.forEach((item) => {
        item.style.backgroundColor = '#f5f7fa'
        item.style.borderBottomColor = '#ccc'
      })
    refItem.value[currentIndex.value].style.backgroundColor = '#fff'
    refItem.value[currentIndex.value].style.borderBottomColor = '#fff'
  }

  // 重新渲染滑块位置和宽度
  setWidthLeft()

  // 存储新的 currentIndex
  localStorage.setItem('currentIndex', JSON.stringify(currentIndex.value))

  emits('activeClick', { index, activeName })
}

// 滑块宽度和位置样式
const barStyle = computed(() => {
  return {
    width: width.value + 'px',
    transform: `translateX(${offsetLeft.value}px)`
  }
})

// 动态增添标签渲染
</script>

<style lang="less" scoped>
.tabs_nav_scroll {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &.border-card {
    background-color: #f5f7fa;
  }
  .tabs_nav {
    display: inline-flex;

    &::after {
      content: '';
      position: absolute;
      //   left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: #e4e7ed;
    }
    .active_bar {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      background-color: var(--primary-color);
      transition: all 0.2s ease-in-out;
      z-index: 9;

      &.card,
      &.border-card {
        display: none;
      }
    }
    .item {
      display: flex;
      padding: 0 20px;
      height: 40px;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      i {
        font-size: 12px;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        margin-left: 5px;
        transition: all 200ms ease-in-out;

        &:hover {
          background-color: #ccc;
          border-radius: 10px;
          color: #fff;
        }
      }
      &.active {
        color: var(--primary-color);
      }

      &:nth-child(2) {
        padding-left: 0;
      }
      &:last-child {
        padding-right: 0;
      }
    }

    &.card {
      &:first-child {
        border-left: 1px solid #ccc;
      }
      .item {
        border-top: 1px solid #ccc;
        border-right: 1px solid #ccc;

        &:nth-child(2) {
          padding-left: 20px;
        }
        &:last-child {
          padding-right: 20px;
        }
      }

      &::after {
        height: 0.5px;
      }
    }
    &.border-card {
      .item {
        margin-bottom: -0.5px;
        border: 1px solid transparent;
        border-bottom-color: #ccc;
        border-right-color: #ccc;
        z-index: 9;

        &:nth-child(2) {
          padding-left: 20px;
        }
        &:last-child {
          padding-right: 20px;
        }
      }

      &::after {
        height: 0.5px;
      }
    }
  }
  .tabs_addBtn {
    color: #969696;
    cursor: pointer;
    text-align: center;
    height: 40px;
    width: 30px;
    line-height: 40px;
    background-color: #ffffff;

    i {
      width: 20px;
      height: 20px;
      border: solid 1px #cacaca;
      border-radius: 3px;
      line-height: 20px;
      text-align: center;

      &:hover {
        color: var(--primary-color);
        background-color: #f7f7f7;
      }
    }
  }
}
</style>
