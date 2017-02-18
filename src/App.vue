<template>
  <div class="app">
    <router-view></router-view>
    <playlist></playlist>
    <search></search>  
  </div>
</template>
<script>
import API from 'api'
import playlist from 'components/playlist'
import search from 'components/search'
export default {
  name: 'app',
  components : {
    playlist,
    search
  },
  beforeMount () {
    this.setFontSize(640)//按照设计稿大小传入640
  },
  // mounted () {
    // console.log(a)
  // },
  methods : {
    setFontSize(designSize){
      let docEl = document.documentElement,
            resizeEvt = 'orientationchange' in window?'orientationchage':'resize',
            recalc = function(){
              const clientWidth = docEl.clientWidth;
              if (!clientWidth) {
                return
              } 
              docEl.style.fontSize = 20 * (clientWidth / designSize) + 'px';
            };
      if (!docEl.style.fontSize) {
        recalc()
      }
      window.addEventListener(resizeEvt,recalc,false);
    }
  }
}
</script>
<style src="assets/css/reset.css"></style>
<style src="assets/css/layout.css"></style>
<style src="assets/css/icon.scss" lang="scss"></style>
