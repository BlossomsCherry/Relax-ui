import { h, render } from 'vue'
import rConfirm from './index.vue'

const divNode = h('div', { class: 'r-confirm-container' })
render(divNode, typeof document !== 'undefined' ? document.body : '')
const container = divNode.el

const Confirm = ({
  title,
  text,
  showIcon,
  icon,
  confirmText,
  cancelText,
  confirmShow,
  cancelShow,
  closeShow,
  customClass
}) => {
  if (typeof document !== 'undefined') {
    document.body.style = 'overflow:hidden'
  }

  return new Promise((resolve, reject) => {
    const confirmCallback = () => {
      resolve()
      render(null, container)
      if (typeof document !== 'undefined') {
        document.body.style = 'overflow:initial' //用于将元素的滚动行为恢复到其初始值，从而取消对 overflow 属性的设置。
      }
    }

    const cancelCallback = () => {
      reject()
      render(null, container)
      if (typeof document !== 'undefined') {
        document.body.style = 'overflow:initial'
      }
    }

    const closeCallBack = () => {
      render(null, container)
      if (typeof document !== 'undefined') {
        document.body.style = 'overflow:initial'
      }
    }

    const VNode = h(rConfirm, {
      title,
      text,
      icon,
      showIcon,
      confirmText,
      cancelText,
      confirmShow,
      cancelShow,
      closeShow,
      customClass,
      confirmCallback,
      cancelCallback,
      closeCallBack
    })
    render(VNode, container)
  })
}
export default Confirm
