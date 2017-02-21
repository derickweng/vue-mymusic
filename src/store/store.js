import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		playlistToggle : false,
		showSearch : false,
		playing : false,
		tranStyle : 'downslide',
	},
	mutations:{
		increPlaylist (state) {
			state.playlistToggle = !state.playlistToggle
		},
		incresearch (state) {
			state.showSearch = !state.showSearch
		},
		increTranStyle (state,style) {  //在这里控制相同路由在不同情况下时，切换的动画
			state.tranStyle = style
		},
		increPlaying (state) {
			state.playing = !state.playing
		}
	},
	actions : {
		increTranStyle (context,style) { 
			return new Promise((resolve,reject) => {
				context.commit('increTranStyle',style)
				if(context.state.tranStyle === style) { //确保数据修改了才进行下一步
					resolve()
				}
			})
		}
	}

})