<script>
import TopBar from '@/components/TopBar.vue'
import Page from '@/components/Page.vue'
import TopicPage from '@/components/TopicPage.vue';
import AboutPage from './components/AboutPage.vue';
import Loading from './components/loading.vue';

export default {
  components:{
    TopBar,
    Page,
    TopicPage,
    AboutPage,
    Loading
},
  data() {
    return {
      is_init: true,
      colors:['#DAF5E7','#EBE8F1','#FDE7D0'],
      index: 0,
      scrollTime: 0,
      onscroll: false,
      UpOrDown: 'pageDown',
      texts:[
        ['总也走不清的校园<br>如今蒙眼也能找到边<br>春见白雪<br>原是樱花开满天',
          '珞珈山上一点点净白<br>东湖之滨一抹抹粉黛',
          '盛开的樱花<br>记忆中的家<br>明媚的阳光<br>是未来的方向',
          '教五前草坪<br>深深浅浅的绿<br>是冬日里别致的色彩<br>是不会褪去的生机<br>也是星星点点的希望',
          '武汉大学的美<br>美在自然和建筑的相映成趣<br>阳光亲吻树梢<br>叶影拥抱屋檐<br>让我们一起漫步校园<br>与这样的美景不期而遇吧！'],
        ['去樱顶看看吧<br>你会感受到珞珈山的葱茏<br>你会沉浸在老图书馆的静谧<br>你会看见老斋舍朱红色的窗<br>你会享受一段美好的时光',
          '珞珈山的景色<br>远近高低各不同<br>次第开放的花儿<br>来来往往的车流与人流<br>镜头环绕下的行政楼<br>每天都向我们柔声倾诉',
          '屋顶的孔雀蓝琉璃瓦<br>诉说历史<br>房檐下的篮球少年<br>描绘着青春<br>花窗回廊藏着似水年华<br>中西合璧始知相得益彰',
          '坐落于珞珈山腰处<br>隐藏在山林树丛间<br>漫步恩来小道<br>感受峥嵘岁月<br>俯瞰秀美山景<br>又是别般意趣',
          '我们路过行政楼~<br>登上这座年近九旬的大楼眺望<br>你会发现<br>仿佛拥有了武大的全世界<br>那山、那路、那楼、那操场<br>还有那人……'],
        ['书声琅琅入耳的背书区<br>奋笔疾书入目的自习区…<br>WHUers热爱读书的摸样<br>是珞珈山最美丽的风景线',
          '现场音乐会、滑板炫技、天文观望……<br>丰富多彩的活动让桂操洋溢着青春的气息<br>满怀热忱多样生长<br>与朋友共同追逐热爱<br>这就是WHUer的青春色彩',
          '近70年太长，长到银幕下故人不再<br>近70年太短，短到记忆里影象依旧<br>梦回梅操，雨中遇花，世间逢尔<br>那场梅操电影在记忆里花开不败<br>你是否还记得<br>银幕上的灯光闪烁<br>照亮了谁的脸？',
          '趁秋光尚晴朗<br>趁我们尚青春<br>在呐喊中挥洒汗水<br>在汗水中收获喜悦<br>让我们一起踏进活力四射的体育珈年华吧',
          '满载秋意的珞珈<br>一场WHUer的年度相约<br>那夜梅园操场歌声悠扬<br>少年意气风发<br>每一首歌，都饱含着真挚的情感<br>每一位歌者，都满怀热情<br>那夜的梅园因你们而闪闪发光'],
      ],
      im_src:[
        ['https://zero-2022.oss-cn-hangzhou.aliyuncs.com/img/1_nature/ying.avif','https://zero-2022.oss-cn-hangzhou.aliyuncs.com/img/1_nature/detail.avif',
        'https://zero-2022.oss-cn-hangzhou.aliyuncs.com/img/1_nature/pinkFlower.avif','https://zero-2022.oss-cn-hangzhou.aliyuncs.com/img/1_nature/garden.avif',
        'https://zero-2022.oss-cn-hangzhou.aliyuncs.com/img/1_nature/peng.avif'],
        ['https://zero-2022.oss-cn-hangzhou.aliyuncs.com/img/2_buildings/laozhaishe.avif','https://zero-2022.oss-cn-hangzhou.aliyuncs.com/img/2_buildings/xingzhenglou.avif',
        'https://zero-2022.oss-cn-hangzhou.aliyuncs.com/img/2_buildings/songqing.avif','https://zero-2022.oss-cn-hangzhou.aliyuncs.com/img/2_buildings/18.avif',
        'https://zero-2022.oss-cn-hangzhou.aliyuncs.com/img/2_buildings/ding.avif'],
        ['https://zero-2022.oss-cn-hangzhou.aliyuncs.com/img/3_activity/study.avif','https://zero-2022.oss-cn-hangzhou.aliyuncs.com/img/3_activity/sing.avif',
        'https://zero-2022.oss-cn-hangzhou.aliyuncs.com/img/3_activity/meicao.avif','https://zero-2022.oss-cn-hangzhou.aliyuncs.com/img/3_activity/sport.avif',
        'https://zero-2022.oss-cn-hangzhou.aliyuncs.com/img/3_activity/jinqiu.avif'],
        ['https://zero-2022.oss-cn-hangzhou.aliyuncs.com/img/0_home/flower.avif',"https://zero-2022.oss-cn-hangzhou.aliyuncs.com/img/0_home/museum.avif",
        "https://zero-2022.oss-cn-hangzhou.aliyuncs.com/img/0_home/circle.avif","https://zero-2022.oss-cn-hangzhou.aliyuncs.com/img/0_home/gongZhu.avif",
        "https://zero-2022.oss-cn-hangzhou.aliyuncs.com/img/0_home/ren.avif"]
      ]
    }
  },
  methods: {
    getImg(){
      let count = 0
      for (let i = 0;i < 4;i++){
        for (let j = 0;j < 5;j++){
          const img = new Image()
          img.src = this.im_src[i][j]
          img.onload = () => {
            count++;
            if(count==20){
              this.is_init = false
            }
          };
          img.onerror = () => {
            count++;
            if(count==20){
              this.is_init = false
            }
          };
        }
      }
    },
    changeIndex(index){
      if(index >= 0 && index <= 4){
        if(this.index > index){
          this.UpOrDown = 'pageUp'
        }else{
          this.UpOrDown = 'pageDown'
        }
        this.index = index;
      }else if(index > 4){
        this.$message({ type: 'warn', text: '已经到底了哦~' })
      }else if(index < 0){
        this.$message({ type: 'warn', text: '已经到顶了哦~' })
      }
    },
    mousedown(e) {
      this.originY = e.clientY
      this.mouseDownTime = new Date().getTime();
    },
    mouseup(e){
      if (new Date().getTime()-this.mouseDownTime > 100){ //如果拖动时间不足0.1s，不认为是拖动
        if (e.clientY - this.originY < -50){
          this.changeIndex(this.index + 1)
        }
        if(e.clientY - this.originY > 50){
          this.changeIndex(this.index - 1)
        }
      }
    },
    handleScroll(e){
      if(!this.is_init){
        if (new Date().getTime() - this.scrollTime < 250){
          return
        } // 距离上次滚动不足0.25s，则认为该次滚动仍是上次滚动
        this.scrollTime = new Date().getTime();
        if(e.deltaY>0){
          this.changeIndex(this.index + 1)
        }
        if(e.deltaY<0){
          this.changeIndex(this.index - 1)
        }
      }
    },
  },
  mounted(){
    this.getImg();
    window.addEventListener('mousewheel',this.handleScroll);
 },
}
</script>

<template>
  <Transition name="easeInOut"><Loading v-if="is_init"/></Transition>
  <!-- TopBar脱离了文档流 -->
  <TopBar @changeIndex="changeIndex($event)" :page_index = 'index'/>
  <div id="pages" @mousedown="mousedown" @mouseup="mouseup">
    <Transition :name="UpOrDown">
      <TopicPage class="page" v-if="index==0"/>
    </Transition>
    <Transition :name="UpOrDown">
      <Page class="page" :background_color='colors[0]' v-if="index==1" this_page='page1' :text="texts[0]" :img_src="im_src[0]"/>
    </Transition>
    <Transition :name="UpOrDown">
      <Page class="page" :background_color='colors[1]' v-if="index==2" this_page='page2' :text="texts[1]" :img_src="im_src[1]"/>
    </Transition>
    <Transition :name="UpOrDown">
      <Page class="page" :background_color='colors[2]' v-if="index==3" this_page='page3' :text="texts[2]" :img_src="im_src[2]"/>
    </Transition>
    <Transition :name="UpOrDown"><AboutPage class="page" v-if="index==4"/></Transition>
  </div>
</template>

<style scoped>
  #pages{
    position: relative;
    top: 0;
    left: 0;
    width:100%;
    min-width: 100%;
  }
  @font-face {
    font-family: 'huiwen';
    src: url('./assets/fonts/huiwen.ttf');
  }
  .pageDown-enter-from{
    transform: translateY(100%);
  }
  .pageDown-enter-active{
    transition: all 1s;
  }
  .pageDown-leave-active{
    transition: all 1s;
  }
  .pageDown-leave-to{
    transform: translateY(-100%);
  }
  .pageUp-enter-from{
    transform: translateY(-100%);
  }
  .pageUp-enter-active{
    transition: all 1s;
  }
  .pageUp-leave-active{
    transition: all 1s;
  }
  .pageUp-leave-to{
    transform: translateY(100%);
  }

  .easeInOut-enter-from{
    opacity: 0;
  }
  .easeInOut-enter-active{
    transition: all 1s;
  }
  .easeInOut-leave-active{
    transition: all 1s;
  }
  .easeInOut-leave-to{
    opacity: 0;
  }
</style>

 