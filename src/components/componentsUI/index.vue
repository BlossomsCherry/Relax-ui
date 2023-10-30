<template>
  <div class="components">
    <div class="left">
      <ul @mouseleave="currentIndex = null">
        <li
          v-for="(item, index) in list"
          :key="index"
          @mouseenter="active(index)"
          :class="{ active: index === currentIndex }"
          @click="$router.push({ name: item.eName })"
        >
          {{ item.eName }} {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="right"></div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import list from './list.json'

const currentIndex = ref(null)
const active = (index) => {
  currentIndex.value = index
}
</script>

<style lang="less" scoped>
.components {
  display: flex;

  .left {
    width: 315px;
    border-right: 1px solid #ccc;
    overflow-y: scroll;
    /* 设置浏览器滚动条样式 */
    &::-webkit-scrollbar {
      width: 6px;
      /* 滚动条宽度 */
      /* 隐藏滚动条 */
      // display: none;
      // scrollbar-width: none;
      // -ms-overflow-style: none;
    }

    &::-webkit-scrollbar-thumb {
      /* 滚动条拖动部分的颜色 */
      background-color: #dddee0;
      /* 滚动条设置为圆角 */
      -webkit-border-radius: 5px;
    }

    &::-webkit-scrollbar-track {
      background-color: #fff;
      /* 滚动条轨道的颜色 */
    }
    ul {
      li {
        padding-left: 50px;
        height: 40px;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.8509803922);
        line-height: 40px;
        cursor: pointer;
        &.active {
          background-color: #e6f2fd;
          color: var(--primary-color);
        }
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
