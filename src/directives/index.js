import Vue from 'vue'
Vue.directive('flowScroll',{ //用于控制滚动条
	update (el, binding) {
		if (binding.value) {
			document.documentElement.style.overflow = 'hidden'
			document.body.style.overflow = 'hidden'
		} else {
			document.documentElement.style.overflow = ''
			document.body.style.overflow = ''
		}
	}
})

Vue.directive('load',{ //用于加载loading
	update (el, binding) {
		if (binding.value && binding.value.length) {
			el.style.display = 'none'
		} else {
			el.style.display = 'block'
		}
	}
})