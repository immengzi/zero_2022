<template>
  <div class="home-page">
    <el-row :gutter="15">
      <el-col :span="16">
        <div class="grid-content" id="home-image">
          <el-carousel ref="carousel1" indicator-position="outside" height="75vh" @change="handleCarouselChange">
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
            <div class="home-txt" style="white-space: pre-wrap;">{{ selectedItem.description }}</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      imageList: [
        { src: 'https://img.mengzi.li/2024/03/9cdbda12ec43816727a46a81be77b29f.jpg', title: '星湖晚樱',
          description: '湖面平静，水光潋滟\n廊亭曲折，画栋雕梁\n细柳低垂，松柏繁密\n水天一色，烟波浩渺\n湖面的倒影诉说着珞珈的风云\n星湖的美景亦荡漾在泛起的水波中' },
        { src: 'https://img.mengzi.li/2024/03/e91ff0aa0d35834594f4f3bd0e036ebe.jpg', title: '万林博物馆',
          description: '没有过多的颜色修饰\n万林只用极简的灰白两色\n用极简的线条组合\n向我们诠释艺术的奥秘\n俯视其身，万林全貌\n线条简约，质感硬朗\n似一本名为情调的书\n最有生命的张力' },
        { src: 'https://img.mengzi.li/2024/03/1879262a4f28da184b2e9ef6c4a34432.jpg', title: '公主教',
          description: '暮色撒下希望\n映照出教学楼的温柔\n与教学楼朝夕相处的你们\n没有留心观察过她的美~' },
        { src: 'https://img.mengzi.li/2024/03/beb2b8dcd28dd39729f365e624112918.JPG', title: '校园巴士',
          description: '生活在珞珈山下\n总要坐校巴的\n坐上校巴\n总要看看沿路风景的\n沿路风景很美\n总要拍几张照片的\n对~~~~~~~~~~~吧\n在每个武大人的脑海中\n总会占据一席之地' },
        { src: 'https://img.mengzi.li/2024/03/87b3e80c51ed8df353ca533308b5b419.png', title: '人文馆',
          description: '人文馆上的钟声已然晚了\n樱花却在这里开得早了\n似盛放的晚霞簇拥着屋顶\n那似曾相识的情愫暗涌\n或许是缘起梵高的画' },
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
  text-align: center;
}

.grid-content {
  width: 100%;
  border-radius: 4px;
  margin-top: 8vh;
  min-height: 60px;
}

.whu-img img {
  width: 88%;
  height: 100%;
  object-fit: cover;
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