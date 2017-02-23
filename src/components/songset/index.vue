<template>
   <transition name="fade">
         <div class="song-add" @click.self="toggleSet">
           <transition name="downslide">
              <div class="song-set" v-if="togglelist">
                  <div class="song-head">歌曲：{{targetsong.data.songname}}</div>
                <ul class="set-items">
                    <li class="set-item" @click="playImm">立即播放</li>
                    <li class="set-item" @click="addPlayList">加入到播放列表</li>
                </ul>
               </div>
            </transition>
          </div>
   </transition>
</template>
<script>
export default {
    name : 'songset',
    props : {
        targetsong : {
            require : true
        }
    },
    data () {
        return {
            togglelist : false,
        }
    },
    mounted () {
        this.togglelist = true
    },
    methods : {
        toggleSet () {
            this.$emit('toggleset')
        },
        playImm () {
            this.$emit('playimm')
        },
        addPlayList () {
            this.$emit('addplaylist')
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~assets/css/theme.scss';
.song-add {
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    z-index:1000;
    background-color:rgba(0,0,0,0.5);
    .song-head {
        height:2rem;
        color:#aaa;
        line-height:2rem;
        padding-left:1rem;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }
    .song-set {
        width:100%;
        background-color:#fbfbfb;
        position:absolute;
        bottom:0;
    }
    .set-items {
        text-align:center;
    }
    .set-item {
        height:5rem;
        line-height: 5rem;
    }
}
</style>