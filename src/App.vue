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
    this.setFontSize(640)//按照设计稿大小传入640
  },
  mounted () {
    // console.log(a)
  },
  methods : {
    setFontSize(designSize){
      let docEl = document.documentElement,
            resizeEvt = 'orientationchange' in window?'orientationchage':'resize',
            recalc = function(){
              const clientWidth = docEl.clientWidth;
              if (!clientWidth) {
                return
              }
              const sizeScale = Math.ceil(20 * (clientWidth / designSize)) 
              // console.log(sizeScale)
              docEl.style.fontSize = sizeScale%2 === 0 ?sizeScale : (sizeScale+1) + 'px';//尽量偶数是为了避免在浏览器产生渲染质量问题
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
<style>
.app{
  /*min-height:100vh;*/
}
</style>
