import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import RButton from '../index.vue'

describe('RButton', () => {
  it('renders a default button', () => {
    const wrapper = mount(RButton)

    // 断言按钮是否渲染为默认样式
    expect(wrapper.classes()).toContain('r-button')
  })

  it('renders a primary button', () => {
    const wrapper = mount(RButton, {
      props: {
        type: 'primary'
      }
    })

    // 断言按钮是否渲染为主要按钮样式
    expect(wrapper.classes()).toContain('r-button-primary')
  })

  it('renders a plain button', () => {
    const wrapper = mount(RButton, {
      props: {
        plain: true
      }
    })

    // 断言按钮是否渲染为朴素按钮样式
    expect(wrapper.classes()).toContain('is-plain')
  })

  it('renders a round button', () => {
    const wrapper = mount(RButton, {
      props: {
        round: true
      }
    })

    // 断言按钮是否渲染为圆形按钮样式
    expect(wrapper.classes()).toContain('is-round')
  })

  it('renders a disabled button', () => {
    const wrapper = mount(RButton, {
      props: {
        disabled: true
      }
    })

    // 断言按钮是否渲染为禁用状态
    expect(wrapper.attributes('disabled')).toBe('disabled')
  })

  it('renders a button with custom width and height', () => {
    const wrapper = mount(RButton, {
      props: {
        width: 100,
        height: 50
      }
    })

    // 断言按钮是否具有自定义宽度和高度样式
    expect(wrapper.attributes('style')).toContain('width: 100px;')
    expect(wrapper.attributes('style')).toContain('height: 50px;')
  })
})
