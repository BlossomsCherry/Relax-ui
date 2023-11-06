<template>
  <r-table :data="options"></r-table>
</template>
<script setup>
const options = [
  {
    属性名: 'span',
    说明: '栅格占据的列数',
    类型: 'number',
    默认值: '24'
  },
  {
    属性名: 'offset',
    说明: '栅格左侧的间隔格数',
    类型: 'number',
    默认值: '0'
  },
  {
    属性名: 'push',
    说明: '栅格向右移动格数',
    类型: 'number',
    默认值: '0'
  },
  {
    属性名: 'pull',
    说明: '栅格向左移动格数',
    类型: 'number',
    默认值: '0'
  }
]
</script>

<style lang="less" scoped></style>
