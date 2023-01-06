<template>
  <div class="topic_page">
    <div class="banner">
      <Transition name="Image"><img src="https://static.immengzi.wiki/flower.avif" alt="星湖晚樱" v-show="if_init&&index === 0"></Transition>
      <Transition name="Image"><img src="https://static.immengzi.wiki/museum.avif" alt="万林博物馆" v-show="if_init&&index === 1"></Transition>
      <Transition name="Image"><img src="https://static.immengzi.wiki/circle.avif" alt="小循环" v-show="if_init&&index === 2"></Transition>
      <Transition name="Image"><img src="https://static.immengzi.wiki/gongZhu.avif" alt="工主教" v-show="if_init&&index === 3"></Transition>
      <Transition name="Image"><img src="https://static.immengzi.wiki/ren.avif" alt="人文馆" v-show="if_init&&index === 4"></Transition>
      <Transition name="slowImage">
        <div class="shortImg" v-show="if_init">
          <img src="https://static.immengzi.wiki/flower.avif" alt="星湖晚樱" @click="changeIndex(0)">
          <img src="https://static.immengzi.wiki/museum.avif" alt="万林博物馆" @click="changeIndex(1)">
          <img src="https://static.immengzi.wiki/circle.avif" alt="小循环" @click="changeIndex(2)">
          <img src="https://static.immengzi.wiki/gongZhu.avif" alt="工主教" @click="changeIndex(3)">
          <img src="https://static.immengzi.wiki/ren.avif" alt="人文馆" @click="changeIndex(4)">
        </div>
      </Transition>
    </div>
    <img src="https://static.immengzi.wiki/wheel.jpg" alt="向下滚动" id="wheel">
    <span id="arrow">&#8595</span>
    <div class="home_text">
      <div class="home_text_title">
        <Transition name="bigLabel"><span v-show="if_init&&index === 0">星湖晚樱</span></Transition>
        <Transition name="bigLabel"><span v-show="if_init&&index === 1">万林博物馆</span></Transition>
        <Transition name="bigLabel"><span v-show="if_init&&index === 2">小循环</span></Transition>
        <Transition name="bigLabel"><span v-show="if_init&&index === 3">工主教</span></Transition>
        <Transition name="bigLabel"><span v-show="if_init&&index === 4">人文馆</span></Transition>
      </div>
      <div class="home_text_article">
        <Transition name="smallLabel"><span v-show="if_init&&index === 0">
          湖面平静，水光潋滟<br>
          廊亭曲折，画栋雕梁<br>
          细柳低垂，松柏繁密<br>
          水天一色，烟波浩渺<br>
          湖面的倒影诉说着珞珈的风云<br>
          星湖的美景亦荡漾在泛起的水波中
        </span></Transition>
        <Transition name="smallLabel"><span v-show="if_init&&index === 1">
          没有过多的颜色修饰<br>
          万林只用极简的灰白两色<br>
          用极简的线条组合<br>
          向我们诠释艺术的奥秘<br>
          俯视其身，万林全貌<br>
          线条简约，质感硬朗<br>
          似一本名为情调的书<br>
          最有生命的张力
        </span></Transition>
        <Transition name="smallLabel"><span v-show="if_init&&index === 2">
          生活在珞珈山下<br>
          总要坐校巴的<br>
          坐上校巴<br>
          总要看看沿路风景的<br>
          沿路风景很美<br>
          总要拍几张照片的<br>
          对~~~~~~~~~~~吧<br>
          在每个武大人的脑海中<br>
          大循环和小循环<br>
          总会占据一席之地
        </span></Transition>
        <Transition name="smallLabel"><span v-show="if_init&&index === 3">
          暮色撒下希望<br>
          映照出教学楼的温柔<br>
          与教学楼朝夕相处的你们<br>
          有没有留心观察过她的美~
        </span></Transition>
        <Transition name="smallLabel"><span v-show="if_init&&index === 4">
          人文馆上的钟声已然晚了<br>
          樱花却在这里开得早了<br>
          似盛放的晚霞簇拥着屋顶<br>
          那似曾相识的情愫暗涌<br>
          或许是缘起梵高的画
        </span></Transition>
      </div>
    </div>
  </div>
</template>
<script>
import {ref} from 'vue'
export default {
  data() {
    return {
      index: 0,
    }
  },
  created() {
    setTimeout(()=>{
      this.if_init = true;
    },500)
  },
  setup(){
    const if_init = ref(false);
    return {
      if_init,
    }
  },
  methods:{
    changeIndex(index){
      this.index = index
    }
  }
}

</script>
<style src="@/assets/css/TopicPage.css" scoped></style>