<template>
  <div class="grid-container">
    <div class="big-card" @mouseenter="textsVisible[0]=true" @mouseleave="textsVisible[0]=false">
      <div v-if="textsVisible[0]" class="text-card">{{ items[0].text }}</div>
      <img v-else :src="items[0].src" :alt="items[0].alt" />
    </div>

    <div class="small-cards-column">
      <div class="small-card" @mouseenter="textsVisible[1]=true" @mouseleave="textsVisible[1]=false">
        <div v-if="textsVisible[1]" class="text-card">{{ items[1].text }}</div>
        <img v-else :src="items[1].src" :alt="items[1].alt" />
      </div>

      <div class="small-card" @mouseenter="textsVisible[2]=true" @mouseleave="textsVisible[2]=false">
        <div v-if="textsVisible[2]" class="text-card">{{ items[2].text }}</div>
        <img v-else :src="items[2].src" :alt="items[2].alt" />
      </div>
    </div>

    <div class="small-cards-column">
      <div class="small-card" @mouseenter="textsVisible[3]=true" @mouseleave="textsVisible[3]=false">
        <div v-if="textsVisible[3]" class="text-card">{{ items[3].text }}</div>
        <img v-else :src="items[3].src" :alt="items[3].alt" />
      </div>

      <div class="small-card" @mouseenter="textsVisible[4]=true" @mouseleave="textsVisible[4]=false">
        <div v-if="textsVisible[4]" class="text-card">{{ items[4].text }}</div>
        <img v-else :src="items[4].src" :alt="items[4].alt" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomCard",
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      textsVisible: [false, false, false, false, false],
    }
  }
}
</script>

<style scoped>
.grid-container {
  margin: 5vh 5vw;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
}

.grid-container img {
  height: 100%;
  width: 100%;
  overflow: hidden;
  object-fit:cover;
}

.big-card {
  grid-column: span 1;
  height: 100%;
  width: 100%;
  background-color: #C9E8FD;
}

.small-cards-column {
  display: flex;
  flex-direction: column;
}

.small-card {
  height: 100%;
  width: 100%;
  background-color: #C9E8FD;
  margin-bottom: 10px;
}

.small-card:last-child {
  margin-bottom: 0;
}

.text-card {
  font-size: 2.5vh;
}
</style>