<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import API from 'api'
export default {
  name: 'app',
  mounted () {
    // console.log(a)
  }
}
</script>
<style src="assets/reset.css"></style>
<style>
.app{
  min-height:100vh;
}
</style>
