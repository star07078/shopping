<template>
	<view class="page">
		<navbar title='首页' iconName=''></navbar>	
		
		1
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			fn() {
					this.$store.dispatch('getUser')
			}
		},
		onReachBottom() {
			console.log(123)
		}
	}
</script>

<style>
	.b {
		background: #ccc;
	}
</style>