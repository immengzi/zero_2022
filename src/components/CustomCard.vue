<template>
  <div class="card">
    <div class="content" @mouseenter="isTextVisible=true" @mouseleave="isTextVisible=false">
      <transition name="fade">
        <div v-if="isTextVisible" class="text-card">{{ item.text }}</div>
      </transition>
      <img :alt="item.alt" :src="item.src"/>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      isTextVisible: false,
    };
  },
};
</script>

<style>
.card {
  position: relative;
  height: 100%;
  width: 100%;
  margin-bottom: 10px;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.card img, .text-card {
  height: 100%;
  width: 100%;
  object-fit: cover;
  overflow: hidden;
}

.text-card {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5vh;
  background-color: rgba(255, 255, 255, 0.7);
}

</style>