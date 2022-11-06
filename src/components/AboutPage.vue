<template>
  <div class="page">
    <div class="aboutBox">
      <div class="topic">
        <div class="title">项目主题</div>
        <div class="text">
          本项目从“<b>自然风光</b>”、“<b>典雅建筑</b>”、“<b>学生活动</b>”三个角度切入，以<b>门户网站</b>的形式展现珞珈山下的美景。
        </div>
      </div>
      <div class="feature">
        <div class="title">网站特色</div>
        <div class="text">
          实现了拖拽翻页、非连续翻页等实用功能；完成了一定的 CSS 过渡和动画效果。<a href="https://github.com/immengzi/zero_2022#%E7%BD%91%E7%AB%99%E7%89%B9%E8%89%B2">查看更多></a>
        </div>
      </div>
      <div class="about">
        <div class="title">关于开发者</div>
        <div class="text">
          零杯壹组 - 甲方乙方 - 11 月 6 日<br>
          GitHub 地址：<a href="https://github.com/immengzi/zero_2022">https://github.com/immengzi/zero_2022</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.page {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 100vh;
  z-index: 0;
  font-family: 微软雅黑, sans-serif;
  font-weight: 400;
  color: white;
  background-color: #2B2B2B;
}
.aboutBox{
  position: relative;
  top: 15vh;
  margin: auto;
  padding: 5vh 5vw;
  width: 60%;
  height: 60%;
  /*background-color: pink;*/
}

.aboutBox>div{
  /*background-color: darkkhaki;*/
  height: 30%;
  margin-bottom: 4%;
  border-radius: 4vh;
  box-shadow: 0 4px 10px 0 rgba(255, 255, 255, 0.1);
}

.title{
  font-family: 微软雅黑, sans-serif;
  font-size: 4vh;
  font-weight: 600;
  text-align: center;
  padding-top: 3vh;
  padding-bottom: 3vh;
}

.text{
  font-family: 微软雅黑, sans-serif;
  font-size: 1.5vh;
  font-weight: 400;
  padding: 0 3vw;
  line-height: 2.2vh;
  text-align: center;
}

.text a{
  color: #4799eb;
}
</style>