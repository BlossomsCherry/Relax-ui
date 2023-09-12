<template>
  <div class="button">
    <div class="first">
      <h2>基础用法</h2>
      <p>使用 type、plain、round 和 circle 来定义按钮的样式</p>
      <ul class="box">
        <li>
          <r-button></r-button>
          <r-button type="success">Success</r-button>
          <r-button type="warn">Warn</r-button>
          <r-button type="primary">Primary</r-button>
          <r-button type="danger">Danger</r-button>
        </li>
        <li>
          <r-button plain></r-button>
          <r-button type="success" plain>Success</r-button>
          <r-button type="warn" plain>Warn</r-button>
          <r-button type="primary" plain>Primary</r-button>
          <r-button type="danger" plain>Danger</r-button>
        </li>
        <li>
          <r-button round></r-button>
          <r-button type="success" round>Success</r-button>
          <r-button type="warn" round>Warn</r-button>
          <r-button type="primary" round>Primary</r-button>
          <r-button type="danger" round>Danger</r-button>
        </li>
      </ul>
    </div>
    <div class="second">
      <h2>禁用状态</h2>
      <p>你可以使用 disabled 属性来定义按钮是否被禁用。</p>
      <ul class="box">
        <li>
          <r-button @click="click" disabled></r-button>
          <r-button type="success" disabled>Success</r-button>
          <r-button type="warn" disabled>Warn</r-button>
          <r-button type="primary" disabled>Primary</r-button>
          <r-button type="danger" disabled>Danger</r-button>
        </li>
        <li>
          <r-button plain disabled></r-button>
          <r-button type="success" plain disabled>Success</r-button>
          <r-button type="warn" plain disabled>Warn</r-button>
          <r-button type="primary" plain disabled>Primary</r-button>
          <r-button type="danger" plain disabled>Danger</r-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const click = () => {
  console.log(11)
}
</script>

<style lang="less" scoped>
.button {
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  width: 50%;

  .first,
  .second {
    h2,
    p {
      margin: 10px 0;
      color: #333;
    }

    .box {
      padding: 30px 20px;
      border: 1px solid #ccc;
      list-style: none;
      .r-button {
        margin: 10px 10px;
      }
    }
  }
}
</style>
