<!--播放界面-->
<template>
	<transition :name="transtyle">
         <div class="playing">
             <div class="play-warp">
                <header class="playing-head" @click="goback">
                    <a href="javascript:;" class="back-btn"><span class="icon-back"></span></a>
                    <div class="playing-title">
                        <p class="song-name">{{playsong.songname}}</p>
                        <p class="song-art"><span v-for="item in playsong.singer">{{item.name}}</span></p>
                    </div>
                </header>
                <article class="playing-art">
                    <ul class="lysrc-items">
                        <li v-for="item in lysrc">{{item}}</li>
                    </ul>
                </article>
                <footer class="playing-footer">
                    <div class="progess"  :style="{'width':progess}"></div>
                    <ul class="foot-btn">
                        <li @click="preplay">
                            <div class="icon-pre icon"></div>
                        </li>
                        <li @click="toggleAudio">
                            <div class="icon-audio icon">
                                <div :class="[hasplaying?'audio-playing':'audio-pause']"></div>
                            </div>
                        </li>
                        <li @click="nextplay">
                            <div class="icon-next icon"></div>
                        </li>
                        <li class="icon-list-btn"   @click="showplaylist(true)">
                            <div class="icon-list icon"></div>
                        </li>
                    </ul>
                </footer>
            </div>
            <div class="playbg"></div>
            <playlist @playlisttoggle="showplaylist(false)" :candele="false"></playlist>
         </div>
    </transition>
</template>
<script>
import API from 'api'
import playlist from 'components/playlist'
import base64 from 'utils/base64.js'
export default {
    name : 'playing',
    components : {
        playlist
    },
    data () {
        return {
            lysrc : ''
        }
    },
    computed : {
        transtyle : function(){
            return this.$store.state.tranStyle
        },
        hasplaying : function(){
            return this.$store.state.playing
        },
        playsong : function() {
            this.getlyc(this.$store.state.nowsong.songid)
            return this.$store.state.nowsong
        },
        progess : function() {
            return this.$store.state.audioProgss
        }
    },
    methods : {
        getlyc (id) {
           let url = `${API.url.getlyc}/${id}`
           API.seturl(url,{
               callback : 'callback'
           }).then(res=>{
               this.lysrc = base64.utf8output(res.lyric).split('[').map((item)=>{
                   return item.replace(/(.*)\]/g,'')
               })
           }).catch(()=>{
               this.lysrc = ['这首歌无歌词~']
           })
        },
        goback () {
            this.$store.dispatch('increTranStyle','rightslide').then(() => {
                this.$router.push({
                    name : 'billboard'
                })
            })
        },
        nextplay () {
            this.$store.dispatch('nextplay')
        },
        preplay () {
            this.$store.dispatch('preplay')
        },
        toggleAudio () {
            this.$store.commit('increPlaying')
        },
        showplaylist (bool) {
            this.$store.state.playlistToggle = bool
        },
    }
}
</script>
<style lang="scss" scoped>
@import '~assets/css/theme.scss';
.playbg{
    width:100%;
    height:100%;
     /*background: url('../../assets/img/1.jpg') no-repeat fixed 100%;*/
    /*filter:blur(5px);
     -webkit-filter:blur(5px);
     -ms-filter:blur(5px);
     -moz-filter:blur(5px);
     -o-filter:blur(5px);*/
     pointer-events: none;
     position:absolute;
     top:0;
}
 .playing {
     width:100vw;
     height:100vh;
     overflow: hidden;
     color:white;
     a{
         color:white;
     }
     .icon-back {
       text-align: center;
      }
     .back-btn{
         flex:1;
         text-align: center;
         line-height: 3rem;
     }
     .playing-title {
         flex:4;
         height:100%;
         .song-name {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            margin-top:1rem;
         }
         .song-art {
           text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            margin-top:0.4rem;
            text-indent: 0.2rem;
            color: #d0d0d0;
         }
     }
      .play-warp {
        width:100%;
        height:100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        flex-direction: column;
        .playing-art {
            flex:10;
            text-align: center;
             overflow: auto;
            .lysrc-items {
                margin:4rem 0;
            }
            .lysrc-items>li {
                margin : 1rem 0;
            }
        }
        .playing-head {
            width:100%;
            height:4rem;
            display:flex;
            flex:2;
        }
     }
     .playing-footer {
            flex:3;
            .progess {
                width:0%;
                height:0.5rem;
                border-radius:5px;
                background:$themeColor;
            }
            .foot-btn {
                display: flex;
                padding-left:6rem;
                justify-content: center;
                align-items:center;
                height:100%;
                font-size:2rem;
                li {
                    flex:2;
                    cursor: pointer;
                    .icon {
                        color:white;
                        margin:0 auto;
                    }
                }
            }
            .icon-list-btn {
                height:4rem;
                padding-top:4rem;
            }
     }
     .icon-back {
         top:0.9em;
     }
 }   
</style>