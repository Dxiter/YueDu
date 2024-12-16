<!-- pages/index/index.vue -->
<template>
  <view class="home">
    <!-- 轮播图 -->
    <swiper class="swiper" :indicator-dots="true" autoplay circular indicator-color="#ccc" indicator-active-color="#ff0000">
      <swiper-item v-for="(banner, index) in banners" :key="index">
        <image :src="banner.image" class="slide-image"></image>
      </swiper-item>
    </swiper>

    <!-- 分类导航 -->
    <scroll-view scroll-x class="category-nav">
      <view 
        v-for="(category, index) in categories" 
        :key="index" 
        class="category-item"
        @click="navigateToCategory(category.id)"
      >
        <image :src="category.icon" class="category-icon"></image>
        <text class="category-name">{{ category.name }}</text>
      </view>
    </scroll-view>

    <!-- 推荐商品 -->
    <view class="section-title">为你推荐</view>
    <view class="product-grid">
      <navigator v-for="(product, index) in recommendedProducts" :key="index" :url="'/pages/product/product?id=' + product.id" class="product-item">
        <image :src="product.image" class="product-image"></image>
        <view class="product-details">
          <text class="product-name">{{ product.name }}</text>
          <text class="product-price">￥{{ product.price }}</text>
        </view>
      </navigator>
    </view>

    <!-- 新品上架 -->
    <view class="section-title">新品上架</view>
    <view class="product-grid">
      <navigator v-for="(product, index) in newProducts" :key="index" :url="'/pages/product/product?id=' + product.id" class="product-item">
        <image :src="product.image" class="product-image"></image>
        <view class="product-details">
          <text class="product-name">{{ product.name }}</text>
          <text class="product-price">￥{{ product.price }}</text>
        </view>
      </navigator>
    </view>

    <!-- 促销活动 -->
    <view class="section-title">促销活动</view>
    <view class="promotion-grid">
      <navigator v-for="(promotion, index) in promotions" :key="index" :url="promotion.url" class="promotion-item">
        <image :src="promotion.image" class="promotion-image"></image>
        <view class="promotion-details">
          <text class="promotion-title">{{ promotion.title }}</text>
          <text class="promotion-description">{{ promotion.description }}</text>
        </view>
      </navigator>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const banners = ref([
  { image: 'https://gw.alicdn.com/imgextra/i4/O1CN01XW9vah1rhFN3Vrr4v_!!6000000005662-0-tps-740-402.jpg_Q75.jpg' },
  { image: 'https://p2.lefile.cn/fes/cms/2024/12/09/fijoy9t4vqjipv5m3s5ruebve6t4ub741700.jpg' },
  { image: 'https://www.sonystyle.com.cn/content/dam/sonystyle/products/headphone/index_img/kv/wh_1000xn5_r_1920x600.jpg' }
]);

const categories = ref([
        { id: 1, name: '电子', icon: 'https://img13.360buyimg.com/jdcms/s480x480_jfs/t1/235019/35/26475/60904/66d0147eFcc2a1760/52199b4fd6e33f53.jpg.avif' },
        { id: 2, name: '家居', icon: 'https://img10.360buyimg.com/n7/jfs/t1/243814/5/18827/62167/66e2580fF57dce2ab/e93adc7fe25f50a3.jpg.avif' },
        { id: 3, name: '服装', icon: 'https://img13.360buyimg.com/n1/s350x467_jfs/t1/232324/10/25427/78081/66cc0574Fda15e5da/f103f53e54629a79.jpg!cc_350x467.avif' },
        { id: 4, name: '食品', icon: 'https://img11.360buyimg.com/n1/jfs/t1/139911/26/38408/277588/64c504bfFc6838326/0247bbcd732da6d6.jpg.avif' }
      ]);

const recommendedProducts = ref([
{ id: 1, name: '智能手表', image: 'https://img1.360buyimg.com/n6/jfs/t1/186195/24/53696/30183/6752b70dFad2ea20f/6715c5e96e5dbce0.jpg', price: 999, categoryId: 1, state: '已售2.5k', marks: '好评95%' },
{ id: 2, name: '无线耳机', image: 'https://img1.360buyimg.com/n6/jfs/t1/173412/3/52978/42054/6751532cFcbd79444/6f8347598551d622.jpg', price: 499, categoryId: 1, state: '已售1.8k', marks: '好评90%' },
{ id: 3, name: '蓝牙音箱', image: 'https://img1.360buyimg.com/n6/jfs/t1/248167/8/26400/152717/67568723F9935c31a/4ee76cd2ff73ded9.jpg', price: 299, categoryId: 1, state: '已售1.2k', marks: '好评85%' },
]);

const newProducts = ref([
{ id: 4, name: '新款手机', image: 'https://img1.360buyimg.com/n6/jfs/t1/212189/30/49772/97603/674d5e40F53f8d1f2/33ff4086f586a6c6.jpg', price: 2999, categoryId: 1, state: '已售3.5k', marks: '好评98%' },
{ id: 5, name: '智能手环', image: 'https://img1.360buyimg.com/n6/jfs/t1/176959/10/52427/48787/6752b726Fc3e5af01/ea48d02c6c1dd88f.jpg', price: 199, categoryId: 1, state: '已售1.5k', marks: '好评92%' },
{ id: 6, name: '游戏机', image: 'https://img1.360buyimg.com/n6/jfs/t1/132926/17/50106/76251/673d4370F6dca49cd/3031243f8ebb3400.jpg', price: 2499, categoryId: 1, state: '已售2.0k', marks: '好评88%' },
]);

const promotions = ref([
  { title: '双11大促', description: '全场五折', image: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.guFFW0TN39dlVcBs3yHmNgAAAA?rs=1&pid=ImgDetMain', url: '/pages/promotion/promotion?id=1' },
  { title: '感恩节特惠', description: '买一赠一', image: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.0Dc0mwylg4mVbJj6VxpzwgAAAA?rs=1&pid=ImgDetMain', url: '/pages/promotion/promotion?id=2' }
]);

const navigateToCategory = (categoryId) => {
  uni.switchTab({
    url: `/pages/category/category?id=${categoryId}`
  });
};
</script>

<style scoped>
.home {
  padding: 20rpx;
}

/* 轮播图 */
.swiper {
  height: 300rpx;
  margin-bottom: 20rpx;
  position: relative;
}
.slide-image {
  width: 100%;
  height: 100%;
  border-radius: 10rpx;
}
.section-title {
  /* 文字居中 */
  text-align: center;
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 20rpx;
  color: #333; /* 设置文字颜色 */
}

/* 分类导航 */
.category-nav {
  white-space: nowrap;
  overflow-x: auto;
  margin-left: 23rpx;
  margin-bottom: 10rpx;
  display: flex; /* 使用 flex 布局 */
  justify-content: center; /* 水平居中对齐 */
}
.category-item {
  display: inline-flex; /* 使用 inline-flex 以便在同一行显示 */
  flex-direction: column; /* 图片和文字垂直排列 */
  align-items: center; /* 水平居中对齐 */
  justify-content: center; /* 垂直居中对齐 */
  width: 150rpx;
  margin-right: 20rpx;
}
.category-icon {
  width: 80rpx;
  height: 80rpx;
  border-radius: 10rpx;
  margin-bottom: 10rpx; /* 图片和文字之间的间距 */
}
.category-name {
  font-size: 28rpx;
}

/* 商品网格 */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200rpx, 1fr));
  gap: 20rpx;
  margin-bottom: 20rpx;
}
.product-item {
  background-color: #fff;
  border-radius: 10rpx;
  overflow: hidden;
  box-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.1);
}
.product-image {
  width: 100%;
  height: 200rpx;
}
.product-details {
  padding: 20rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.product-name {
  font-size: 28rpx;
  margin-bottom: 10rpx;
}
.product-price {
  color: #ff0000;
  font-size: 24rpx;
}

/* 促销活动 */
.promotion-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300rpx, 1fr));
  gap: 20rpx;
}
.promotion-item {
  background-color: #fff;
  border-radius: 10rpx;
  overflow: hidden;
  box-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.1);
}
.promotion-image {
  width: 100%;
  height: 200rpx;
}
.promotion-details {
  padding: 20rpx;
}
.promotion-title {
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 10rpx;
}
.promotion-description {
  font-size: 24rpx;
  color: #666;
}
</style>