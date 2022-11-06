import { createVNode, render } from 'vue'
import Message from './Message.vue'

// 准备dom容器
const div = document.createElement('div')
div.setAttribute('class', 'message-container')
document.body.appendChild(div)
// 定时器标识
let timer = null

export default ({ type, text }) => {
  const vnode = createVNode(Message, { type, text }) //创建虚拟组件
  render(vnode, div) // 开始渲染
  clearTimeout(timer) 
  timer = setTimeout(() => {
    render(null, div)  // 1秒后将组件从div上移出
  }, 1000)
}
