<template>
	<view class="content b-t">
		<view class="list b-b" v-for="(item, index) in addressList" :key="index">
			<view class="wrapper">
				<view class="address-box">
					<text v-if="item.default" class="tag">默认</text>
					<text class="address">{{item.addressName}} {{item.area}}</text>
				</view>
				<view class="u-box">
					<text class="name">{{item.name}}</text>
					<text class="mobile">{{item.mobile}}</text>
				</view>
			</view>
			<text class="yticon icon-bianji" ></text>
		</view>
		<button class="add-btn">新增地址</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				source: 0,
				addressList: [
					{
						name: '刘晓晓',
						mobile: '18666666666',
						addressName: '贵族皇仕牛排(东城店)',
						address: '北京市东城区',
						area: 'B区',
						default: true
					},{
						name: '刘大大',
						mobile: '18667766666',
						addressName: '龙回1区12号楼',
						address: '山东省济南市历城区',
						area: '西单元302',
						default: false,
					}
				]
			}
		},

	}
</script>

<style lang="scss">
	page{
		padding-bottom: 120rpx;
	}
	.content{
		position: relative;
	}
	.list{
		display: flex;
		align-items: center;
		padding: 20rpx 30rpx;;
		background: #fff;
		position: relative;
	}
	.wrapper{
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	.address-box{
		display: flex;
		align-items: center;
		.tag{
			font-size: 24rpx;
			color: #fa436a;
			margin-right: 10rpx;
			background: #fffafb;
			border: 1px solid #ffb4c7;
			border-radius: 4rpx;
			padding: 4rpx 10rpx;
			line-height: 1;
		}
		.address{
			font-size: 30rpx;
			color: #303133;
		}
	}
	.u-box{
		font-size: 28rpx;
		color: #909399;
		margin-top: 16rpx;
		.name{
			margin-right: 30rpx;
		}
	}
	.icon-bianji{
		display: flex;
		align-items: center;
		height: 80rpx;
		font-size: 40rpx;
		color: #909399;
		padding-left: 30rpx;
	}
	
	.add-btn{
		position: fixed;
		left: 30rpx;
		right: 30rpx;
		bottom: 16rpx;
		z-index: 95;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690rpx;
		height: 80rpx;
		font-size: 32rpx;
		color: #fff;
		background-color: #fa436a;
		border-radius: 10rpx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);		
	}
</style>
