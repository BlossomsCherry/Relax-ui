<script setup>
import { computed, useSlots } from 'vue'

defineOptions({
  name: 'r-container'
})

const slots = useSlots()
//打印插槽内容
// console.log(slots.default)

//先判断插槽内容是否为空
const slotsArr = typeof slots.default === 'undefined' ? [] : slots.default() //插槽内容为数组形式
const hasHeaderFooter = computed(() => {
  const names = []
  // vertical.push(slotsArr[0].type.name)

  //将插槽内容的名字添加到 names 数组

  slotsArr.map((item) => {
    names.push(item.type.name)
  })

  //通过some()函数判断插槽内容中是否有 'r-header' 和 'r-footer',有就返回true，没有则返回false
  return names.some((item) => item === 'r-header' || item === 'r-footer')
})

// 计算属性，根据是否包含 <r-header> 或 <r-footer> 来设置 flex-direction
const containerStyle = computed(() => {
  return {
    flexDirection: hasHeaderFooter.value ? 'column' : 'row'
    // justifyContent: 'space-between'
  }
})
</script>
<template>
  <div class="r-container" :style="containerStyle">
    <slot> </slot>
  </div>
</template>

<style lang="less" scoped></style>
