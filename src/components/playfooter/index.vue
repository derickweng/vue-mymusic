<template>
        <div class="footer-warp">
            <div class="playfooter">
                <div class="playmsg"  @click="goPlaying">
                    <p class="song-name">
                        全世界东北话
                    </p>
                    <p class="song-artist">
                        DBbosy组合
                    </p>
                </div>
                <ul class="nav-button">
                    <li class="nav-btn-items" @click="showplaylist">
                        <span class="icon-list"></span>
                    </li>
                    <li class="nav-btn-items" @click="togglePlaying">
                        <div class="icon-audio">
                            <div :class="[audioActived?'audio-playing':'audio-pause']"></div>
                        </div>  
                    </li>
                    <li class="nav-btn-items">
                        <div class="audio-next">
                                <div class="next-line"></div>
                                <div class="line-right"></div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="playbar">
            </div>
        </div>
</template>
<script type="text/javascript">
export default {
    name : 'playfooter',
    data () {
        return {
            // audioActived : true
        }
    },
    computed : {
        audioActived : function() {
            return  this.$store.state.playing
        }
    },
    methods : {
        goPlaying () {
            this.$emit('routego','playing')
        },
        togglePlaying () {
            this.$store.commit('increPlaying')
        },
        showplaylist () {
            this.$store.commit('increPlaylist')
        },
    }
}
</script>
<style scoped lang="scss">
@import '~assets/css/theme.scss';
    .footer-warp {
        position:fixed;
        bottom:0;
        z-index:99;
        width:100%;
        background-color: rgba(255, 255, 255, 0.9);
    }
    .playfooter {
        display: flex;
        height:4rem;
    }
    .playmsg{
        flex:3;
        padding:.5rem 0 0 1rem;
    }
    .song-artist {
        color:#9c9c9c;
        font-size: .5rem;
        margin-top: .5rem;
    }
    .nav-button {
        flex:2;
        display: flex;
    }
    .nav-button .nav-btn-items{
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .icon-audio {
        color:$themeColor;
    }
    .icon-list {
        color:$themeColor;
    }
    .audio-next {
        color:$themeColor;
    }
    .playbar {
        background-color: $themeColor;
        width: 10%;
        max-width:100%;
        overflow:hidden;
        height: .2rem;
    }
</style>