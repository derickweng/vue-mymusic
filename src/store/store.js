import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		playlistToggle : false,
		showSearch : false,
	},
	mutations:{
		increPlaylist (state) {
			state.playlistToggle = !state.playlistToggle
		},
		incresearch (state) {
			state.showSearch = !state.showSearch
		}
	}

})