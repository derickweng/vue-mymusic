<template>
<transition name="fade">
	<div class="mask" @click="close($event)" v-show="showlist && playlist.length ">
		<transition name="downslide">
			<div class="playlist" v-show="showlist" v-flowScroll="showlist">
			   <header class="playlist-head"><span class="title" :style="{'padding-left':candele?'3rem':'0'}">播放列表({{playlist.length}})</span><a href="javascript:;" class="clearList" @click="clearlist"  v-if="candele">清空</a></header>
		         	<ul  class="playlist-art">
						 <li class="list-li" v-for="song in playlist" @click="playinlist(song)" :class="{'active':nowsong.songid === song.songid}">
						 	<span class="songname">{{song.songname}}-</span>
							 <span class="songart"><span v-for="singer in song.singer">{{singer.name}} </span></span>
							 <span class="del-list" @click.stop="deleplaylist(song)" v-if="candele">&#10006;</span>
						 </li>
		            </ul>
		    </div>
	    </transition>	
    </div>
</transition>
</template>
<script>
import {mapState} from 'vuex'
export default {
	name : 'playlist',
	props : {
		candele : {
			require : true,
			default : function(){
				return true
			}
		}
	},
	computed : {
		...mapState({
			showlist : state => state.playlistToggle,
			playlist : state =>  state.playlist,
			nowsong : state => state.nowsong
		})
	},
	methods:{
		playinlist (song) {
			this.$store.commit('nowsong',song)
		},
		deleplaylist (song) {
			this.$store.dispatch('deleplaylist',song)
		},
		clearlist () {
			this.$store.commit('clearplaylist')
		},
		close (e) {
			if (e.target === e.currentTarget) {
				this.$emit('playlisttoggle')
			}
		}
	}
}
</script>
<style lang="scss">
@import '~assets/css/theme.scss';
.mask {
	position: fixed;
	width:100%;
	height: 100%;
	top:0;
	background-color: rgba(0,0,0,0.5);
	z-index: 100;
}
.playlist{
	position: absolute;
	bottom: 0;
	width:calc(100% - 2rem);
	height:50%;
	background-color: #fbfbfb;
	padding:0.5rem 1rem;
}
.playlist-head {
	height:2rem;
	line-height: 2rem;
	display: flex;
	display:-webkit-flex;
	.title {
		flex:5;
		text-align: center;
		color:black;
	}
	.clearList {
		float: right;
		flex: 1;
		color:#bbb;
		text-align: center;
	}
}
.playlist-art {
	height:90%;
	overflow: auto;
	.list-li {
		border-bottom: 1px solid #ccc;
		height:3rem;
		line-height: 3rem;
		.songname {
			color:#343434;
			max-width: 20rem;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			display: inline-block;
			vertical-align: top;
		}
		.songart{
			font-size:0.8rem;
			color:#868686;
			margin-left: 0.2rem;
			max-width: 6rem;
			display: inline-block;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		.del-list {
			float: right;
			cursor: pointer;
			color: #868686;
			display: inline-block;
			width: 3rem;
			text-align: center;
		}
	}
	.list-li.active {
		.songname {
			color:$themeColor;
		}
		.songart{
			color:$themeColor;
		}
	}
}
</style>