<template>
    <div class="playfooter">
        <div class="playmsg">
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
            <li class="nav-btn-items" @click="audioActived = !audioActived">
                <div class="audio-control">
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
        <div class="playbar">
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    name : 'playfooter',
    data () {
        return {
            audioActived : true
        }
    },
    methods : {
        showplaylist(){
            this.$store.commit('increPlaylist')
        }
    }
}
</script>
<style scoped>
    .playfooter {
        position:fixed;
        bottom:0.2rem;
        z-index:99;
        width:100%;
        background-color: rgba(255, 255, 255, 0.9);
        height:4rem;
        display: flex;
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
    .playbar {
        position: absolute;
        bottom: -0.2rem;
        background-color: #c62f2f;
        width: 10vw;
        height: .2rem;
        left: 0;
    }
</style>