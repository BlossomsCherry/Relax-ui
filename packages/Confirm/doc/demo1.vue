<template>
  <r-button type="primary" @click="openConfirm">Confirm Message</r-button>
</template>
<script setup>
import Confirm from '../index.js'
import Message from '../../message/index.js'

const openConfirm = () => {
  Confirm({
    showIcon: true,
    text: 'Are you sure to delete this data?'
  })
    .then(() => {
      Message({ message: '点击了确定' })
    })
    .catch(() => {
      Message({ message: '点击了取消' })
    })
}
</script>

<style lang="less" scoped></style>
