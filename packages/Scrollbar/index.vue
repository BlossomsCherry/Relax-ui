<template>
  <div class="r-scrollbar" :style="style">
    <div class="el-scrollbar_view" :style="{ flexDirection: row ? row : 'column' }">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'rScrollbar'
}
</script>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  height: [String, Number],
  maxHeight: [String, Number],
  row: Boolean
})

const style = computed(() => {
  return {
    height: props.height + 'px',
    maxHeight: props.maxHeight + 'px'
  }
})
</script>

<style lang="less" scoped>
.r-scrollbar {
  width: 100%;
  overflow: auto;
  box-sizing: border-box;

  .r-scrollbar_bar {
    height: 6px;
    left: 2px;
    background-color: pink;
  }
  .el-scrollbar_view {
    display: flex;
  }

  &::-webkit-scrollbar {
    visibility: hidden;
    width: 5px;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  &:hover {
    /* 设置浏览器滚动条样式 */
    &::-webkit-scrollbar {
      // width: 5px;
      height: 5px;
    }

    &::-webkit-scrollbar-thumb {
      /* 滚动条拖动部分的颜色 */
      background-color: #dddee0;
      /* 滚动条设置为圆角 */
      -webkit-border-radius: 5px;
    }

    &::-webkit-scrollbar-track {
      background-color: #fff;
      /* 滚动条轨道的颜色 */
    }
  }
}
</style>
