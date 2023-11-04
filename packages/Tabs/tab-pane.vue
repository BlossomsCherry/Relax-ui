<template>
  <div class="tab_pane" v-show="activeTab === tabName">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'rTabPane'
}
</script>
<script setup>
import { getCurrentInstance, inject, computed } from 'vue'

defineProps({
  label: {
    type: String
  },
  name: {
    type: [String, Number],
    default: ''
  },
  icon: String,
  closable: Boolean,
  disabled: Boolean,
  lazy: Boolean
})

// 接受父组件传过来的数据
const tabsContent = inject('tabsContent')
const activeTab = computed(() => {
  return tabsContent.currentTab.value
})

// 获取当前组件实例信息
const instance = getCurrentInstance()
const tabName = instance.props.name
</script>

<style lang="less" scoped></style>
