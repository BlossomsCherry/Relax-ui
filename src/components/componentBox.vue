<template>
  <div class="componentBox">
    <slot></slot>
  </div>
</template>
<script setup></script>

<style lang="less" scoped>
.componentBox {
  padding: 30px 20px;
  border: 1px solid #f0f0f0;
  border-radius: 4px 4px 0 0;
  box-sizing: border-box;
}
</style>
