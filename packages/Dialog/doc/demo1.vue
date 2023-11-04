<template>
  <r-button type="primary" @click="moduleShow = true"> 打开模态框</r-button>
  <r-Dialog v-model="moduleShow" title="Tips" width="30%">
    <span>This is a message</span>
    <template #footer>
      <span>
        <r-button style="margin-right: 10px" @click="moduleShow = false">Cancel</r-button>
        <r-button type="primary" @click="moduleShow = false">Confirm</r-button>
      </span>
    </template>
  </r-Dialog>
</template>
<script setup>
import { ref } from 'vue'

const moduleShow = ref(false)
</script>

<style lang="less" scoped></style>
