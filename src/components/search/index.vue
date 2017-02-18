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
				<ol class="searchlist" v-show="showSearch" @click="toggleSearch($event)">
					<!-- <ol class="search-ol"> -->
						<li class="search-items"><span>1.</span><span>摆渡人</span><span>热度:18910</span></li>	
					<!-- </ol> -->
				</ol>	
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
			update (el,binding) {
					if (binding.value) {
						el.focus()
					}
			}
		}
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
		width:21rem;
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
}
.searchlist{
	position: fixed;
	bottom:0;
	z-index: 100;
	width: 100%;
	height: calc(100% - 4rem);
	background-color: rgba(0,0,0,0.3);
	color: white;
}
</style>