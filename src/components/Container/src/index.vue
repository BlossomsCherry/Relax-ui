<script setup></script>
<template>
  <div class="index">
    <div class="container">
      <r-container>
        <r-header></r-header>
        <r-main></r-main>
      </r-container>
    </div>
    <div class="container">
      <r-container>
        <r-header></r-header>
        <r-main></r-main>
        <r-footer></r-footer>
      </r-container>
    </div>
    <div class="container">
      <r-container>
        <r-aside></r-aside>
        <r-main></r-main>
      </r-container>
    </div>
    <div class="container">
      <r-container>
        <r-header></r-header>
        <r-container>
          <r-aside></r-aside>
          <r-main></r-main>
        </r-container>
      </r-container>
    </div>
    <div class="container">
      <r-container>
        <r-header></r-header>
        <r-container>
          <r-aside></r-aside>
          <r-container>
            <r-main></r-main>
            <r-footer></r-footer>
          </r-container>
        </r-container>
      </r-container>
    </div>
    <div class="container">
      <r-container>
        <r-aside></r-aside>
        <r-container>
          <r-main></r-main>
          <r-footer></r-footer>
        </r-container>
      </r-container>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  width: 700px;
  height: 250px;
  margin: 20px auto;
  background-color: #ecf5ff;
}
.r-header,
.r-footer {
  background-color: #c6e2ff;
}
</style>
