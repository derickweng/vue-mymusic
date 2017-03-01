<template>
    <transition :name="transtyle">
        <div class="top-wrap">
            <div class="toplist">
                <header class="topheader">
                    <a href="javascript:;" class="search-ico-wrap">   
                        <span class="icon-search" @click="togglesearch"></span>
                    </a>
                </header>
                <vue-moblie-banner :bannerlist="bannerlist" :picurl="'picUrl'" :linkurl="'linkUrl'"></vue-moblie-banner>
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
            <playfooter @routego="routego" @toggleplaying="togglePlaying" @showplaylist="showplaylist(true)" @nextplay="nextplay" v-if="showHeader"></playfooter> 
            <playlist @playlisttoggle="showplaylist(false)"></playlist>
            <search :showsearch="showSearch" @togglesearch="togglesearch"></search>
        </div>
    </transition>
</template>
<script>
// import banner from './banner'
import playfooter from 'components/playfooter'
import playlist from 'components/playlist'
import search from './search'
import API from 'api'
import {mapState} from 'vuex'
export default{
    name : 'toplist',
    components : {
        // banner,
        playfooter,
        playlist,
        search
    },
    data (){
        return {
            nowType : {
                width:'',
                left : ''
            },
            showSearch : false,
            bannerlist : []
        }
    },
    computed : {
        ...mapState({
            transtyle : state => state.tranStyle,
            showHeader : state => state.nowsong
        })
    },
    mounted(){
        this.getbanner()
    },
    methods : {
        getbanner () { //获取banner
            API.getbanner(
                {
                    g_tk:5381,
                    uin:0,
                    format:'jsonp',
                    inCharset:'utf-8',
                    outCharset:'utf-8',
                    notice:0,
                    platform:'h5',
                    needNewCode:'1',
                    _:new Date().getTime(),
                    callback: 'jsonpCallback'
                }
            ).then(res=>{
                this.bannerlist = res.data['slider']
            })
        },
        routego(name) {
            this.$store.dispatch('increTranStyle','downslide').then(() => {
                this.$router.push({
                    name : name
                })
            })
        },
        togglePlaying () {
            this.$store.commit('increPlaying')
        },
        nextplay () {
            this.$store.dispatch('nextplay')
        },
        showplaylist (bool) {
            this.$store.state.playlistToggle = bool
        },
        togglesearch () {
            this.showSearch = !this.showSearch
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
@import '~assets/css/theme.scss';
.topheader{
    width: 100%;
    height:4.1rem;
    background-color: $themeColor;
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
.icon-search {
    color:white;
}
.toplist{
    background-color:#fdfdfd;
    padding-top:4rem;
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
    transition: left .3s;
    background-color:  $themeColor;
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