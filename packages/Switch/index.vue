<template>
  <div class="r-switch">
    <span v-if="textAlign === 'left'" :style="alignStyle">
      {{ modelValue ? onText : closeText }}</span
    >
    <div class="r-switch_content" :style="contentStyle" @click="isChecked">
      <div class="r-switch_round" :style="roundStyle"></div>
      <span v-show="showText" class="text" :style="textStyle">{{ modelValue ? '关' : '开' }}</span>
    </div>
    <span v-if="textAlign === 'right'" :style="alignStyle">{{
      modelValue ? onText : closeText
    }}</span>
  </div>
</template>
<script>
export default {
  name: 'rSwitch'
}
</script>
<script setup>
import { ref, defineProps, defineEmits, watchEffect } from 'vue'

const emit = defineEmits(['update:modelValue', 'change'])
const props = defineProps({
  modelValue: Boolean,
  disabled: Boolean,
  width: {
    type: Number || String,
    default: 40
  },
  onColor: {
    type: String,
    default: '#409eff'
  },
  closeColor: {
    type: String,
    default: '#dcdfe6'
  },
  showText: Boolean,
  closeText: {
    type: String,
    default: '关闭'
  },
  onText: {
    type: String,
    default: '开启'
  },
  textAlign: String
})

const contentStyle = ref({
  backgroundColor: props.closeColor,
  cursor: props.disabled ? 'not-allowed' : 'pointer',
  width: props.width + 'px'
})
const alignStyle = ref({ fontSize: '14px', color: '#ccc', margin: '0 5px' })
const roundStyle = ref({ left: '2px' })
const textStyle = ref({ right: '4px' })
const flag = ref(props.modelValue) //true为打开，false为关闭（默认为false）

const isChecked = () => {
  //先判断是否处于禁用状态
  if (!props.disabled) {
    flag.value = !flag.value
    emit('update:modelValue', flag.value)
    emit('change', flag.value)
  }
}

// 监听modelValue
watchEffect(() => {
  roundStyle.value.left = props.modelValue ? props.width - 18 + 'px' : '2px'
  contentStyle.value.backgroundColor = props.modelValue ? props.onColor : props.closeColor
  textStyle.value.right = props.modelValue ? '24px' : '4px'
  alignStyle.value.color = props.modelValue ? '#409eff' : '#ccc'
})
</script>

<style lang="less" scoped>
.r-switch {
  display: inline-flex;
  position: relative;
  height: 32px;
  padding: 0 10px;
  line-height: 20px;
  vertical-align: middle;
  align-items: center;

  .r-switch_content {
    display: flex;
    position: relative;
    display: flex;
    min-width: 40px;
    height: 20px;
    border-radius: 15px;
    background-color: #dcdfe6;
    align-items: center;
    .r-switch_round {
      position: absolute;
      left: 2px;
      top: 2px;
      width: 16px;
      height: 16px;
      border-radius: 50px;
      background-color: #fff;
      transition: all 0.3s ease-in-out;
    }
    .text {
      position: absolute;
      color: #fff;
      font-size: 12px;
      transition: all 0.3s ease-in-out;
    }
  }
}
</style>
