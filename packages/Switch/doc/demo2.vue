<template>
  <r-switch v-model="value1" disabled></r-switch>
</template>
<script setup>
import { ref } from 'vue'

const value1 = ref(false)
</script>

<style lang="less" scoped></style>
