<template>
  <r-space inline>
    <rButton @click="messageOpen">消息提示</rButton>
    <rButton @click="messageOpen">VNode</rButton>
  </r-space>
</template>
<script setup>
import Message from '../index.js'
// import { Message } from 'relaxing-ui'

const messageOpen = () => {
  Message({
    message: 'this is a message.',
    type: 'success'
  })
}
</script>

<style lang="less" scoped></style>
