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
            <li class="nav-btn-items">
                <span class="listline"></span>
                <span class="listline"></span>
                <span class="listline"></span>
            </li>
            <li class="nav-btn-items" @click="audioActived = !audioActived">
                <div class="audio-control">
                    <div :class="[audioActived?'audio-playing':'audio-pause']"></div>
                 </div>  
            </li>
            <li class="nav-btn-items">
                 <div class="audio-next">
                    <div class="next-trangle">
                        <div class="next-line"></div>
                        <div class="line-right"></div>
                    </div>
                </div>
            </li>
        </ul>
        <div class="playbar">
            
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    data () {
        return {
            audioActived : true
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
    .nav-btn-items .audio-control{
        border-radius:50%;
        width:2rem;
        height:2rem;
        border:2px solid #c62f2f;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .nav-btn-items .audio-control .audio-pause{
        width:0;
        height:0;
         border-width:0.4rem 0 0.4rem 0.6rem;
        margin-left: 0.2rem;
        border-style:solid;
        border-color:transparent transparent transparent #c62f2f;
    }
    .nav-btn-items .audio-control .audio-playing {
        width: 0.2rem;
        height: 1rem;
        border-width: 0 0.2rem 0 0.2rem;
        border-style: solid;
        border-color: transparent #c62f2f transparent #c62f2f;
    }
    .nav-btn-items .listline{
        display: block;
        width:0.2rem;
        height:0.2rem;
        border-width:0 1rem 0 0.2rem;
        border-style:solid;
        border-color:#c62f2f;
        margin-top: 0.4rem;
    }
    .nav-btn-items .listline:first-child{
        margin-top: 0;
    }
    .next-line:before,.next-line:after{
        content:'';
        display: block;
        position: absolute;
        width:1.1rem;
    }
    .next-line,.next-line:before,.next-line:after{
        height:2px;
        background-color: #c62f2f;
        /*transform: translate3d(0,0,1rem);*/
    }
    .next-trangle{
        width:2rem;
        height:2rem;
        display: flex;
        align-items: center;
        position:relative;
    }
    .next-line{
        width:1rem;
        transform: rotate(90deg);
    }
    .next-line:before{
        transform: rotate(-63deg);
        left: -0.3rem;
        top: -0.5rem;
    }
    .line-right{
        position: absolute;
        top: 0.5rem;
        left : 1.5rem;
        height: 1rem;
        width: 2px;
        background-color: #c62f2f;
    }
    .next-line:after{
        transform: rotate(63deg);
        left: 0.2rem;
        top: -0.5rem;
    }
    .playbar {
        position: absolute;
        bottom: -0.2rem;
        background-color: #c62f2f;
        width: 100vw;
        height: .2rem;
        left: 0;
    }
</style>