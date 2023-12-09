<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <div class="common-layout">
    <el-container>
      <el-header height="68">
        <TitleBar/>
      </el-header>
      <el-main>
        <AboutPage/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import AboutPage from "@/components/AboutPage";
import TitleBar from "@/components/TitleBar";

export default {
  name: 'App',
  components: {
    TitleBar,
    AboutPage,
  }
}
</script>

<style>
#app {
  font-family: "JetBrains Mono", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
