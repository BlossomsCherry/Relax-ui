<template>
  <r-input v-model="value1" placeholder="Please input">
    <template #btn>
      <r-button type="primary" leftIcon="m-icon-search">搜索</r-button>
    </template>
  </r-input>
</template>
<script setup>
import { ref } from 'vue'

const value1 = ref('')
</script>

<style lang="less" scoped></style>
