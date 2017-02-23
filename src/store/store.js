import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		playlistToggle : false,
		showSearch : false,
		playing : false,
		nowsong : '',
		playlist :  [],
		audioProgss : '',
		playlistSet : new Set(), //用set结构给列表添加歌曲，避免重复
		tranStyle : 'downslide',
	},
	mutations:{
		increPlaylist (state) {
			state.playlistToggle = !state.playlistToggle
		},
		increTranStyle (state, style) {  //在这里控制相同路由在不同情况下时，切换的动画
			state.tranStyle = style
		},
		increPlaying (state) {
			state.playing = !state.playing
		},
		nowsong (state, song) { //立即播放某歌曲
			state.nowsong = song
		},
		addsong (state,song) {  //添加到播放列表
			if (!state.nowsong) {  // 如果为空则立即播放
				state.nowsong = song
			}
			state.playlistSet.add(song)
			state.playlist = Array.from(state.playlistSet)
			localStorage.playlist = JSON.stringify(state.playlist)
		},
		clearplaylist (state) {
			state.playlist = []
			state.playlistSet.clear()
			state.nowsong = null
			state.playing = false
			state.playlistToggle = false
			localStorage.removeItem('playlist')
		}
	},
	actions : {
		nextplay (context) { //打开下一首音乐
			const state = context.state,
				  songid = state.nowsong.songid
			if (state.playlist.length <= 1) {
				context.commit('nowsong', state.playlist[0])
			} else {
				state.playlist.forEach((item,index,arr)=>{
					if (item.songid === songid) {
						if (index != arr.length-1) {
							context.commit('nowsong',arr[index+1])
						} else {
							context.commit('nowsong',arr[0])
						}
					} 
				})
			}
		},
		preplay (context) {
			const state = context.state,
				  songid = state.nowsong.songid
			if (state.playlist.length <= 1) {
				context.commit('nowsong', state.playlist[0])
			} else {
				state.playlist.forEach((item,index,arr)=>{
					if (item.songid === songid) {
						if (index == 0) {
							context.commit('nowsong',arr[arr.length-1])
						} else {
							context.commit('nowsong',arr[index-1])
						}
					} 
				})
			}
		},
		deleplaylist (context, song) { //从播放列表取出
			context.state.playlistSet.delete(song)
			context.state.playlist = Array.from(context.state.playlistSet)
			if (song.songid == context.state.nowsong.songid) {
				context.state.nowsong = context.state.playlist[0]  //默认播放第一首,如果没有则清空
			}
			if (!context.state.playlist.length) {
				context.commit('clearplaylist')
			}
			localStorage.playlist = JSON.stringify(context.state.playlist)
		},
		increTranStyle (context, style) { //用于改变过渡样式
			return new Promise((resolve,reject) => {
				context.commit('increTranStyle',style)
				if(context.state.tranStyle === style) { //确保数据修改了才进行下一步
					resolve()
				}
			})
		},
	}

})