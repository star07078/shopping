import request from './request'
import router from './router'
import {imgUrl} from './config'

export default {
	install(Vue) {
		Vue.mixin({
			data() {
				return {
					imgUrl,
				}
			},
			methods: {
				$jump: router,
				$back: function() {
					uni.navigateBack({
						delta: 1,
						animation:{
			        mode: "",
				      durationIn: 300,
						  durationOut: 300
						},
					})
				},
				
			}
		})
	}
}
