<template>
    <div class="top-wrap">
       <div class="toplist">
            <header class="topheader">
                <a href="javascript:;" class="search-ico-wrap">   
                    <sapn class="icon-search" @click="stateSearch"></span>
                </a>
            </header>
            <banner :bannerlist="bannerlist"></banner>
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
import API from 'api'
import img from 'assets/img/1.jpg'
import {mapState} from 'vuex'
export default{
    name : 'toplist',
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
            bannerlist : [
                {
                    url : img
                }, 
                {
                    url : img
                }, 
                {
                    url : img
                }
            ]
        }
    },
    computed : {
        ...mapState({
            showSearch : state => state.showSearch
        })
    },
    mounted(){
        // API.getLyc().then(res=>{
        //     console.log(res.data.data)
        // }).catch(res=>{
        //     console.log(res)
        // })
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
        stateSearch () {
            this.$store.commit('incresearch')
        },
        listActive (e) {
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
<style scoped lang="scss">
.topheader{
    width: 100%;
    height:4rem;
    background-color: #c62f2f;
    position: fixed;
    top:0;
    z-index: 99;
    box-shadow: 1px 2px 1px rgba(0,0,0,0.3);
    .search-ico-wrap{
        float: right;
        padding: 0.9rem;
        transform: scale(1.5);
    }
}
.toplist{
    background-color:#fdfdfd;
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