// 此vm参数为页面的实例，可以通过它引用vuex中的变量
module.exports = (vm) => {
	// 初始化请求配置
	uni.$u.http.setConfig((config) => {
		config.baseURL = url; /* 根域名 */
		config.custom = {
			auth: true
		}
		config.header = {
			'content-type': 'application/json'
		}
		
		return config
	})

	// 请求拦截
	uni.$u.http.interceptors.request.use((config) => {
		config.data = config.data || {}
		let token = uni.getStorageSync("token")
		if (token) {
			config.header.token = token
		}
		if (config?.custom?.auth) {
			if (!config.header.token) {
				uni.$u.toast('请登录后查看')
				uni.reLaunch({
					url: '/pages/login/login'
				})
				return
			}
		}
		
		return config
	}, config => {
		return Promise.reject(config)
	})

	// 响应拦截
	uni.$u.http.interceptors.response.use((response) => {
		/* 对响应成功做点什么 可使用async await 做异步操作*/
		const data = response.data

		return data
	}, (response) => {
		return Promise.reject(response)
	})
}
