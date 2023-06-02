export default function router(url, mode='navigateTo', mode1) {
	return new Promise((res, rej) => {	
		if (mode != false) {
			let token = uni.getStorageSync('token')
			if (!token) {
				uni.reLaunch({
					url: '/pages/login/index',
					success: () => {
						res()
					},
					fail: () => {
						rej()
					}
				})
				return
			}
		} else {
			mode = mode1 || 'navigateTo'
		}
	
		uni[mode]({
			url,
			// animationType: 'pop-in',
			// animationDuration: 200,
			animation:{
				mode: "",
		    durationIn: 300,
	      durationOut: 300
			},
			success: () => {
				res()
			},
			fail: () => {
				rej()
			}
		})
	})
}