import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import RSwitch from '../index.vue' // 请根据你的文件路径修改

describe('RSwitch', () => {
  it('renders a switch with the correct initial state', () => {
    const wrapper = mount(RSwitch, {
      props: { modelValue: false }
    })

    // 断言开关是否渲染正确的初始状态
    expect(wrapper.find('.r-switch_content').attributes('style')).toContain(
      'background-color: #f2f2f2'
    )
  })

  it('toggles the switch on click', async () => {
    const wrapper = mount(RSwitch, {
      props: { modelValue: false }
    })

    // 模拟点击开关
    const switchContent = wrapper.find('.r-switch_content')
    await switchContent.trigger('click')

    // 断言开关的状态是否已切换
    expect(wrapper.find('.r-switch_content').attributes('style')).toContain(
      'background-color: #409eff'
    )
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([true])
  })

  it('does not toggle the switch if disabled', async () => {
    const wrapper = mount(RSwitch, {
      props: { modelValue: true, disabled: true }
    })

    // 模拟点击禁用的开关
    const switchContent = wrapper.find('.r-switch_content')
    await switchContent.trigger('click')

    // 断言开关的状态未发生变化
    expect(wrapper.find('.r-switch_content').attributes('style')).toContain(
      'background-color: #409eff'
    )
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
  })

  it('displays the correct text when "showText" is true', () => {
    const wrapper = mount(RSwitch, {
      props: { modelValue: true, showText: true }
    })

    // 断言文本是否正确显示
    expect(wrapper.find('.text').text()).toBe('开')
  })

  it('emits the "change" event on click', async () => {
    const wrapper = mount(RSwitch, {
      props: { modelValue: true }
    })

    // 模拟点击开关
    const switchContent = wrapper.find('.r-switch_content')
    await switchContent.trigger('click')

    // 断言 "change" 事件是否被触发
    expect(wrapper.emitted('change')).toBeTruthy()

    // 断言传递给事件处理程序的参数是否正确
    expect(wrapper.emitted('change')[0]).toEqual([false])
  })
})
