import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import RRate from '../index.vue' // 请根据你的文件路径修改

describe('RRate', () => {
  it('renders the correct number of icons', () => {
    const num = 5
    const wrapper = mount(RRate, {
      props: { num }
    })

    // 断言渲染的图标数量是否正确
    expect(wrapper.findAll('.r-rate_item i').length).toBe(num)
  })

  it('sets active icon on mouseenter', async () => {
    const wrapper = mount(RRate)

    // 模拟鼠标进入第一个图标
    const firstIcon = wrapper.find('.r-rate_item i')
    await firstIcon.trigger('mouseenter')

    // 断言第一个图标是否处于活动状态
    expect(firstIcon.classes('iconActive')).toBe(true)
  })

  it('resets active icon on mouseleave', async () => {
    const wrapper = mount(RRate)

    // 模拟鼠标进入第一个图标，然后离开
    const firstIcon = wrapper.find('.r-rate_item i')
    await firstIcon.trigger('mouseenter')
    await firstIcon.trigger('mouseleave')

    // 断言没有图标处于活动状态
    expect(wrapper.findAll('.r-rate_item i.iconActive').length).toBe(0)
  })

  it('sets active icon on click', async () => {
    const wrapper = mount(RRate)

    // 模拟点击第三个图标
    const thirdIcon = wrapper.findAll('.r-rate_item i')[2]
    await thirdIcon.trigger('click')

    // 断言第三个图标是否处于活动状态
    expect(thirdIcon.classes('iconActive')).toBe(true)
  })

  it('shows text when "showText" prop is true', async () => {
    const wrapper = mount(RRate, {
      props: { showText: true }
    })

    // 模拟点击第 four 图标
    const fourthIcon = wrapper.findAll('.r-rate_item i')[3]
    await fourthIcon.trigger('click')

    // 断言文本是否显示
    expect(wrapper.find('.r-rate_text').exists()).toBe(true)
  })

  it('emits the selected icon index on click', async () => {
    const wrapper = mount(RRate)

    // 模拟点击第 two 图标
    const secondIcon = wrapper.findAll('.r-rate_item i')[1]
    await secondIcon.trigger('click')

    // 断言 "update:modelValue" 事件是否被触发
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()

    // 断言传递给事件处理程序的参数是否正确
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([2])
  })
})
