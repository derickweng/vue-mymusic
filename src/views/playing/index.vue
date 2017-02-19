<template>
	<transition :name="transtyle">
         <div class="playing">
             <div class="play-warp">
                <header class="playing-head" @click="goback">
                    <a href="javascript:;" class="back-btn"><span class="icon-back"></span></a>
                    <div class="playing-title">
                        <p class="song-name">分生疏啊首发身份撒发射反反复复吩咐</p>
                        <p class="song-art">容祖儿</p>
                    </div>
                </header>
                <article class="playing-art">
                    <ul class="lysrc-items">
                        <li>不舍得啊沙发沙发</li>
                        <li>不舍得啊沙发沙发不舍得啊沙发沙发</li>
                        <li>不舍得啊沙发沙发不舍得啊沙发沙发不舍得啊沙发沙发</li>
                    </ul>
                </article>
                <footer class="playing-footer">
                    <div class="progess"></div>
                    <ul class="foot-btn">
                        <li>
                            <div class="icon-pre icon"></div>
                        </li>
                        <li>
                            <div class="icon-audio icon">
                                <div class="audio-pause"></div>
                            </div>
                        </li>
                        <li>
                            <div class="icon-next icon"></div>
                        </li>
                        <li class="icon-list-btn">
                            <div class="icon-list icon"></div>
                        </li>
                    </ul>
                </footer>
            </div>
            <div class="playbg"></div>
         </div>
    </transition>
</template>
<script>
import img from 'assets/img/1.jpg'
export default {
    name : 'playing',
    computed : {
        transtyle : function(){
            return this.$store.state.tranStyle
        }
    },
    methods : {
        goback () {
            this.$store.dispatch('increTranStyle','scale').then(()=>{
                this.$router.go(-1)
            })
        }
    }
}
</script>
<style lang="scss" scoped>
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
            margin-top:0.5rem;
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
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        flex-direction: column;
        .playing-art {
            flex:10;
            text-align: center;
            .lysrc-items {
                margin:4rem 0;
            }
        }
        .playing-head {
            width:100%;
            height:4rem;
            display:flex;
            flex:1;
        }
        .playing-footer {
            flex:3;
            .progess {
                width:90%;
                margin:0 auto;
                height:0.5rem;
                border-radius:5px;
                background:red;
            }
            .foot-btn {
                display: flex;
                padding-left:8rem;
                justify-content: center;
                align-items:center;
                height:100%;
                font-size:2rem;
                li {
                    flex:1;
                    .icon {
                        border-color:white;
                    }
                }
            }
            .icon-list-btn {
                height:4rem;
                padding-top:4rem;
            }
        }
     }
 }   
</style>