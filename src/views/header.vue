<template>
  <div class="header">
    <div class="left">
      <h2>RELAX-UI</h2>
    </div>
    <div class="right">
      <router-link to="/home" :class="{ active: isActive === 0 }" @click="isActive = 0"
        >指南</router-link
      >
      <router-link to="/componentsUI" :class="{ active: isActive === 1 }" @click="isActive = 1"
        >组件</router-link
      >
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const isActive = ref(0)
</script>

<style lang="less" scoped>
.header {
  display: flex;
  padding: 0 100px;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  .left {
    width: 200px;
    color: var(--primary-color);
  }
  .right {
    display: flex;
    align-items: center;
    a {
      margin-right: 20px;
      padding: 10px 5px;
      border-bottom: 2px solid transparent;
      &:hover {
        color: var(--primary-color);
      }
      &.active {
        color: var(--primary-color);
        border-bottom: 2px solid var(--primary-color);
      }
    }
  }
}
</style>
