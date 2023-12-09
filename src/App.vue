<template>
  <div id="app">
  <div class="common-layout">
    <el-container>
      <el-header>
        <TitleBar :controlRouterView="controlRouterView" />
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
  </div>
</template>

<script>
import TitleBar from "@/components/TitleBar";
import router from "@/router";

export default {
  name: 'App',
  components: {
    TitleBar,
  },
  provide() {
    return {
      controlRouterView: this.controlRouterView,
    };
  },
  methods: {
    controlRouterView(route) {
      router.push(route);
    },
  },
}
</script>

<style>
#app {
  font-family: Huiwen-mincho, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header.el-header {
  --el-header-padding: 0;
}
main.el-main {
  --el-main-padding: 0;
}
</style>
