<script setup></script>
<template>
  <div class="layout">
    <r-container>
      <r-header></r-header>
      <r-main>
        <r-container>
          <router-view></router-view>
        </r-container>
      </r-main>
    </r-container>
  </div>
</template>

<style lang="less" scoped>
.layout {
  height: 1000px;
}
</style>
