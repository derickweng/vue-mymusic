import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		playlistToggle : false,
		showSearch : false,
		tranStyle : 'downslide',
	},
	mutations:{
		increPlaylist (state) {
			state.playlistToggle = !state.playlistToggle
		},
		incresearch (state) {
			state.showSearch = !state.showSearch
		},
		increTranStyle (state,style) {
			state.tranStyle = style
		}
	},
	actions : {
		increTranStyle (context,style) {
			return new Promise((resolve,reject) => {
				context.commit('increTranStyle',style)
				if(context.state.tranStyle === style) {
					resolve()
				}
			})
		}
	}

})