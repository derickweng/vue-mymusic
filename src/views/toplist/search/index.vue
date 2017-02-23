<template>
	<div>
		<div  class="search-head" v-flowScroll="showsearch">
			<transition name="fade">
				<span  v-if="showsearch" class="search-inp-wrap">
					<input type="text" class="searchtext" v-focus="showsearch" v-model="searchtext">
				</span>
			</transition>
		</div>
		<transition name="downslide">
				<div class="search-list-warp" v-if="showsearch"  @click="toggleSearch($event)">
					<ol class="searchlist">
						<li class="search-items" v-for="(list,index) in hostlist" @click="palySong(list)"><span>{{index+1}}.</span><span class="songname">{{list.k||list.name}}</span><span class="hot-res" v-if="list.n">热度:{{list.n}}</span></li>	
					</ol>	
				</div>
		</transition>
	</div>
</template>
<script type="text/javascript">
import API from 'api'
export default {
	props : {
		showsearch : {
			require : true
		}
	},
	data () {
		return {
			hostlist : [],
			searchtext : ''
		}
	},
	directives : {
		focus : {
			update (el, binding) {
				if (binding.value) {
					el.focus()
				}
			}
		},
	},
	watch : {
		showsearch : function(val) {
			if (val && !this.hostlist.length) {
				this.gethot()
			}	
		},
		searchtext : function(val) {
			if (val) {
				this.search(val)
			}
		}
	},
	methods : {
		gethot () {
			const params = {
				g_tk:5381,
				loginUin:0,
				hostUin:0,
				format:'jsonp',
				inCharset:'utf-8',
				outCharset:'utf-8',
				notice:0,
				platform:'yqq',
				needNewCode:0,
				callback: 'jsonpCallback'
			}
			API.gethotkey(params).then(res => {
				this.hostlist = res.data.hotkey
			})
		},
		search (key) {
			const params = {
				is_xml:0,
				format:'jsonp',
				key:key,
				g_tk:5381,
				loginUin:0,
				hostUin:0,
				inCharset:'utf8',
				outCharset:'utf-8',
				notice:0,
				platform:'yqq',
				needNewCode:0,
				callback:'jsonpCallback'
			}
			API.search(params).then(res => {
				if (res.data.song && res.data.song.itemlist) {
					this.hostlist = res.data.song.itemlist
				}
			})
		},
		palySong (song) {
			console.log(song)
			if (song.id) {
				song = {
					singer : [{
						name :song.singer
					}],
					songid : song.id,
					songname : song.name
				}
				// this.$store.state.nowsong = song
				this.$store.commit('nowsong',song)
				this.$store.commit('addsong',song)
			}
		},
		toggleSearch (e) {
			if (e.target === e.currentTarget) { //当然也可以直接使用vue的click.self
				this.$emit('togglesearch')
			}
		}
	}
}
</script>
<style lang="scss">
.search-head {
	position: fixed;
	top:0;
	left:5rem;
	height:4rem;
	z-index: 101;
	.search-inp-wrap{
		border-bottom:1px solid white;
		display: inline-block;
		height: 59%;
    	margin-top: 1rem;
	}
	.searchtext {
		width:18rem;
		height: 100%;
		line-height: 100%;
		font-size: 1.2rem;
		outline: none;
		background: none;
		border:none;
		color:white;
		text-indent: 0.5em;
	}
}
.search-items {
	border-bottom: 1px solid white;
	height:3rem;
	line-height: 3rem;
	padding-left: 3rem;
	.songname {
		display: inline-block;
		max-width:21rem;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
		vertical-align:top;
	}
	.hot-res {
		float: right;
		margin-right:4rem;
		font-size:0.8rem;
	}
}
.search-list-warp {
	position: fixed;
	bottom:0;
	z-index: 100;
	overflow: auto;
	height: calc(100% - 4rem);
	background-color: rgba(0,0,0,0.8);
	width: 100%;
	color: white;
}
</style>