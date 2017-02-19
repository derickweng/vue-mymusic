import Vue from 'vue'
Vue.directive('flowScroll',{
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