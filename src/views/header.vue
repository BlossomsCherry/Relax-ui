<template>
  <div class="header">
    <div class="left">
      <h2>RELAX-UI</h2>
    </div>
    <div class="right">
      <ul>
        <li>
          <router-link to="/home">主页</router-link>
        </li>
        <li>
          <router-link to="/componentsUI">UI组件</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup></script>

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
    ul {
      display: flex;
      li {
        position: relative;
        width: 100px;
        line-height: 80px;
        text-align: center;
        cursor: pointer;
        a {
          height: 80px;
          &::after {
            content: '';
            position: absolute;
            width: 50px;
            height: 2px;
            left: 26px;
            bottom: 20px;
            background-color: black;
          }
        }
      }
    }
  }
}
</style>
