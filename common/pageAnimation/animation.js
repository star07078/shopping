export const pageShow = (mode, duration)=>{
	// #ifdef H5
	setTimeout(()=>{//等待页面渲染完成，否则在页面后退时找不到元素
		const classList = document.querySelector('uni-page').classList,
			className = "animation-"+(mode?mode+"-":"");
		if(duration){
			classList.add(className+"before");
			setTimeout(()=>{//等待初始样式完成渲染，transform与transition同时出现会立即执行css动画
				classList.add(className+"in", className+"after", "animation-show");
				setTimeout(()=>{
					classList.remove(className+"in", className+"after", className+"before");
				}, duration)
			},20)
		}else{//跳过动画
			classList.add("animation-show");
		}
	},20)
	// #endif
}

export const pageHide = (mode, duration)=>{
	// #ifdef H5
	const classList = document.querySelector('uni-page').classList,
		className = "animation-"+(mode?mode+"-":"");
	if(duration){
		classList.add(className+"out", className+"base");
		setTimeout(() => {//等待初始样式完成渲染
			classList.remove("animation-show");
			classList.add(className+"before");
			setTimeout(()=>{
				classList.remove(className+"out", className+"base", className+"before");
			}, duration)
		}, 20)
	}else{//跳过动画
		classList.remove("animation-show");
	}
	// #endif
}

export default function(options={}){
	// #ifdef H5
	const {durationIn=300, durationOut=300, mode="", auto=true, except=[]} = options,
		interceptorList = ["navigateTo", "redirectTo", "reLaunch", "switchTab", "navigateBack"];
	
	pageShow(mode, durationIn);
	for(const item of interceptorList){
		let itemOption, itemMode, itemDurationIn, itemDurationOut;
		uni.addInterceptor(item, {
			invoke(e){//调用前拦截
				itemOption = e.animation||{};
				itemMode = itemOption.mode||mode;
				itemDurationIn = itemOption.durationIn||durationIn;
				itemDurationOut = itemOption.durationOut||durationOut;
				if(except.includes(item)){//排除拦截
					return true
				}
				pageHide(itemMode, itemDurationOut);
				return new Promise(function(resolve, reject){
					setTimeout(()=>{//等待出动画完成
						resolve(e);
					}, itemDurationOut)
				})
			},
			success(){
				if(auto){//自动开启进动画
					pageShow(itemMode, itemDurationIn);
				}
			},
			fail(err){//页面跳转出错，须还原
				pageShow("", 0);
				console.log(err);
			}
		})
	}
	//监听浏览器前进返回操作，开启自动后有效
	if(auto){
		window.addEventListener("popstate",(e)=>{
			pageShow(mode, durationIn)
		})
	}
	return {
		_pageShow: function(itemOption={}){
			pageShow(itemOption.mode||mode, itemOption.duration||durationIn)
		},
		_pageHide: function(itemOption={}){
			pageHide(itemOption.mode||mode, itemOption.duration||durationOut)
		}
	}
	// #endif
}