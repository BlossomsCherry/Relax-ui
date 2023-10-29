<template>
  <div class="r-input">
    <div :class="['r-input-wrapper', { active: isActive }]" @click="isFocus">
      <input type="text" placeholder="Please input" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'rInput'
}
</script>
<script setup>
import { ref } from 'vue'

//获取焦点
let isActive = ref(false)
const isFocus = () => {
  isActive.value = true
}

//点击空白处失去焦点
document.body.addEventListener(
  'click',
  () => {
    isActive.value = false
  },
  true
)
</script>

<style lang="less" scoped>
.r-input {
  display: flex;
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  .r-input-wrapper {
    display: flex;
    flex: 1;
    padding: 1px 11px;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 0 1px #dcdfe6;
    border-radius: 2px;
    &.active {
      box-shadow: 0 0 0 1px #268ced;
    }

    input {
      width: 100%;
      color: #606266;
      font-size: inherit;
      border: none;
      outline: none;
      box-sizing: border-box;
    }
  }
}
</style>
