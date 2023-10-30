<template>
  <div class="components">
    <div class="left">
      <router-link
        v-for="(item, index) in list"
        :key="index"
        :class="{ active: item.eName === $route.name }"
        :to="item.eName"
      >
        {{ item.eName }} {{ item.name }}
      </router-link>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="right"></div>
  </div>
</template>
<script setup>
import list from './list.json'
</script>

<style lang="less" scoped>
.components {
  display: flex;
  .left {
    display: flex;
    padding: 0px 32px 96px 87px;
    width: 321px;
    border-right: 1px solid #ccc;
    flex-direction: column;
    box-sizing: border-box;

    a {
      padding: 10px 16px;
      width: 220px;
      height: 40px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.8509803922);
      line-height: 1.5;
      cursor: pointer;
      box-sizing: border-box;
      &:hover {
        color: var(--primary-color);
      }
      &.active {
        background-color: #e6f2fd;
        color: var(--primary-color);
        font-weight: 600;
        border-radius: 8px;
      }
    }
  }
  .main {
    flex: 1;
    padding-bottom: 50px;
    margin-left: 50px;
  }
  .right {
    width: 200px;
  }
}
</style>
