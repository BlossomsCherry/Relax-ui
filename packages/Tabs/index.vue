<template>
  <div :class="['r-tabs', type]">
    <!-- nav区域 -->
    <tabs-nav
      :panes="panes"
      @activeClick="onTabClick"
      :type="type"
      :closeable="closeable"
      :addable="addable"
      :icon="icon"
    ></tabs-nav>

    <!-- 内容区域 -->
    <div class="tabs_content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps, useSlots, provide, ref, computed, watchEffect } from 'vue'
import tabsNav from './tab-nav.vue'

defineOptions({ name: 'rTabs' })

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: 'first'
  },
  activeName: {
    type: [String, Number],
    default: 'first'
  },
  icon: String,
  type: String,
  closeable: Boolean,
  addable: Boolean
})

const emits = defineEmits(['update:activeName', 'update:modelValue'])

const slots = useSlots()
const currentIndex = ref(
  localStorage.getItem('currentIndex') ? Number(localStorage.getItem('currentIndex')) : 0
)

// 判断是插槽是否有内容
const isSlots = !!slots.default
const panes = ref(isSlots ? slots.default() : [])

// console.log(panes.value)

const currentTab = computed(() => {
  // 先查看本地存储的数据来确定初始的tab页
  return panes.value[currentIndex.value]?.props.name || props.modelValue
})

// 监听测试
watchEffect(() => {
  // console.log(props.modelValue)
  // console.log(props.activeName)
})

// 传递给子组件
provide('tabsContent', {
  emits,
  currentTab,
  props
})

/**
 * 渲染当前Tab页
 * @param { Object } args args中包含两个值，当前tab页的索引（index）和唯一标识（activeName）
 */
const onTabClick = (args) => {
  currentIndex.value = args.index

  emits('update:modelValue', args.activeName)
  emits('update:activeName', args.activeName)
}
</script>

<style lang="less" scoped>
.r-tabs {
  .tabs_content {
    margin-top: 15px;
    padding: 32px;
    font-size: 32px;
    font-weight: 600;
    color: #6b778c;
  }
  &.border-card {
    border: 1px solid #ccc;
    .tabs_content {
      padding: 15px;
      margin: 0;
      font-size: 16px;
    }
  }
}
</style>
