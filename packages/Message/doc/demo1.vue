<template>
  <r-space>
    <rButton @click="messageOpen">消息提示</rButton>
    <rButton @click="messageOpen">VNode</rButton>
  </r-space>
</template>
<script setup>
import Message from '../index'

const messageOpen = () => {
  Message({
    message: 'this is a message.',
    type: 'success'
  })
}
</script>

<style lang="less" scoped></style>
