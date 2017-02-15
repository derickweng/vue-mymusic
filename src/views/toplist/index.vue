<template>
    <div class="top-wrap">
       <div class="toplist">
            <banner></banner>
            <div class="list-wrap">
                <ul class="list-type"   @click="listActive($event)">
                    <li class="list-type-item">排行榜</li>
                    <li class="list-type-item">歌单</li>
                    <li class="list-type-item">个性推荐</li>
                    <li class="list-type-item">主播电台</li>
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
    methods : {
        listActive(e){
            if (~e.target.className.search('list-type-item')) {
                console.log(e.currentTarget)
                this.nowType = e.target.style.width
            }
        }
    }
}
</script>
<style scoped>
.top-wrap{
  overflow: auto;
  height: calc(100vh - 4rem);
}
.toplist{
  background-color:#fdfdfd;
  /*height: calc(100vh - 4rem); //4rem为footer的高*/
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
    left:0;
    height:2px;
    background-color: #c62f2f;
}
.list-type-item{
    flex:1;
    border-bottom:2px solid transparent;
    text-align: center;
    line-height: 2rem;
    cursor: pointer;
    height:2rem;
}
.list-type-item.active{
    /*border-bottom:2px solid #c62f2f;*/
}
</style>