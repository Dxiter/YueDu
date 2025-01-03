<template>
  <view class="home">
    <!-- 轮播图 -->
    <swiper class="swiper" :indicator-dots="true" autoplay circular indicator-color="#ccc"
      indicator-active-color="#ff0000">
      <swiper-item v-for="(banner, index) in banners" :key="index">
        <image :src="banner.image" class="slide-image"></image>
      </swiper-item>
    </swiper>

    <!-- 分类导航 -->
    <scroll-view scroll-x class="category-nav">
      <view v-for="(category, index) in categories" :key="index" class="category-item"
        @click="navigateToCategory(category.id)">
        <image :src="category.icon" class="category-icon"></image>
        <text class="category-name">{{ category.name }}</text>
      </view>
    </scroll-view>

    <h3>为你推荐</h3>
    <view class="book-grid">
      <navigator v-for="(book, index) in recommendedBooks" :key="index"
        :url="'/pages/bookdetail/bookdetail?id=' + book.id" class="book-item">
        <view class="book-cover-container">
          <image :src="book.cover" class="book-cover"></image>
        </view>
        <view class="book-details">
          <text class="book-author">{{ book.author }}</text>
        </view>
      </navigator>
    </view>

    <view class="hot-search">
      <h3>热搜榜</h3>
      <view class="grid">
        <navigator v-for="item in hotSearch" :key="item.id" :url="'/pages/bookdetail/bookdetail?id=' + item.id"
          class="card">
          <image :src="item.image" :alt="item.title" class="card-image" />
          <p>{{ item.title }}</p>
          <span>{{ item.detail }}</span>
        </navigator>
      </view>
      <button @click="viewMoreHotSearch">查看热搜榜</button>
    </view>

    <view class="rising-list">
      <h3>飙升榜</h3>
      <view class="grid">
        <navigator v-for="item in risingList" :key="item.id" :url="'/pages/bookdetail/bookdetail?id=' + item.id"
          class="card">
          <image :src="item.image" :alt="item.title" class="card-image" />
          <p>{{ item.title }}</p>
          <span>{{ item.detail }}</span>
        </navigator>
      </view>
      <button @click="viewMoreRisingList">查看飙升榜</button>
    </view>

  </view>
</template>

<script setup>
import { ref } from 'vue';

const banners = ref([
  { image: 'https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/2a921eefb0ad96193657168c5f7eb6a7.jpg' },
  { image: 'https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/a57f73a65bbddb51e6f3512cbb2aa1b0.jpg' },
  { image: 'https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/119db9a8899a5a106b750229c0db0408.jpg' }
]);

const categories = ref([
  { id: 1, name: '玄幻', icon: '../../static/icon_pic/long.png' },
  { id: 2, name: '都市', icon: '../../static/icon_pic/dushi.png' },
  { id: 3, name: '战争', icon: '../../static/icon_pic/dapao.png' },
  { id: 4, name: '悬疑', icon: '../../static/icon_pic/kongbu.png' }
]);

const hotSearch = ref([
  { id: 1, image: "https://bookcover.yuewen.com/qdbimg/349573/1042444808/600.webp", title: "2024 热搜趋势", detail: "在这些书里看见世界" },
  { id: 2, image: "https://bookcover.yuewen.com/qdbimg/349573/1042246156/600.webp", title: "清明上河图密码", detail: "连续在榜8天" },
  { id: 3, image: "https://bookcover.yuewen.com/qdbimg/349573/1042443001/600.webp", title: "第一性原理", detail: "6444 人在搜" }
]);

const risingList = ref([
  { id: 1, image: "https://bookcover.yuewen.com/qdbimg/349573/1042444808/600.webp", title: "我们为什么而活", detail: "本周超5千人在读" },
  { id: 2, image: "https://bookcover.yuewen.com/qdbimg/349573/1042246156/600.webp", title: "越过山丘", detail: "累计在榜12天" },
  { id: 3, image: "https://bookcover.yuewen.com/qdbimg/349573/1042443001/600.webp", title: "职场十年", detail: "打工人的蜕变之旅" },
]);

const recommendedBooks = ref([
  {
    id: 1,
    title: '坐看仙倾',
    author: '错哪儿了',
    cover: 'https://bookcover.yuewen.com/qdbimg/349573/1042444808/600.webp'
  },
  {
    id: 2,
    title: '传说时代',
    author: '奥尔良烤鲟鱼堡',
    cover: 'https://bookcover.yuewen.com/qdbimg/349573/1042246156/600.webp'
  },
  {
    id: 3,
    title: '世界版本更新',
    author: '不落鱼',
    cover: 'https://bookcover.yuewen.com/qdbimg/349573/1042443001/600.webp'
  },
  {
    id: 4,
    title: '剑出仙山',
    author: '南朝陈',
    cover: 'https://bookcover.yuewen.com/qdbimg/349573/1042433761/600.webp'
  }
]);

const viewMoreHotSearch = () => {
  alert("查看热搜榜功能开发中...");
};

const viewMoreRisingList = () => {
  alert("查看飙升榜功能开发中...");
};
</script>

<style scoped>
.home {
  padding: 20rpx;
  background-color: #f9f9f9;
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
  box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.1);
}

/* 分类导航 */
.category-nav {
  white-space: nowrap;
  overflow-x: auto;
  margin-left: 23rpx;
  margin-bottom: 10rpx;
  display: flex;
  justify-content: center;
}

.category-item {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150rpx;
  margin-right: 20rpx;
}

.category-icon {
  width: 80rpx;
  height: 80rpx;
  border-radius: 10rpx;
  margin-bottom: 10rpx;
}

.category-name {
  font-size: 28rpx;
}

/* 为你推荐 */
.book-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20rpx;
  margin-bottom: 20rpx;
}

.book-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.1);
  border-radius: 10rpx;
  overflow: hidden;
  background-color: #fff;
}

.book-cover-container {
  margin-left: 2rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260rpx;
  height: 350rpx;
  overflow: hidden;
}

.book-cover {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.book-details {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.book-author {
  text-align: center;
  margin-top: 10rpx;
}

.hot-search,
.rising-list,
.new-books {
  margin-bottom: 20rpx;
}

.grid {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  background: #ffffff;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  flex: 1;
  max-width: 300rpx;
  box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
}

.card-image {
  max-width: 100%;
  width: 100%;
  /* 设置图片宽度 */
  height: 180px;
  border-radius: 5rpx;
  margin-bottom: 10rpx;
}

.card p {
  font-size: 16px;
  margin: 5rpx 0;
}

.card span {
  display: block;
  margin-top: 5rpx;
  font-size: 14rpx;
  color: #aaa;
}

button {
  margin-top: 20rpx;
  padding: 10rpx 20rpx;
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 5rpx;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #0056b3;
}
</style>