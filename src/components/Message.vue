<template>
  <!-- vue动画：从上滑入且淡出 -->
  <Transition name="down">
    <!-- style 绑定的是样式 -->
    <div class="message" :style="style[type]" v-show="visiable">
      <!-- 不同提示图标会变 -->
      <span><img :src="style[type].icon" class="i">{{text}}</span>
    </div>
  </Transition>
</template>

<script>
import { onMounted, ref } from 'vue'
import warnImg from '@/assets/warn.png'
import errorImg from '@/assets/error.png'
import okImg from '@/assets/ok.png'
export default {
  name: 'Message',
  props: {
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      // warn 警告  error 错误  success 成功
      default: 'warn'
    }
  },
  setup () {
    // 定义一个对象，包含三种情况的样式，对象key就是类型字符串
    const style = {
      warn: {
        icon:"https://static.immengzi.wiki/warn.png",
        color: '#E6A23C',
        backgroundColor: 'rgb(253, 246, 236)',
        borderColor: 'rgb(250, 236, 216)'
      },
      error: {
        icon: "https://static.immengzi.wiki/error.png",
        color: '#F56C6C',
        backgroundColor: 'rgb(254, 240, 240)',
        borderColor: 'rgb(253, 226, 226)'
      },
      success: {
        icon: "https://static.immengzi.wiki/ok.png",
        color: '#67C23A',
        backgroundColor: 'rgb(240, 249, 235)',
        borderColor: 'rgb(225, 243, 216)'
      }
    }
    // 定义一个数据控制显示隐藏，默认是隐藏，组件挂载完毕显示
    const visiable = ref(false)
    onMounted(() => { // 需调用钩子函数，等dom渲染完成后，再进行赋值，如果在setup中直接赋值，则会被直接渲染成true
      visiable.value = true
    })
    return { style, visiable }
  }
}
</script>

<style scoped lang="less">
.down {
  &-enter {
    &-from {
      transform: translate3d(0,-75px,0);
      opacity: 0;
    }
    &-active {
      transition: all 0.5s;
    }
    &-to {
      transform: none;
      opacity: 1;
    }
  }
}
.message {
  font-family: huiwen, sans-serif;
  width: 12vw;
  height: 6vh;
  position: fixed;
  z-index: 9999;
  left: 45%;
  top: 6vh;
  line-height: 6vh;
  border: 3px solid #e4e4e4;
  border-radius: 20px;
  text-align: center;
  .i{
    position: relative;
    width: 2.5vh;
    height: 2.5vh;
    top: 0.3vh;
  }
}
</style>
