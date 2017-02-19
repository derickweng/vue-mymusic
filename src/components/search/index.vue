<template>
	<div>
		<div  class="search-head">
			<transition name="fade">
				<span  v-show="showSearch" class="search-inp-wrap">
					<input type="text" class="searchtext" v-focus="showSearch">
				</span>
			</transition>
		</div>
		<transition name="downslide">
				<div class="search-list-warp" v-show="showSearch"  @click="toggleSearch($event)" v-flowScroll="showSearch">
					<ol class="searchlist">
						<!-- <ol class="search-ol"> -->
							<li class="search-items"><span>1.</span><span class="songname">摆渡人</span><span class="hot-res">热度:18910</span></li>	
							<li class="search-items"><span>1.</span><span class="songname">摆渡人</span><span class="hot-res">热度:18910</span></li>	
							<li class="search-items"><span>1.</span><span class="songname">摆渡人</span><span class="hot-res">热度:18910</span></li>	
							<li class="search-items"><span>1.</span><span class="songname">摆渡人</span><span class="hot-res">热度:18910</span></li>	
							<li class="search-items"><span>1.</span><span class="songname">摆渡人</span><span class="hot-res">热度:18910</span></li>	
							<li class="search-items"><span>1.</span><span class="songname">摆渡人</span><span class="hot-res">热度:18910</span></li>	
							<li class="search-items"><span>1.</span><span class="songname">摆渡人</span><span class="hot-res">热度:18910</span></li>	
							<li class="search-items"><span>1.</span><span class="songname">摆渡人</span><span class="hot-res">热度:18910</span></li>	
							<li class="search-items"><span>1.</span><span class="songname">摆渡人</span><span class="hot-res">热度:18910</span></li>	
							<li class="search-items"><span>1.</span><span class="songname">摆渡人</span><span class="hot-res">热度:18910</span></li>	
							<li class="search-items"><span>1.</span><span class="songname">摆渡人</span><span class="hot-res">热度:18910</span></li>	
							<li class="search-items"><span>1.</span><span class="songname">摆渡人</span><span class="hot-res">热度:18910</span></li>	
							<li class="search-items"><span>1.</span><span class="songname">摆渡人</span><span class="hot-res">热度:18910</span></li>	
							<li class="search-items"><span>1.</span><span class="songname">摆渡人</span><span class="hot-res">热度:18910</span></li>	
							<li class="search-items"><span>1.</span><span class="songname">摆渡人</span><span class="hot-res">热度:18910</span></li>	
							<li class="search-items"><span>1.</span><span class="songname">摆渡人</span><span class="hot-res">热度:18910</span></li>	
							<li class="search-items"><span>1.</span><span class="songname">摆渡人</span><span class="hot-res">热度:18910</span></li>	
							<li class="search-items"><span>1.</span><span class="songname">摆渡人</span><span class="hot-res">热度:18910</span></li>	
							<li class="search-items"><span>1.</span><span class="songname">摆渡人</span><span class="hot-res">热度:18910</span></li>	
							<li class="search-items"><span>1.</span><span class="songname">摆渡人</span><span class="hot-res">热度:18910</span></li>	
							<li class="search-items"><span>1.</span><span class="songname">摆渡人</span><span class="hot-res">热度:18910</span></li>	
							<li class="search-items"><span>1.</span><span class="songname">摆渡人</span><span class="hot-res">热度:18910</span></li>	
							<li class="search-items"><span>1.</span><span class="songname">摆渡人</span><span class="hot-res">热度:18910</span></li>	
							<li class="search-items"><span>1.</span><span class="songname">摆渡人</span><span class="hot-res">热度:18910</span></li>	
							<li class="search-items"><span>1.</span><span class="songname">摆渡人</span><span class="hot-res">热度:18910</span></li>	
							<li class="search-items"><span>1.</span><span class="songname">摆渡人</span><span class="hot-res">热度:18910</span></li>	
							<li class="search-items"><span>1.</span><span class="songname">摆渡人</span><span class="hot-res">热度:18910</span></li>	
							<li class="search-items"><span>1.</span><span class="songname">摆渡人</span><span class="hot-res">热度:18910</span></li>	
							<li class="search-items"><span>1.</span><span class="songname">摆渡人</span><span class="hot-res">热度:18910</span></li>	
							<li class="search-items"><span>1.</span><span class="songname">摆渡人</span><span class="hot-res">热度:18910</span></li>	
							<li class="search-items"><span>1.</span><span class="songname">摆渡人</span><span class="hot-res">热度:18910</span></li>	
							<li class="search-items"><span>1.</span><span class="songname">摆渡人</span><span class="hot-res">热度:18910</span></li>	
						<!-- </ol> -->
					</ol>	
				</div>
		</transition>
	</div>
</template>
<script type="text/javascript">
export default {
	data () {
		return {
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
	computed : {
		showSearch : function() {
			return this.$store.state.showSearch
		}
	},
	methods : {
		toggleSearch (e) {
			if (e.target === e.currentTarget) {
				this.$store.commit('incresearch')
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