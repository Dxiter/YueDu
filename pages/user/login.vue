<template>
	<view class="login-page">
	  <view class="login-container">
		<view class="login-header">
		  <text class="login-title">登录</text>
		</view>
		<view class="login-form">
		  <view class="form-item">
			<text class="label">用户名</text>
			<input class="input" type="text" v-model="username" placeholder="请输入用户名" />
		  </view>
		  <view class="form-item">
			<text class="label">密码</text>
			<input class="input" type="password" v-model="password" placeholder="请输入密码" />
		  </view>
		  <view class="button-container">
			<button class="login-button" @click="handleLogin">登录</button>
			<button class="register-button" @click="moveRegister">注册</button>
		  </view>
		  <text class="error-message" v-if="errorMessage">{{ errorMessage }}</text>
		</view>
	  </view>
	</view>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore(); // 使用 Vuex Store
  
  const username = ref('');
  const password = ref('');
  const errorMessage = ref('');
  
  const handleLogin = () => {
	if (!username.value || !password.value) {
	  errorMessage.value = '用户名和密码不能为空';
	  return;
	}
  
	uni.request({
	  url: 'http://localhost:8080/api/login', // 替换为你的后端接口地址
	  method: 'POST',
	  data: {
		username: username.value,
		password: password.value
	  },
	  success: (res) => {
		console.log('后端返回的数据:', res.data); // 添加这一行
		if (res.data.success) {
		  // 登录成功，更新登录状态
		  store.dispatch('login', true);
		  // 跳转到用户页面
		  uni.switchTab({ url: '/pages/user/user' });
		} else {
		  // 登录失败，显示错误信息
		  errorMessage.value = res.data.message || '登录失败，请重试';
		}
	  },
	  fail: () => {
		errorMessage.value = '网络请求失败，请重试';
	  }
	});
  };
  
  const moveRegister = () => {
	// 可以在这里添加跳转到注册页面的逻辑
	uni.navigateTo({ url: '/pages/user/register' });
  };
  </script>
  
  <style scoped>
  .login-page {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: #f0f0f0;
  }
  
  .login-container {
	background-color: #ffffff;
	padding: 40px;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	width: 90%;
	max-width: 400px;
  }
  
  .login-header {
	text-align: center;
	margin-bottom: 20px;
  }
  
  .login-title {
	font-size: 24px;
	font-weight: bold;
	color: #333333;
  }
  
  .login-form {
	display: flex;
	flex-direction: column;
  }
  
  .form-item {
	margin-bottom: 15px;
  }
  
  .label {
	font-size: 16px;
	margin-bottom: 5px;
	color: #555555;
  }
  
  .input {
	width: 100%;
	padding: 10px;
	border: 1px solid #cccccc;
	border-radius: 5px;
	font-size: 16px;
  }
  
  .button-container {
	display: flex;
	justify-content: space-between;
	margin-top: 15px;
  }
  
  .login-button,
  .register-button {
	width: 48%;
	padding: 12px;
	background-color: #007aff;
	border: none;
	border-radius: 5px;
	color: #ffffff;
	font-size: 16px;
	cursor: pointer;
  }
  
  .login-button:active,
  .register-button:active {
	background-color: #005fa3;
  }
  
  .error-message {
	color: red;
	font-size: 14px;
	margin-top: 10px;
	text-align: center;
  }
  </style>