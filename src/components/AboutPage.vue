<template>
<div class="about-page">
  <div class="about-card" id="topic">
    <div class="card-title">{{ topicTitle }}</div>
    <div class="card-text">{{ topicText }}</div>
  </div>
  <div class="about-card" id="feature">
    <div class="card-title">{{ featureTitle }}</div>
    <div class="card-text">{{ featureText }}</div>
  </div>
  <div class="about-card" id="about">
    <div class="card-title">{{ aboutTitle }}</div>
    <div class="card-text">
      {{ aboutText }}
      <el-link type="primary" href="https://github.com/immengzi/zero_2022">zero_2022</el-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      topicTitle: '项目主题',
      topicText: '本项目从“自然风光”、“典雅建筑”、“学生活动”三个角度切入，以门户网站的形式展现珞珈山下的美景。',
      featureTitle: '网站特色',
      featureText: '这个网站真的没有一点特色啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊。',
      aboutTitle: '关于开发者',
      aboutText: 'GitHub 地址：',
    }
  },
}
</script>

<style scoped>
.about-page {
  background-color: #2B2B2B;
  color: white;
  height: 100vh;
  padding-top: 6vh;
}
.about-card {
  height: 20%;
  width: 60%;
  margin: 5vh auto;
  border-radius: 4vh;
  box-shadow: 0 4px 10px 0 rgba(255, 255, 255, 0.1);
}
.card-title {
  font-size: 4vh;
  font-weight: 600;
  padding-top: 3vh;
  padding-bottom: 3vh;
}
.card-text {
  font-size: 1.8vh;
  font-weight: 400;
  padding: 0 3vw;
}
</style>