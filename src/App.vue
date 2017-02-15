<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>
<script>
import API from 'api'
export default {
  name: 'app',
  beforeMount () {
    this.setFontSize()
  },
  mounted () {
    // console.log(a)
  },
  methods : {
    setFontSize(){
      let docEl = document.documentElement,
            resizeEvt = 'orientationchange' in window?'orientationchage':'resize',
            recalc = function(){
              const clientWidth = docEl.clientWidth;
              if (!clientWidth) {
                return
              }
              docEl.style.fontSize = Math.ceil(20 * (clientWidth / 640)) + 'px';
            };
      recalc()  
      window.addEventListener(resizeEvt,recalc,false);
    }
  }
}
</script>
<style src="assets/css/reset.css"></style>
<style>
.app{
  min-height:100vh;
}
</style>
