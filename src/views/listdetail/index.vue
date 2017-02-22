<template>
    <transition name="rightslide">
        <div class="listdetail" :class="[showHeader?'calcH':'maxH']">
            <header class="list-head">
                <div class="icon-wrap"  @click="backIndex">
                    <div class="icon-back"></div>
                </div>
                <span class="list-title"> {{topinfo.ListName}}</span>
            </header>
            <div class="list-img">
                <img :src="topinfo.pic_v12">
            </div>
            <article class="list-art">
                <ol>
                     <li class="list-item" v-for="(item,index) in songlist">
                        <p class="list-num">{{index+1}}</p>
                        <p class="song">
                            <span class="song-name">{{item.data.songname}}</span>
                            <span class="song-art">
                                <span v-for="singer in item.data.singer">{{singer.name}}</span>
                                <span class="hot">热度:{{item.cur_count}}</span>
                            </span>
                        </p>
                        <div class="icon-song-wrap" @click="toggleSet(item)">
                            <div class="icon-song"></div>
                        </div>
                    </li>
                </ol>
            </article>
            <div class="loading" v-load="songlist">
                <img :src="blockload" class="loading_img">
            </div>
            <songset @toggleset="toggleSet" v-if="showsongset" :targetsong="targetSong"></songset>
            <playfooter  @routego="routego" v-if="showHeader"></playfooter>
        </div>
    </transition>
</template>
<script>
import blockload from 'assets/img/block-load.gif'
import playfooter from 'components/playfooter'
import songset from 'components/songset'
import API from 'api'
    export default {
        components : {
            playfooter,
            songset
        },
        data () {
            return {
                blockload : blockload,
                topinfo : {},
                songlist : [],
                targetSong : {},
                showHeader : false,
                showsongset : false,
            }
        },
        mounted () {
            this.getListDetail(this.$route.params.id)
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                setTimeout(()=> {
                    vm.showHeader = true
                },500)
            })
        },
        methods : {
           getListDetail(id){
               const params = {
                   topid : id,
                   format : 'jsonp',
                   inCharset : 'utf-8',
                   outCharset : 'utf-8',
                   notice : 0,
                   platform : 'yqq',
                   needNewCode : '0',
                   callback : 'jsonpCallback',
               }
               API.getlistDetail(params).then(res=>{
                    this.topinfo = res.topinfo
                    this.songlist = res.songlist
               })
           },
           toggleSet (item) {
               if (item) {
                   this.targetSong = item
               }
               this.showsongset = !this.showsongset
           },
           routego (name) {
                this.$store.dispatch('increTranStyle','downslide').then(() => {
                    this.$router.push({
                        name : name
                    })
                })
            },
            backIndex () {
                this.$router.push({
                    name : 'billboard'
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
@import '~assets/css/theme.scss';
.loading {
	position:fixed;
	width:100%;
	height:100%;
	background-color:black;
	z-index:1000;
	top:0;
	.loading_img {
		width:50%;
		position:absolute;
		top:20%;
		left:25%;
	}
}
.calcH {
    height:calc(100vh - 4rem);
}
.maxH {
    height:100vh;
}
.listdetail {
    overflow: auto;
    top:0; /*解决路由切换时此页面向下一段距离*/
    .hot {
        float:right;
    }
    .list-title {
        display: inline-block;
        vertical-align: top;
    }
     .icon-wrap {
         display:inline-block;
     }
    .icon-back {
        margin:2rem 1rem;
    }
    .list-head {
        height:4rem;
        width:100%;
        position:fixed;
        top:0;
        z-index:99;
        color:white;
        line-height: 4rem;
        background-color:rgba(0, 0,0, 0.2)
    }
    .list-img {
        height:22rem;
        width:100%;
        img {
            width:100%;
            height:100%;
        }
    }
    .list-item {
       height:4rem;
       display: flex;
    }
    .list-num {
        flex:1;
        text-align: center;
        line-height: 4rem;
    }
    .icon-song-wrap {
        flex:1;
        color:#d4d4d4;
        font-size:1rem;
        text-align:center;
        line-height: 4rem;
        border-bottom:1px solid #f9f5f5;
        .icon-song{
          display: inline-block;
        }
    }
    .song {
        flex:5;
        border-bottom:1px solid #f9f5f5;
        cursor: pointer;
        overflow : hidden;
        .song-name,.song-art{
            display: block;
            height:2rem;
        }
        .song-name {
            line-height: 2.5rem;
            text-overflow:ellipsis;
            white-space:nowrap;
            overflow : hidden;
        }
        .song-art {
            font-size:0.8rem;
            color: #aaa;
            line-height: 2rem;
            overflow : hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
        }
    }
}
</style>