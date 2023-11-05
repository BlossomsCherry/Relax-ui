import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import RDialog from '../index.vue' // 请根据你的文件路径修改

describe('RDialog', () => {
  it('renders a dialog when modelValue is true', async () => {
    const wrapper = mount(RDialog, {
      props: {
        modelValue: true,
        title: 'Dialog Title',
        width: '400px'
      }
    })

    // 断言对话框是否正确渲染
    expect(wrapper.text()).toContain('Dialog Title')

    // 断言宽度是否设置为 '400'
    expect(wrapper.find('.r-Dialog-contentBox').attributes('style')).toContain('width: 400px')
  })

  it('emits an "update:modelValue" event when closed', async () => {
    const wrapper = mount(RDialog, {
      props: {
        modelValue: true,
        title: 'Dialog Title',
        width: '400px'
      }
    })

    // 模拟点击关闭按钮
    await wrapper.find('.close-btn').trigger('click')

    // 断言 "update:modelValue" 事件是否被触发
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()

    // 断言 modelValue 是否变为 false
    expect(wrapper.vm.modelValue).toBe(false)
  })
})
