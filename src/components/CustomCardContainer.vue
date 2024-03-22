<template>
  <div class="grid-container">
    <CustomCard v-for="(item, index) in items" :key="index" :item="item" />
  </div>
</template>

<script>
import CustomCard from "@/components/CustomCard";
export default {
  components: {
    CustomCard,
  },
  name: "CustomCardContainer",
  props: {
    items: {
      type: Array,
      required: true
    }
  },
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

</style>