<template>
  <view class="cart-item">
    <image :src="item.image" class="product-image"></image>
    <view class="product-info">
      <text class="product-name">{{ item.name }}</text>
      <text class="product-price">￥{{ item.price }}</text>
    </view>
    <view class="quantity-control">
      <button @click="decreaseQuantity">-</button>
      <text>{{ item.quantity }}</text>
      <button @click="increaseQuantity">+</button>
    </view>
    <button @click="removeFromCart">删除</button>
  </view>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    increaseQuantity() {
      this.$emit('update-quantity', this.item, this.item.quantity + 1);
    },
    decreaseQuantity() {
      if (this.item.quantity > 1) {
        this.$emit('update-quantity', this.item, this.item.quantity - 1);
      }
    },
    removeFromCart() {
      this.$emit('remove-item', this.item);
    }
  }
};
</script>


<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  padding: 20rpx;
  border-bottom: 1px solid #ccc;
}
.product-image {
  width: 100rpx;
  height: 100rpx;
  margin-right: 20rpx;
}
.product-info {
  flex: 1;
}
.product-name {
  font-size: 28rpx;
  margin-bottom: 10rpx;
}
.product-price {
  color: #ff0000;
}
.quantity-control {
  display: flex;
  align-items: center;
  margin-right: 20rpx;
}
.quantity-control button {
  margin: 0 5rpx;
  padding: 5rpx 10rpx;
}
</style>