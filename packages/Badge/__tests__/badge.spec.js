import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import RBadge from '../index.vue'

describe('RBadge', () => {
  it('renders a badge with a value', () => {
    const wrapper = mount(RBadge, {
      props: {
        value: 42
      },
      slots: {
        default: 'Content'
      }
    })

    // 断言徽章是否渲染了内容和值
    expect(wrapper.text()).toContain('Content')
    expect(wrapper.text()).toContain('42')
  })

  it('renders a badge with a dot', () => {
    const wrapper = mount(RBadge, {
      props: {
        dot: true
      },
      slots: {
        default: 'Content'
      }
    })

    // 断言徽章是否渲染了内容和点
    expect(wrapper.text()).toContain('Content')
    expect(wrapper.find('.dot').exists()).toBe(true)
  })

  it('hides the badge when hidden is true', () => {
    const wrapper = mount(RBadge, {
      props: {
        hidden: true
      },
      slots: {
        default: 'Content'
      }
    })

    // 断言徽章是否被隐藏
    expect(wrapper.find('.badge').exists()).toBe(false)
  })

  it('renders a badge with custom type', () => {
    const wrapper = mount(RBadge, {
      props: {
        type: 'success'
      },
      slots: {
        default: 'Content'
      }
    })

    // 断言徽章是否渲染了指定类型的样式
    expect(wrapper.find('.badge').classes()).toContain('success')
  })

  it('renders a badge with a maximum value', () => {
    const wrapper = mount(RBadge, {
      props: {
        value: 100,
        max: 50
      },
      slots: {
        default: 'Content'
      }
    })

    // 断言徽章是否渲染了最大值加号
    expect(wrapper.text()).toContain('50+')
  })
})
