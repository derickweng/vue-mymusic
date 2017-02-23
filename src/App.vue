<template>
    <div class="app">
        <router-view></router-view>
        <audio autoplay :src="audioSrc" id="m-audio" v-if="audioSrc" v-show="false" v-play="playing">
        </audio>
    </div>
</template>
<script>
import API from 'api'
export default {
  name: 'app',
  beforeMount () {
    this.setFontSize(640)//按照设计稿大小传入640
  },
  mounted () {
   if (localStorage.playlist) {
       const playlist = JSON.parse(localStorage.playlist)
       this.$store.state.playlistSet = new Set([...playlist])
       this.$store.state.playlist = playlist
       this.$store.state.nowsong = playlist[0]
    }
  },
  computed : {
    audioSrc : function () {  //对当前播放的音频切换，放在顶层
      const song = this.$store.state.nowsong;
      let audioTimer;
      if (!song) {
        this.$store.state.playing = false
        clearInterval(audioTimer)
        return null
      }
      this.$store.state.playing = true
      audioTimer = setInterval(()=>{  //每秒获取进度
        let audio = document.getElementById('m-audio');
        if (audio) {
           this.$store.state.audioProgss = audio.currentTime/audio.duration*100+'%'
        }  else {
           clearInterval(audioTimer)
        }
      },1000)
      return `${API.url.getsong}${song.songid}.m4a?fromtag=46` //播放一首歌曲
    },
    playing : function () {
       return this.$store.state.playing
    },
  },
  directives : {
    play : {  //控制是否播放
      update : function(el,binding) {
        if (binding.value) {
          el.play()
        } else {
          el.pause()
        }
      }
    }
  },
  methods : {
    setFontSize(designSize){
      let docEl = document.documentElement,
            resizeEvent = 'orientationchange' in window?'orientationchage':'resize',
            reloadFont = function(){
              const clientWidth = docEl.clientWidth;
              if (!clientWidth) {
                return
              } 
              docEl.style.fontSize = 20 * (clientWidth / designSize) + 'px';
            };
      if (!docEl.style.fontSize) {
        reloadFont()
      }
      window.addEventListener(resizeEvent,reloadFont,false);
    }
  }
}
</script>
<style src="assets/css/reset.css"></style>
<style src="assets/css/layout.scss" lang="scss"></style>
<style src="assets/css/icon.scss" lang="scss"></style>
