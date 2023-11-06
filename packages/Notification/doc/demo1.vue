<template>
  <r-button plain @click="open1"> Closes automatically </r-button>
</template>
<script setup>
import { Notification } from '../index'

const open1 = () => {
  Notification({
    title: '这是通知标题',
    content: '这是通知描述,这是通知描述,这是通知描述,这是通知描述,'
  })
}
</script>

<style lang="less" scoped></style>
