<template>
<transition name="fade">
	<div class="mask" @click="close($event)" v-show="showlist">
		<transition name="downslide">
			<div class="playlist" v-show="showlist">
		       <header class="playlist-head"><span class="title">播放列表(23)</span><a href="javascript:;" class="clearList">清空</a></header>
		        <article class="playlist-art">
		         	<ul>
		             	<li class="list-li"><span class="songname">想你的旧名字</span><span class="songart">- 李克勤</span><span class="del-list">&#10006;</span></li>
		             	<li class="list-li"><span class="songname">想你的旧名字</span><span class="songart">- 李克勤</span><span class="del-list">&#10006;</span></li>
		             	<li class="list-li active"><span class="songname">想你的旧名字</span><span class="songart">- 李克勤</span><span class="del-list">&#10006;</span></li>
		            </ul>
		        </article>
		    </div>
	    </transition>	
    </div>
</transition>
</template>
<script>
import {mapState} from 'vuex'
export default {
	name : 'playlist',
	computed : {
		...mapState({
			showlist : state => state.playlistToggle
		})
	},
	methods:{
		close (e) {
			if (e.target === e.currentTarget) {
				this.$store.state.playlistToggle = false
			}
		}
	}
}
</script>
<style lang="scss">
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
		padding-left: 3rem;
	}
	.clearList {
		float: right;
		flex: 1;
		color:#bbb;
		text-align: center;
	}
}
.playlist-art {
	min-height: 50vh;
	.list-li {
		border-bottom: 1px solid #ccc;
		height:3rem;
		line-height: 3rem;
		.songname {
			color:#343434;
		}
		.songart{
			font-size:0.8rem;
			color:#868686;
			margin-left: 0.2rem;
		}
		.del-list {
			float: right;
			cursor: pointer;
			color:#868686;
		}
	}
	.list-li.active {
		.songname {
			color:#c62f2f;
		}
		.songart{
			color:#c62f2f;
		}
	}
}
</style>