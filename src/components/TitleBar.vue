<template>
    <div class="nav-bar">
      <img class="logo" src="../assets/img/logo.jpg" alt="logo"/>
      <el-button @click="switchPage('./home')">首页</el-button>
      <el-button @click="switchPage('./nature')">自然风光</el-button>
      <el-button @click="switchPage('./architecture')">典雅建筑</el-button>
      <el-button @click="switchPage('./student')">学生活动</el-button>
      <el-button @click="switchPage('./about')">关于本站</el-button>
    </div>
</template>

<script>
export default {
  name: "TitleBar",
  inject: ['controlRouterView'],
  methods: {
    switchPage(route) {
      this.controlRouterView(route);
    },
  },
}
</script>

<style scoped>
.nav-bar {
  position: fixed;
  display: flex;
  align-items: center;
  height: 7vh;
  min-height: 60px;
  width: 100%;
  text-align: left;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.logo{
  margin: 0.4vh 10vw;
  height: 5vh;
  min-height: 45px;
}
</style>