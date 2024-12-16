<template>
  <view class="my-page">
    <!-- 头部区域 -->
    <view class="header" :style="{'padding-top': topPadding+'px','padding-bottom':wideValue+'px'}">
      <!-- 个人信息部分 -->
      <view class="user-info">
        <!-- 左侧头像及信息 -->
        <view class="user-info-left-03box">
          <image fit="cover" :src="login ? '/static/user_pic/image.png' : '/static/user_pic/default.png'" class="user-info-avatar"></image>
          <view class="user-name" v-if="login">User</view>
        </view>
        <view class="user-info-right-box" v-if="login">
          <text class="points-text">积分: 1000</text>
        </view>
      </view>
    </view>
    <!-- 数据订单部分 -->
    <view class="order-container">
      <view class="order-header">
        <text class="my-order">我的订单</text>
        <text class="all-orders">全部订单></text>
      </view>
      <view class="detail-order">
        <view>
          <image src="../../static/icon_pic/daifukuan.png" style="width: 25px;height: 25px;"></image>
          <text>待付款</text>
        </view>
        <view>
          <image src="../../static/icon_pic/daishouhuo.png" style="width: 25px;height: 25px;"></image>
          <text>待收货</text>
        </view>
        <view>
          <image src="../../static/icon_pic/daipingjia.png" style="width: 20px;height: 20px;"></image>
          <text style="margin-bottom: -3.5px;">待评价</text>
        </view>
        <view>
          <image src="../../static/icon_pic/daishouhuo.png" style="width: 25px;height: 25px;"></image>
          <text>待退修</text>
        </view>
      </view>
    </view>
    <!-- 功能列表 -->
    <view class="drag-content">
      <scroll-view scroll-y="true" class="scroll-container">
        <view class="scroll-container-content">
          <view class="my-functions" :style="{transform: 'translateY('+translateY+'px)'}">
            <view>
              <image src="../../static/icon_pic/xiaomihuiyuan.png" style="width: 15px;height: 15px;"></image>
              <text>小米会员</text>
            </view>
            <view>
              <image src="../../static/icon_pic/huiyuanzhongxin.png" style="width: 15px;height: 15px;"></image>
              <text>会员中心</text>
            </view>
            <view>
              <image src="../../static/icon_pic/fuwuzhongxin.png" style="width: 15px;height: 15px;"></image>
              <text>服务中心</text>
            </view>
            <view>
              <image src="../../static/icon_pic/xiaomizhijia.png" style="width: 15px;height: 15px;"></image>
              <text>小米之家</text>
            </view>
            <view>
              <image src="../../static/icon_pic/gengduogongnneg.png" style="width: 15px;height: 15px;"></image>
              <text>更多功能</text>
            </view>
            <view>
              <image src="../../static/icon_pic/shezhi.png" style="width: 15px;height: 15px;"></image>
              <text>设置</text>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
  const wideValue = 20;
  export default {
    data() {
      return {
        login: true,
        topPadding: 0,
        moveDistance: 0, // 当前产生的距离
        moveY: 0, // 拖拽时候的Y点
        startY: 0, // 初始位置的Y点
        wideValue: wideValue,
        translateY: -1 * wideValue, // 自身Y点
      };
    },
    onReady() {
      // 获取系统信息
      const SystemInfo = uni.getWindowInfo();
      // 获取状态栏高度
      let statusBarHeight = SystemInfo.statusBarHeight;
      // 获取胶囊体高度
      let titleBarHeight = uni.getMenuButtonBoundingClientRect().height;
      // 计算两者总和高度
      this.topPadding = statusBarHeight + titleBarHeight;
    },
   }
</script>

<style lang="scss" scoped>
.my-page {
  background: #ffffff;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  // 整个头部区域
  .header {
    width: 100%;
    background-image: url("https://haowallpaper.com/link/common/file/previewFileImg/15189094385356096");
    background-size: cover;
    overflow: hidden;
  }

  .user-info {
    height: 225rpx;
    padding: 0 32rpx;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .user-info-left-03box {
    display: flex;
    align-items: center;
  }

  .user-info-avatar {
    margin-top: 75rpx;
    margin-top: 80rpx;
    margin-right: 32rpx;
    width: 120rpx;
    height: 120rpx;
    border-radius: 50%;
  }

  .user-name {
    margin-top: 75rpx;
    color: white;
    white-space: nowrap;
    font-size: 36rpx;
    line-height: 50rpx;
  }

  .login-container {
    width: calc(100% - 120rpx - 32rpx);
    height: 100%;
    display: flex;
    align-items: center;

    .login-btn {
      color: white;
      line-height: 120rpx;
    }
  }

  .user-info-right-box {
    margin-top: 70rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180rpx;
    background-color: goldenrod;
    border-radius: 30rpx;

    .points-text {
      color: black;
      font-size: 28rpx;
    }
  }

  .order-container {
    width: 100%;
    box-sizing: border-box;
  }

  .order-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10rpx 50rpx;
    margin-bottom: 10rpx; /* 减少底部间距 */
  }

  .my-order {
    font-size: 26rpx;
    font-weight: bold;
    color: black;
  }

  .all-orders {
    font-size: 26rpx;
    color: black;
  }

  .detail-order {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0rpx 50rpx 0rpx 50rpx;
    box-sizing: border-box;
  }

  .detail-order > view {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 8rpx;
    padding: 0rpx;
    border-radius: 8rpx;
  }

  .detail-order > view image {
    margin-bottom: 8rpx;
  }

  .detail-order > view text:nth-child(1) {
    font-size: 32rpx;
    line-height: 34rpx;
    font-weight: bold;
    color: black;
  }

  .detail-order > view text:nth-child(2) {
    font-size: 24rpx;
    line-height: 28rpx;
    color: black;
    margin-top: 8rpx;
  }

  .drag-content {
    background: #ffffff;
    transition: all 0.3s linear;

    .scroll-container {
      height: calc(100vh - 494rpx);
      .scroll-container-content {
        padding-top: 64rpx;
        padding-bottom: 64rpx;
      }
    }
  }

  // 功能列表区域
  .my-functions {
    width: 100%;
    background: #ffffff;
    padding: 0rpx 32rpx;
    box-sizing: border-box;

    .icon {
      width: 48rpx;
      height: 48rpx;
    }

    view {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #EEF2F4;
      padding: 32rpx 0rpx 32rpx 0rpx;

      image {
        width: 48rpx;
      }

      text {
        color: #333333;
        margin-left: 36rpx;
        font-size: 28rpx;
      }

      &:last-child {
        border-bottom: 0px solid #EEF2F4;
      }
    }
  }

  //退出登录
  .exit-container {
    padding: 0rpx 32rpx;
    box-sizing: border-box;
    width: 100%;
    padding-top: 12%;

    .exit-btn {
      width: 100%;
      height: 96rpx;
      border-radius: 4px;
      background: #F75454;
      color: #FFFFFF;
      font-size: 32rpx;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
