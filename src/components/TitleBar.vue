<template>
    <div class="nav-bar">
      <img class="logo" src="../assets/img/logo.jpg" alt="logo"/>
      <el-button @click="$router.push('/')">首页</el-button>
      <el-button @click="$router.push('/nature')">自然风光</el-button>
      <el-button @click="$router.push('/architecture')">典雅建筑</el-button>
      <el-button @click="$router.push('/student')">学生活动</el-button>
      <el-button @click="$router.push('/about')">关于本站</el-button>
    </div>
</template>

<script>
export default {
  name: "TitleBar",
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