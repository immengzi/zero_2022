import Message from './messageJs'

export default {
  install (app) {
    app.config.globalProperties.$message = Message// 原型函数
  }
}
