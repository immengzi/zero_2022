<template>
  <CustomCard :items="cardItems"/>
</template>

<script>
import CustomCard from "@/components/CustomCard";
export default {
  name: "StudentPage",
  components: {CustomCard},
  data() {
    return {
      cardItems: [
        { src: 'https://img.immengzi.wiki/2023/12/9cdbda12ec43816727a46a81be77b29f.jpg', alt: 'img1', text: 'Text 1' },
        { src: 'https://img.immengzi.wiki/2023/12/9cdbda12ec43816727a46a81be77b29f.jpg', alt: 'img2', text: 'Text 2' },
        { src: 'https://img.immengzi.wiki/2023/12/9cdbda12ec43816727a46a81be77b29f.jpg', alt: 'img3', text: 'Text 3' },
        { src: 'https://img.immengzi.wiki/2023/12/9cdbda12ec43816727a46a81be77b29f.jpg', alt: 'img4', text: 'Text 4' },
        { src: 'https://img.immengzi.wiki/2023/12/9cdbda12ec43816727a46a81be77b29f.jpg', alt: 'img5', text: 'Text 5' }
      ]
    };
  }
}
</script>

<style scoped>

</style>