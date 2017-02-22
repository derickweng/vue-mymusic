<template>
    <transition name="rightslide">
        <div class="listdetail" :class="[showHeader?'calcH':'maxH']">
            <header class="list-head">
                <div class="icon-wrap"  @click="backIndex">
                    <div class="icon-back"></div>
                </div>
            </header>
            <div class="list-img">
                <img :src="listImg">
            </div>
            <article class="list-art">
                <ol>
                     <li class="list-item">
                        <p class="list-num">1</p>
                        <p class="song">
                            <span class="song-name">还不是因为你长得不好了</span>
                            <span class="song-art">张杰-歌手<span>第5期</span></span>
                        </p>
                        <div class="icon-song-wrap" @click="toggleSet">
                            <div class="icon-song"></div>
                        </div>
                    </li>
                    <li class="list-item">
                        <p class="list-num">1</p>
                        <p class="song">
                            <span class="song-name">还不是因为你长得不好了</span>
                            <span class="song-art">张杰-歌手<span>第5期</span></span>
                        </p>
                        <div class="icon-song-wrap">
                            <div class="icon-song"></div>
                        </div>
                    </li>
                     <li class="list-item">
                        <p class="list-num">1</p>
                        <p class="song">
                            <span class="song-name">还不是因为你长得不好了</span>
                            <span class="song-art">张杰-歌手<span>第5期</span></span>
                        </p>
                        <div class="icon-song-wrap">
                            <div class="icon-song"></div>
                        </div>
                    </li>
                    <li class="list-item">
                        <p class="list-num">1</p>
                        <p class="song">
                            <span class="song-name">还不是因为你长得不好了</span>
                            <span class="song-art">张杰-歌手<span>第5期</span></span>
                        </p>
                        <div class="icon-song-wrap">
                            <div class="icon-song"></div>
                        </div>
                    </li>
                    <li class="list-item">
                        <p class="list-num">1</p>
                        <p class="song">
                            <span class="song-name">还不是因为你长得不好了</span>
                            <span class="song-art">张杰-歌手<span>第5期</span></span>
                        </p>
                        <div class="icon-song-wrap">
                            <div class="icon-song"></div>
                        </div>
                    </li>
                     <li class="list-item">
                        <p class="list-num">1</p>
                        <p class="song">
                            <span class="song-name">还不是因为你长得不好了</span>
                            <span class="song-art">张杰-歌手<span>第5期</span></span>
                        </p>
                        <div class="icon-song-wrap">
                            <div class="icon-song"></div>
                        </div>
                    </li>
                                        <li class="list-item">
                        <p class="list-num">1</p>
                        <p class="song">
                            <span class="song-name">还不是因为你长得不好了</span>
                            <span class="song-art">张杰-歌手<span>第5期</span></span>
                        </p>
                        <div class="icon-song-wrap">
                            <div class="icon-song"></div>
                        </div>
                    </li>
                     <li class="list-item">
                        <p class="list-num">1</p>
                        <p class="song">
                            <span class="song-name">还不是因为你长得不好了</span>
                            <span class="song-art">张杰-歌手<span>第5期</span></span>
                        </p>
                        <div class="icon-song-wrap">
                            <div class="icon-song"></div>
                        </div>
                    </li>
                                        <li class="list-item">
                        <p class="list-num">1</p>
                        <p class="song">
                            <span class="song-name">还不是因为你长得不好了</span>
                            <span class="song-art">张杰-歌手<span>第5期</span></span>
                        </p>
                        <div class="icon-song-wrap">
                            <div class="icon-song"></div>
                        </div>
                    </li>
                     <li class="list-item">
                        <p class="list-num">1</p>
                        <p class="song">
                            <span class="song-name">还不是因为你长得不好了</span>
                            <span class="song-art">张杰-歌手<span>第5期</span></span>
                        </p>
                        <div class="icon-song-wrap">
                            <div class="icon-song"></div>
                        </div>
                    </li>
                                        <li class="list-item">
                        <p class="list-num">1</p>
                        <p class="song">
                            <span class="song-name">还不是因为你长得不好了</span>
                            <span class="song-art">张杰-歌手<span>第5期</span></span>
                        </p>
                        <div class="icon-song-wrap">
                            <div class="icon-song"></div>
                        </div>
                    </li>
                     <li class="list-item">
                        <p class="list-num">1</p>
                        <p class="song">
                            <span class="song-name">还不是因为你长得不好了</span>
                            <span class="song-art">张杰-歌手<span>第5期</span></span>
                        </p>
                        <div class="icon-song-wrap">
                            <div class="icon-song"></div>
                        </div>
                    </li>
                                        <li class="list-item">
                        <p class="list-num">1</p>
                        <p class="song">
                            <span class="song-name">还不是因为你长得不好了</span>
                            <span class="song-art">张杰-歌手<span>第5期</span></span>
                        </p>
                        <div class="icon-song-wrap">
                            <div class="icon-song"></div>
                        </div>
                    </li>
                     <li class="list-item">
                        <p class="list-num">1</p>
                        <p class="song">
                            <span class="song-name">还不是因为你长得不好了</span>
                            <span class="song-art">张杰-歌手<span>第5期</span></span>
                        </p>
                        <div class="icon-song-wrap">
                            <div class="icon-song"></div>
                        </div>
                    </li>
                </ol>
            </article>
            <songset @toggleset="toggleSet" v-if="showsongset"></songset>
            <playfooter  @routego="routego" v-if="showHeader"></playfooter>
        </div>
    </transition>
</template>
<script>
import listImg from 'assets/img/2.jpg'
import playfooter from 'components/playfooter'
import songset from 'components/songset'
    export default {
        components : {
            playfooter,
            songset
        },
        data () {
            return {
                listImg : listImg,
                showHeader : false,
                showsongset : false,
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                setTimeout(()=> {
                    vm.showHeader = true
                },500)
            })
        },
        methods : {
           toggleSet () {
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
                console.log(this.$router)
                this.$router.push({
                    name : 'billboard'
                })
            }
        }
    }
</script>
<style lang="scss">
@import '~assets/css/theme.scss';
.calcH {
    height:calc(100vh - 4rem);
}
.maxH {
    height:100vh;
}
.listdetail {
    overflow: auto;
    top:0; /*解决路由切换时此页面向下一段距离*/
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
        .song-name,.song-art{
            display: block;
            height:2rem;
            
        }
        .song-name {
            line-height: 2.5rem;
        }
        .song-art {
            font-size:0.8rem;
            color: #aaa;
            line-height: 2rem;
        }
    }
}
</style>