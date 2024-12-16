<template>
	<view class="app">
		<view class="price-box">
			<text>支付金额</text>
			<text class="price">177.6</text>
		</view>

		<view class="pay-type-list">
			<view class="type-item" >
				<view class="con">
					<text class="tit">微信支付</text>
				</view>
			</view>
		</view>
		<text class="mix-btn" @click="confirm">确认支付</text>
	</view>
</template>
<script>
	export default {
		methods: {
			//确认支付
			confirm: async function() {
				uni.redirectTo({
					url: '/pages/order/paySuccess'
				})
			},
		}
	}
</script>

<style lang='scss'>
	.app {
		width: 100%;
	}

	.price-box {
		background-color: #fff;
		height: 265rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 28rpx;
		color: #909399;

		.price{
			font-size: 50rpx;
			color: #303133;
			margin-top: 12rpx;
			&:before{
				content: '￥';
				font-size: 40rpx;
			}
		}
	}

	.pay-type-list {
		margin-top: 20rpx;
		background-color: #fff;
		padding-left: 60rpx;
		
		.type-item{
			height: 120rpx;
			padding: 20rpx 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-right: 60rpx;
			font-size: 30rpx;
			position:relative;
		}
		
		.icon{
			width: 100rpx;
			font-size: 52rpx;
		}
		.icon-erjiye-yucunkuan {
			color: #fe8e2e;
		}
		.icon-weixinzhifu {
			color: #36cb59;
		}
		.icon-alipay {
			color: #01aaef;
		}
		.tit{
			font-size:  32rpx;
			color:  #303133;
			margin-bottom: 4rpx;
		}
		.con{
			flex: 1;
			display: flex;
			flex-direction: column;
			font-size: 24rpx;
			color: #909399;
		}
	}
	.mix-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 630rpx;
		height: 80rpx;
		margin: 80rpx auto 30rpx;
		font-size:  32rpx;
		color: #fff;
		background-color: #fa436a;
		border-radius: 10rpx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}

</style>
