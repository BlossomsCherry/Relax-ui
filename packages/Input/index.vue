<template>
  <div class="r-input">
    <div
      :class="[
        'r-input-wrapper',
        { active: !props.disabled && isActive, disabled: props.disabled }
      ]"
    >
      <i v-if="props.leftIcon" :class="props.leftIcon" style="margin-right: 5px"></i>
      <input
        :type="showPassword ? 'password' : 'text'"
        :value="modelValue"
        :disabled="disabled"
        :placeholder="placeholder"
        :class="{ disabled: props.disabled }"
        @focus="focus"
        @blur="blur"
        @input="input"
        @change="change"
      />
      <i
        v-if="props.clearable && modelValue && rightIcon === ''"
        class="m-icon-error"
        @click="clear"
      ></i>
      <i v-if="props.rightIcon" :class="props.rightIcon"></i>
    </div>
    <slot name="btn"></slot>
  </div>
</template>
<script>
export default {
  name: 'rInput'
}
</script>
<script setup>
import { ref, defineProps, defineEmits } from 'vue'

// update 前缀会告诉父组件我要更新
const emit = defineEmits(['update:modelValue', 'focus', 'blur', 'clear', 'input', 'change'])
const props = defineProps({
  modelValue: String || Number,
  placeholder: String,
  disabled: Boolean,
  clearable: Boolean,
  showPassword: Boolean,
  leftIcon: {
    type: String,
    default: ''
  },
  rightIcon: {
    type: String,
    default: ''
  }
})

//input事件（当input的value值发生变化时就会触发）
const input = (e) => {
  emit('update:modelValue', e.target.value)
  emit('input', e.target.value)
}

//change事件（当input失去焦点并且它的value值发生变化时触发）
const change = (e) => {
  emit('change', e)
}

//获取焦点
let isActive = ref(false)
const focus = (e) => {
  isActive.value = true
  emit('focus', e)
}

//失去焦点
const blur = (e) => {
  isActive.value = false
  emit('blur', e)
}

//清空输入框
const clear = () => {
  emit('update:modelValue', '')
  emit('clear')
}
</script>

<style lang="less" scoped>
.r-input {
  display: flex;
  width: 100%;
  height: 35px;
  box-sizing: border-box;
  .r-input-wrapper {
    display: flex;
    flex: 1;
    padding: 1px 11px;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 0 1px #dcdfe6;
    border-radius: 2px;
    cursor: text;
    &.active {
      box-shadow: 0 0 0 1px #268ced;
    }
    &.disabled {
      background-color: #f5f7fa;
    }

    input {
      width: 100%;
      height: 100%;
      color: #606266;
      font-size: inherit;
      border: none;
      outline: none;
      box-sizing: border-box;

      &.disabled {
        cursor: not-allowed;
        background-color: #f5f7fa;
      }
    }
    i {
      color: #ccc;
      font-size: 18px;
      cursor: pointer;
    }
  }
}
</style>
