import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import RTable from '../index.vue' // 请根据你的文件路径修改

describe('RTable', () => {
  it('renders a table with the correct data', () => {
    const data = [
      { name: 'John', age: 30 },
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 35 }
    ]

    const wrapper = mount(RTable, {
      props: { data }
    })

    // 断言表头是否正确渲染
    const thElements = wrapper.findAll('th')
    expect(thElements).toHaveLength(2)
    expect(thElements[0].text()).toBe('name')
    expect(thElements[1].text()).toBe('age')

    // 断言数据是否正确渲染
    const tdElements = wrapper.findAll('td')
    expect(tdElements).toHaveLength(6)
    expect(tdElements[0].text()).toBe('John')
    expect(tdElements[1].text()).toBe('30')
    expect(tdElements[2].text()).toBe('Alice')
    expect(tdElements[3].text()).toBe('25')
    expect(tdElements[4].text()).toBe('Bob')
    expect(tdElements[5].text()).toBe('35')
  })

  it('applies stripe class to even rows when stripe is true', () => {
    const data = [
      { name: 'John', age: 30 },
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 35 }
    ]

    const wrapper = mount(RTable, {
      props: { data, stripe: true }
    })

    // 断言偶数行是否应用了背景色
    const trElements = wrapper.findAll('tr')
    expect(trElements[0].attributes('style')).toBeUndefined() // 第一行没有背景色
    expect(trElements[1].attributes('style')).toContain('background-color: #fafafa') // 第二行有背景色
    expect(trElements[2].attributes('style')).toBeUndefined() // 第三行没有背景色
  })

  it('applies border class when border is true', () => {
    const data = [
      { name: 'John', age: 30 },
      { name: 'Alice', age: 25 }
    ]

    const wrapper = mount(RTable, {
      props: { data, border: true }
    })

    // 断言是否应用了边框样式
    const tableElement = wrapper.find('.r-table')
    expect(tableElement.classes()).toContain('border')
  })

  it('sets the table height and maxHeight', () => {
    const data = [
      { name: 'John', age: 30 },
      { name: 'Alice', age: 25 }
    ]

    const wrapper = mount(RTable, {
      props: { data, height: 200, maxHeight: 400 }
    })

    // 断言高度和最大高度是否应用正确
    const tableElement = wrapper.find('.r-table')
    expect(tableElement.attributes('style')).toContain('height: 200px')
    expect(tableElement.attributes('style')).toContain('max-height: 400px')
  })
})
