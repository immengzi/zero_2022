<template>
    <div id="topBar">
        <img src="@/assets/logo.jpg" class="logo">
        <transition-group>
            <div id="topBarLabel">
                <div v-for="(item, index) in names" :key="index" class="topBarSpan" :class="{ 'on_hover' :index==page_index}">
                    <a @click="on_click(index)">{{ item }}</a>
                </div>
            </div>
        </transition-group>
    </div>   
</template>
<script>
export default {
    props: ['page_index'],
    data() {
        return {
            names:['首页','自然风光','典雅建筑','学生活动','关于本站'],
            visiable: false
        }
    },
    methods:{
        on_click(index){
            this.$emit('changeIndex',index)
        }
    }
}
</script>
<style>

    #topBar{
        height: 7vh;
        background: rgb(255, 255, 255);
        position:fixed;
        left: 0;
        right: 0;
        top: 0;
        /* 确保导航栏最后绘制，图层最高，10只是尽量大 */
        z-index: 1;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
    .logo{
        position: absolute;
        float: left;
        top: 0.5vh;
        left: 13vw;
        width: auto;
        height: auto;
        max-width: 90%;
        max-height: 90%;
    }
    #topBarLabel{
        position: absolute;
        left: 58%;
        right: 0;
        height: 100%;
        top: 1vh;
        font-family: huiwen, sans-serif;
        color: #676B73;
    }
    .topBarSpan{
        line-height: 5vh;
        float: left;
        font-size: 1.5vh;
        width: 15%;
        text-align: center;
        transition: font-size 250ms;
    }
    .topBarSpan:hover{
        font-size: 2vh;
        cursor: pointer;
        color: black;
        font-weight: bold;

    }
    .on_hover{
        font-size: 2vh;
        cursor: pointer;
        color: black;
        font-weight: bold;
    }
</style>


