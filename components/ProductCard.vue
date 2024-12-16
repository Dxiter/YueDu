<template>
  <view class="product-card" @click="handleClick">
    <image :src="product.image" class="product-image"></image>
    <view class="product-info">
      <text class="product-name">{{ product.name }}</text>
      <text class="product-price">￥{{ product.price }}</text>
    </view>
  </view>
</template>

<script setup>
// import { defineProps, defineEmits } from 'vue';
import {defineEmits } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click', props.product);
};
</script>

<style scoped>
.product-card {
  display: flex;
  align-items: center;
  padding: 20rpx;
  border: 1rpx solid #ddd;
  border-radius: 10rpx;
  margin-bottom: 20rpx;
  cursor: pointer;
}

.product-image {
  width: 100rpx;
  height: 100rpx;
  margin-right: 20rpx;
}

.product-info {
  display: flex;
  flex-direction: column;
}

.product-name {
  font-size: 28rpx;
  font-weight: bold;
}

.product-price {
  font-size: 24rpx;
  color: #999;
}
</style>