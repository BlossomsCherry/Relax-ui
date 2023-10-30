<template>
  <div class="r-rate">
    <span
      class="r-rate_item"
      v-for="(item, index) in num"
      :key="index"
      @mouseenter="enterActive(index)"
      @mouseleave="leaveActive"
      @click="clickActive(index)"
    >
      <i
        :class="(flag || clickFlag) >= index ? voidIcon : icons"
        :style="[iconStyle, { color: (flag || clickFlag) >= index ? '#f7ba2a' : '#cdd0d6' }]"
      ></i>
    </span>
    <div class="r-rate_text" v-if="showText">{{ texts[flag] }}</div>
  </div>
</template>
<script>
export default {
  name: 'rRate'
}
</script>
<script setup>
import { defineProps, ref, computed } from 'vue'

const props = defineProps({
  num: {
    type: Number || String,
    default: 5
  },
  //未选中时图标
  icons: {
    type: String,
    default: 'm-icon-collection'
  },
  //选中时图标
  voidIcon: {
    type: String,
    default: 'm-icon-collection_fill'
  },
  size: String,
  showText: Boolean,
  texts: {
    type: Array,
    default: () => ['极差', '失望', '一般', '满意', '惊喜']
  }
})

//icon的大小
const iconStyle = computed(() => {
  let fontSize = '18px'
  if (props.size) {
    if (props.size === 'small') fontSize = '14px'
    if (props.size === 'large') fontSize = '24px'
  }
  return {
    fontSize
  }
})

const flag = ref(-1)
const clickFlag = ref(-1)

const enterActive = (index) => {
  flag.value = index
}

const leaveActive = () => {
  flag.value = clickFlag.value
}

const clickActive = (index) => {
  clickFlag.value = index
}
</script>

<style lang="less" scoped>
.r-rate {
  display: inline-flex;
  height: 32px;
  align-items: center;
  .r-rate_item {
    i {
      margin-right: 6px;
      cursor: pointer;
      &.iconActive {
        color: #f7ba2a;
      }
    }
  }
  .r-rate_text {
    vertical-align: middle;
    color: #303133;
  }
}
</style>
