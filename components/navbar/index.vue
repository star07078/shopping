<template>
	<view class="k-navbar" :style='{background: bg ? bg : ""}'>
		<view class="status-bar" :style='{background: statusBar ? statusBar : ""}'></view>
		<view class="navbar" :style='{background: navbarBg ? navbarBg : ""}'>
			<view class="left">
				<slot name='left'>
					<u-icon v-if='iconName' @click='$back' :name='iconName' :size='iconSize' :color='iconColor'></u-icon>
				</slot>
			</view>
			<view class="center">
				<slot name='center'>
					<text :style='titleStyle'>{{title}}</text>
				</slot>
			</view>
			<view class="right">
				<slot name='right'></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: '',
			bg: '',
			statusBar: '',
			navbarBg: '',
			iconName: {
				default: 'arrow-left',
				type: String
			},
			iconSize: {
				default: 22,
				type: Number
			},
			iconColor: {
				default: '#fff',
				type: String
			},
			titleStyle: {
				default: () => {},
				type: Object
			},
		},
	}
</script>

<style scoped lang='scss'>
	.k-navbar {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		z-index: 9999;
		background: $thume-color;
		
		.navbar {
			width: 100%;
			height: 88rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: $thume-color;
			.left, .right {
				padding: 10rpx 30rpx;
				flex: 0 1 120rpx;
			}
			.center, .left, .right {
				line-height: 88rpx;
			}
			.center {
				font-weight: 800;
			}
			.u-icon {
				padding: 10rpx 10rpx 10rpx 0;
			}
			.right {
				display: flex;
				justify-content: flex-end;
				align-items: center;
				text-align: right;
				image {
					vertical-align: middle;
				}
			}
		}
	}
	.status-bar {
		background: $thume-color;
		padding-top: var(--status-bar-height);
	}
</style>