<template>
  <CustomCard :items="cardItems"/>
</template>

<script>
import CustomCard from "@/components/CustomCard";
export default {
  name: "ArchitecturePage",
  components: {CustomCard},
  data() {
    return {
      cardItems: [
        { src: 'https://img.immengzi.wiki/2023/12/9cdbda12ec43816727a46a81be77b29f.jpg', alt: 'img1', text: '总也走不清的校园,如今蒙眼也能找到边,春见白雪,原是樱花开满天' },
        { src: 'https://img.immengzi.wiki/2023/12/9cdbda12ec43816727a46a81be77b29f.jpg', alt: 'img2', text: '总也走不清的校园,如今蒙眼也能找到边,春见白雪,原是樱花开满天' },
        { src: 'https://img.immengzi.wiki/2023/12/9cdbda12ec43816727a46a81be77b29f.jpg', alt: 'img3', text: '总也走不清的校园,如今蒙眼也能找到边,春见白雪,原是樱花开满天' },
        { src: 'https://img.immengzi.wiki/2023/12/9cdbda12ec43816727a46a81be77b29f.jpg', alt: 'img4', text: '总也走不清的校园,如今蒙眼也能找到边,春见白雪,原是樱花开满天' },
        { src: 'https://img.immengzi.wiki/2023/12/9cdbda12ec43816727a46a81be77b29f.jpg', alt: 'img5', text: '总也走不清的校园,如今蒙眼也能找到边,春见白雪,原是樱花开满天' }
      ]
    };
  }
}
</script>

<style scoped>

</style>