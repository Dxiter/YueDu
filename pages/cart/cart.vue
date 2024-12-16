<template>
  <view class="cart-container">
    <!-- 添加导航栏 -->
    <view class="navbar">
      <input type="text" v-model="searchQuery" class="search-input" placeholder="搜索商品" />
      <button @click="toggleManageMode" class="manage-button">{{ manageMode ? '完成' : '管理' }}</button>
    </view>
    
    <view class="cart">
      <view v-if="filteredCartItems.length > 0">
        <view class="cart-grid">
          <view class="cart-item" v-for="item in filteredCartItems" :key="item.id">
            <checkbox-group @change="checkboxChange(item.id)" class="checkbox-group">
              <label>
                <checkbox :value="item.id" :checked="selectedItems.includes(item.id)" />
              </label>
            </checkbox-group>
            <image :src="item.image" class="cart-item-image"></image>
            <view class="cart-item-details">
              <text class="cart-item-name">{{ item.name }}</text>
              <text class="cart-item-price">￥{{ item.price }}</text>
              <view class="quantity-selector">
                <button @click="decreaseQuantity(item.id)" class="quantity-button">-</button>
                <input type="number" v-model="item.quantity" class="quantity-input" min="1" />
                <button @click="increaseQuantity(item.id)" class="quantity-button">+</button>
              </view>
            </view>
            <button @click="removeFromCart(item.id)" class="delete-button" v-if="manageMode">删除</button>
          </view>
        </view>
      </view>
      <view v-else>
        <text class="empty-cart-message">购物车为空或未找到相关商品</text>
      </view>
    </view>
    <view class="checkout-section" v-if="!manageMode">
      <text class="total-price">总价: ￥{{ totalPrice }}</text>
      <button @click="buyButtonClicked" class="buy-button">购买</button>
    </view>
    <view class="checkout-section" v-if="selectedItems.length > 0 && manageMode">
      <button @click="deleteSelectedItems" class="delete-selected-button">删除选中商品</button>
    </view>
  </view>
</template>
<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

if (!store.getters) {
  console.error('Getters are undefined');
}

const cartItems = computed(() => store.getters.cartItems.map(item => ({ ...item, quantity: item.quantity || 1 })));
const selectedItems = ref([]);
const searchQuery = ref('');
const manageMode = ref(false);

const filteredCartItems = computed(() => {
  if (!searchQuery.value) return cartItems.value;
  return cartItems.value.filter(item =>
    item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const removeFromCart = (productId) => {
  store.commit('removeFromCart', productId);
  uni.showToast({
    title: '已移除商品',
    icon: 'success'
  });
};

const checkboxChange = (productId) => {
  if (selectedItems.value.includes(productId)) {
    selectedItems.value = selectedItems.value.filter(id => id !== productId);
  } else {
    selectedItems.value.push(productId);
  }
};

const totalPrice = computed(() => {
  return filteredCartItems.value
    .filter(item => selectedItems.value.includes(item.id))
    .reduce((sum, item) => sum + item.price * item.quantity, 0);
});

const buyButtonClicked = () => {
  if (selectedItems.value.length === 0) {
    uni.showToast({
      title: '请选择要购买的商品',
      icon: 'none'
    });
    return;
  }

  uni.showModal({
    title: '确认购买',
    content: `总价: ￥${totalPrice.value}`,
    success: function (res) {
      if (res.confirm) {
        // 跳转到订单确认页面
        uni.navigateTo({
          url: '/pages/order/createOrder'
        });
      }
    }
  });
};

const toggleManageMode = () => {
  manageMode.value = !manageMode.value;
  selectedItems.value = []; // 清空选中的商品
};

const deleteSelectedItems = () => {
  selectedItems.value.forEach(id => {
    removeFromCart(id);
  });
  selectedItems.value = [];
};

const increaseQuantity = (productId) => {
  const item = cartItems.value.find(item => item.id === productId);
  if (item) {
    item.quantity++;
  }
};

const decreaseQuantity = (productId) => {
  const item = cartItems.value.find(item => item.id === productId);
  if (item && item.quantity > 1) {
    item.quantity--;
  }
};
</script>
<style scoped>
.cart-container {
  padding-bottom: 150rpx; /* 调整底部内边距以确保内容不会被底部工具栏遮挡 */
  background-color: #f5f5f5; /* 设置背景颜色 */
}

/* 添加导航栏样式 */
.navbar {
  display: flex;
  justify-content: space-between; /* 将内容两端对齐 */
  align-items: center;
  padding: 20rpx;
  background-color: #ffffff;
  border-bottom: 1px solid #ccc;
}

.search-input {
  width: 60%;
  padding: 15rpx;
  border: 1px solid #ccc;
  border-radius: 15rpx;
  font-size: 28rpx;
}

.manage-button {
  background-color: #007aff;
  color: #fff;
  padding: 15rpx 30rpx;
  border-radius: 15rpx;
  border: none;
  font-size: 28rpx;
}

.cart {
  padding: 30rpx; /* 增加内边距 */
  background-color: #ffffff; /* 设置背景颜色 */
  border-radius: 15rpx; /* 圆角 */
  box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.1); /* 阴影效果 */
}

.cart-grid {
  display: grid;
  grid-template-rows: auto; /* 按纵行排列 */
  gap: 30rpx; /* 增加间距 */
}

.cart-item {
  background-color: #ffffff; /* 设置背景颜色 */
  border-radius: 15rpx; /* 圆角 */
  overflow: hidden;
  padding: 30rpx; /* 增加内边距 */
  display: flex;
  flex-direction: row; /* 水平排列子元素 */
  align-items: center; /* 垂直居中 */
  position: relative; /* 相对定位以便绝对定位删除按钮 */
}

.cart-item-image {
  width: 150rpx; /* 增加图片宽度 */
  height: 150rpx; /* 增加图片高度 */
  border-radius: 15rpx; /* 圆角 */
  margin-right: 30rpx; /* 增加右边距 */
}

.cart-item-details {
  flex: 1;
}

.cart-item-name {
  font-size: 32rpx; /* 增加字体大小 */
  margin-bottom: 15rpx; /* 增加底部外边距 */
}

.cart-item-price {
  color: #ff0000;
  font-size: 28rpx; /* 增加字体大小 */
}

.quantity-selector {
  display: flex;
  align-items: center;
  margin-top: 15rpx;
}

.quantity-button {
  background-color: #007aff;
  color: #fff;
  padding: 10rpx 20rpx;
  border-radius: 15rpx;
  border: none;
  font-size: 24rpx;
  margin: 0 10rpx;
}

.quantity-input {
  width: 80rpx;
  padding: 10rpx;
  border: 1px solid #ccc;
  border-radius: 15rpx;
  font-size: 24rpx;
  text-align: center;
}

.checkbox-group {
  margin-right: 30rpx; /* 增加右边距 */
}

.delete-button {
  position: absolute;
  top: 10rpx;
  right: 10rpx;
  background-color: #ff0000;
  color: #fff;
  padding: 10rpx 20rpx;
  border-radius: 15rpx;
  border: none;
  font-size: 24rpx;
}

.checkout-section {
  position: fixed;
  bottom: 100rpx; /* 调整底部位置以确保不被底部工具栏遮挡 */
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30rpx; /* 增加内边距 */
  border-top: 2px solid #ccc; /* 增加边框宽度 */
  background-color: #ffffff; /* 设置背景颜色 */
  z-index: 10;
  box-shadow: 0 -4rpx 8rpx rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
}

.total-price {
  font-size: 36rpx; /* 增加字体大小 */
}

.buy-button {
  background-color: #007aff;
  color: #fff;
  width: 200rpx; /* 增加宽度 */
  padding: 15rpx 30rpx; /* 增加内边距 */
  margin-right: 30rpx; /* 增加右边距 */
  border-radius: 15rpx; /* 圆角 */
  border: none;
  font-size: 28rpx;
}

.delete-selected-button {
  background-color: #ff0000;
  color: #fff;
  width: 200rpx; /* 增加宽度 */
  padding: 15rpx 30rpx; /* 增加内边距 */
  border-radius: 15rpx; /* 圆角 */
  border: none;
  font-size: 28rpx;
}
</style>