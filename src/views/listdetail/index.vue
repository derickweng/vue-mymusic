<template>
    <transition name="rightslide">
        <div class="listdetail">
            <header class="list-head">
                <div class="icon-back" @click="backIndex"></div>
            </header>
            <div class="list-img"></div>
            <article class="list-art">
                <ol>
                    <li class="list-item">
                        <p class="list-num">1</p>
                        <p class="song">
                            <p class="song-name">还不是因为你长得不好了</p>
                            <p class="song-art">张杰-歌手<span>第5期</span></p>
                        </p>
                        <div class="icon-song">
                            
                        </div>
                    </li>
                    <li></li>
                    <li></li>
                </ol>
            </article>
        </div>
    </transition>
</template>
<script>
    export default {
        methods : {
            backIndex () {
                this.$router.push({
                    name : 'billboard'
                })
            }
        }
    }
</script>
<style lang="scss">
@import '~assets/css/theme.scss';
.listdetail {
    /*width:100vw;
    height:100vh;*/
    /*overflow: hidden;*/
    .list-head {
        height:3rem;
        position:fixed;
        top:0;
        z-index:99;
    }
    .list-img {
        height:6rem;
    }
    .list-item {
       height:3rem;
       display: flex;
       .list-num {
           flex:1;
       }
       .song {

       }
       .icon-song {
           flex:1;
       }
    }
}
</style>