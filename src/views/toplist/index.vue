<template>
    <div class="top-wrap">
       <div class="toplist">
            <div class="icon-search">
            </div>
            <banner></banner>
            <div class="list-wrap">
                <ul class="list-type"   @click="listActive($event)">
                    <li class="list-type-item" index="0">排行榜</li>
                    <li class="list-type-item"  index="1">歌单</li>
                    <li class="list-type-item"  index="2">个性推荐</li>
                    <li class="list-type-item"  index="3">主播电台</li>
                </ul>
                <div class="list-bar" :style="nowType"></div>
            </div>
            <router-view></router-view>
        </div>
        <playfooter></playfooter>  
    </div>
</template>
<script>
import banner from './banner'
import playfooter from 'components/playfooter'
export default{
    components : {
        banner,
        playfooter
    },
    data (){
        return {
            nowType : {
                width:'',
                left : ''
            },
        }
    },
    // directives : {
        // active : {
            // bind(el,binding){
            //     const tartWidth = window.getComputedStyle(el).width
            //     binding = Object.assign({
            //         width : tartWidth,
            //         left : el.getAttribute('index')* parseInt(tartWidth)+ 'px'
            //     })       
            //     console.log(binding)         
            // }
        // }
    // },
    methods : {
        listActive(e){
            const eTart = e.target;
            if (~eTart.className.search('list-type-item')) {
                const tartWidth = window.getComputedStyle(eTart).width
                this.nowType = {
                    width : tartWidth,
                    left : e.target.getAttribute('index')* parseInt(tartWidth)+ 'px'
                }
            }
        }
    }
}
</script>
<style scoped>
.toplist{
    background-color:#fdfdfd;
}
.icon-search {
    
}
.icon-search:before,.icon-search:after{
    content:'';
}
.icon-search:before{
    border-radius: 50%;
    border:1rem solid #c62f2f;
    width:2rem;
    height:2rem;
}
.list-type{
    display: flex;
    flex-direction: row;
    background-color: white;
    justify-content: center;
    align-items: center;
}
.list-wrap{
    position: relative;
}
.list-bar {
    position: absolute;
    height:2px;
    left:0;
    width:6.5rem;
    transition: all .3s;
    background-color: #c62f2f;
}
.list-type-item{
    flex:1;
    border-bottom:2px solid transparent;
    text-align: center;
    line-height: 2rem;
    cursor: pointer;
    height:2rem;
    font-size:0.8rem;
}
</style>