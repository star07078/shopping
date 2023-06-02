<script>
	export default {
		onLaunch: function() {
			if (uni.getStorageSync('token')) {
				this.$store.dispatch('getUser')
			}
		}
	}
</script>

<style lang='scss'>
	/*每个页面公共css */
	@import "@/uni_modules/uview-ui/index.scss";
	.page {
		/*#ifdef APP-PLUS*/
		padding-top: 120rpx;
		/*#endif*/
		 
		/*#ifdef H5*/
		padding-top: 88rpx;
		/*#endif*/
	}
	
	
	.flex-r {
		display: flex;
		flex-direction: row;
	}
	.flex-c {
		display: flex;
		flex-direction: column;
	}
	.mt10 {
		margin-top: 10rpx;
	}
	.mt20 {
		margin-top: 20rpx;
	}
	.mt30 {
		margin-top: 30rpx;
	}
	.mt40 {
		margin-top: 40rpx;
	}
	.mb10 {
		margin-bottom: 10rpx;
	}
	.mb20 {
		margin-bottom: 20rpx;
	}
	.mb30 {
		margin-bottom: 30rpx;
	}
	.mb40 {
		margin-bottom: 40rpx;
	}
</style>
