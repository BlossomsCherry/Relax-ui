<template>
  <div class="layout">
    <!-- 头部 -->
    <div class="header">
      <Header></Header>
    </div>

    <!-- 内容 -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import Header from './header.vue'
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
.content {
  // margin-top: 90px;
}
</style>
