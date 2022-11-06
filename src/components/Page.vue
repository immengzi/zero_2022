<template>
    <div class="page" :style="{background: background_color}">
        <table class="img_table">
            <tr>
                <td rowspan="2">
                    <Transition :name="this_page+'-td1'">
                        <div v-show="visiable" class="img_div" @mouseenter="labelShow[0]=true" @mouseleave="labelShow[0]=false">
                            <img :src="img_src[0]"> 
                            <Transition :name="this_page+'-td1'">
                                <div v-show="labelShow[0]" class="detail_label" v-html="text[0]"></div>
                            </Transition>
                        </div>
                    </Transition>
                </td>
                <td >
                    <Transition :name="this_page+'-td2'">
                        <div v-show="visiable" class="img_div" @mouseenter="labelShow[1]=true" @mouseleave="labelShow[1]=false">
                            <img :src="img_src[1]">
                            <Transition :name="this_page+'-td2'">
                                <div v-show="labelShow[1]" class="detail_label" v-html="text[1]"></div>
                            </Transition>
                        </div>
                    </Transition>
                </td>
                <td>
                    <Transition :name="this_page+'-td3'">
                        <div v-show="visiable" class="img_div" @mouseenter="labelShow[2]=true" @mouseleave="labelShow[2]=false">
                            <img :src="img_src[2]"> 
                            <Transition :name="this_page+'-td3'">
                                <div v-show="labelShow[2]" class="detail_label" v-html="text[2]"></div>
                            </Transition>
                        </div>
                    </Transition>
                </td>
            </tr>
            <tr>
                <td>
                    <Transition :name="this_page+'-td4'">
                        <div v-show="visiable" class="img_div" @mouseenter="labelShow[3]=true" @mouseleave="labelShow[3]=false">
                            <img :src="img_src[3]"> 
                            <Transition :name="this_page+'-td4'">
                                <div v-show="labelShow[3]" class="detail_label" v-html="text[3]"></div>
                            </Transition>
                        </div>
                    </Transition>
                </td>
                <td>
                    <Transition :name="this_page+'-td5'">
                        <div v-show="visiable" class="img_div" @mouseenter="labelShow[4]=true" @mouseleave="labelShow[4]=false">
                            <img :src="img_src[4]"> 
                            <Transition :name="this_page+'-td5'">
                                <div v-show="labelShow[4]" class="detail_label" v-html="text[4]"></div>
                            </Transition>
                        </div>
                    </Transition>
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    props:["background_color",'this_page','text','img_src'],
    data() {
        return {
            visiable:false,
            page: 'page',
            labelShow:[false,false,false,false,false]
        }
    },
    created() {
        setTimeout(()=>{
            this.visiable = true;
        },500)
    },
}
</script>
<style scoped>
    @import '@/assets/css/animation/animation1.css';
    @import '@/assets/css/animation/animation2.css';
    @import '@/assets/css/animation/animation3.css';
    .detail_label{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: space-around;
        width: 100%;
        height: 100%;
        line-height: 180%;
        font-family: 华文仿宋;
        font-size: 2.5vh;
        font-weight: 600;
        background-color: rgba(255,255,255,0.7);
    }
    .page{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        height: 100vh;
        z-index: 0;
        font-family: huiwen, sans-serif;
        font-weight: 400;
        color: black;
    }
    .img_div{
        position: relative;
        width: 100%;
        height: 100%;
        background-color: #C9E8FD;
        overflow: hidden;
    }
    .img_div>img{
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #C9E8FD;
        overflow: hidden;
        object-fit:cover;
        border-radius: 0.5vh;
    }
    .img_table{
        position: relative;
        top:10vh;
        margin:auto;
        height: 80vh;
        width: 80vw;
    }
</style>