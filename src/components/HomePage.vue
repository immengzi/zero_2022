<template>
  <div class="home-page">
    <el-row :gutter="15">
      <el-col :span="16">
        <div class="grid-content" id="home-image">
          <el-carousel ref="carousel1" indicator-position="outside" height="80vh" @change="handleCarouselChange">
            <el-carousel-item class="whu-img" v-for="item in imageList" :key="item.title">
              <img :src="item.src" alt="Carousel Image" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content" id="home-text">
          <div v-if="selectedItem">
            <div class="home-title">{{ selectedItem.title }}</div>
            <div class="home-txt">{{ selectedItem.description }}</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      imageList: [
        { src: 'https://img.immengzi.wiki/2023/12/9cdbda12ec43816727a46a81be77b29f.jpg', title: '星湖晚樱',
          description: '湖面平静，水光潋滟,廊亭曲折，画栋雕梁,细柳低垂，松柏繁密,水天一色，烟波浩渺,湖面的倒影诉说着珞珈的风云,星湖的美景亦荡漾在泛起的水波中' },
        { src: 'https://img.immengzi.wiki/2023/12/9cdbda12ec43816727a46a81be77b29f.jpg', title: 'Title 2',
          description: 'Description 2' },
        { src: 'https://img.immengzi.wiki/2023/12/9cdbda12ec43816727a46a81be77b29f.jpg', title: 'Title 3',
          description: 'Description 3' },
        { src: 'https://img.immengzi.wiki/2023/12/9cdbda12ec43816727a46a81be77b29f.jpg', title: 'Title 4',
          description: 'Description 4' },
        { src: 'https://img.immengzi.wiki/2023/12/9cdbda12ec43816727a46a81be77b29f.jpg', title: 'Title 5',
          description: 'Description 5' },
      ],
      selectedItem: null,
    }
  },
  created() {
    this.selectedItem = this.imageList[0];
  },
  methods: {
    handleCarouselChange(index) {
      this.selectedItem = this.imageList[index];
    },
  },
}
</script>

<style scoped>
.home-page {
  height: 100%;
  margin: 0 5vw;
}

.grid-content {
  border-radius: 4px;
  margin: 5vh 5vw;
  min-height: 60px;
}

.whu-img {
  width: auto;
}

#home-text {
  padding-top: 8vh;
}

.home-title {
  padding: 2vh 0;
  font-size: 8vh;
  font-weight: 550;
}

.home-txt {
  font-size: 2vh;
  line-height: 4vh;
  letter-spacing: 0.3vh;
}
</style>