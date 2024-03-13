<template>
<CustomCard :items="cardItems"/>
</template>

<script>
import CustomCard from "@/components/CustomCard";
export default {
  name: "NaturePage",
  components: {CustomCard},
  data() {
    return {
      cardItems: [
        { src: 'https://img.mengzi.li/2024/03/52beda1cacd9fa2df7910e34f1bf8776.JPG', alt: 'img1', text: 'Text 1' },
        { src: 'https://img.mengzi.li/2024/03/a974163ddc7a3ee028c4828dcc3b16b1.jpg', alt: 'img2', text: 'Text 2' },
        { src: 'https://img.mengzi.li/2024/03/13a7f60bb1a2c1d6d56c0842dc9becef.jpg', alt: 'img3', text: 'Text 3' },
        { src: 'https://img.mengzi.li/2024/03/d01dc8a0a60d06a74a2519322e55a0a7.JPG', alt: 'img4', text: 'Text 4' },
        { src: 'https://img.mengzi.li/2024/03/1291d312f53364cb2f07cccfcb85dd5c.JPG', alt: 'img5', text: 'Text 5' }
      ]
    };
  }
}
</script>

<style scoped>

</style>
