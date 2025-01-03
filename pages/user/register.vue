<template>
	<view class="register-page">
		<view class="register-container">
			<view class="register-header">
				<text class="register-title">注册</text>
			</view>
			<view class="register-form">
				<view class="form-item">
					<text class="label">用户名</text>
					<input class="input" type="text" v-model="username" placeholder="请输入用户名" />
				</view>
				<view class="form-item">
					<text class="label">密码</text>
					<input class="input" type="password" v-model="password" placeholder="请输入密码" />
				</view>
				<view class="form-item">
					<text class="label">确认密码</text>
					<input class="input" type="password" v-model="confirmPassword" placeholder="请确认密码" />
				</view>
				<button class="register-button" @click="handleRegister">注册</button>
				<text class="error-message" v-if="errorMessage">{{ errorMessage }}</text>
				<text class="success-message" v-if="successMessage">{{ successMessage }}</text>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');
const successMessage = ref('');

const handleRegister = () => {
	if (!username.value || !password.value || !confirmPassword.value) {
		errorMessage.value = '所有字段都不能为空';
		return;
	}

	if (password.value !== confirmPassword.value) {
		errorMessage.value = '密码和确认密码不一致';
		return;
	}

	uni.request({
		url: 'http://localhost:8080/api/register', // 替换为你的后端接口地址
		method: 'POST',
		data: {
			username: username.value,
			password: password.value
		},
		success: (res) => {
			console.log('后端返回的数据:', res.data); // 添加这一行
			if (res.data.success) {
				// 注册成功，显示成功信息
				successMessage.value = res.data.message || '注册成功，请登录';
				errorMessage.value = '';
				// 清空输入框
				username.value = '';
				password.value = '';
				confirmPassword.value = '';
				// 可选：跳转到登录页面
				uni.navigateTo({ url: '/pages/user/login' });
			} else {
				// 注册失败，显示错误信息
				errorMessage.value = res.data.message || '注册失败，请重试';
				successMessage.value = '';
			}
		},
		fail: () => {
			errorMessage.value = '网络请求失败，请重试';
			successMessage.value = '';
		}
	});
};
</script>

<style scoped>
.register-page {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: #f0f0f0;
}

.register-container {
	background-color: #ffffff;
	padding: 40px;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	width: 90%;
	max-width: 400px;
}

.register-header {
	text-align: center;
	margin-bottom: 20px;
}

.register-title {
	font-size: 24px;
	font-weight: bold;
	color: #333333;
}

.register-form {
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

.register-button {
	width: 100%;
	padding: 12px;
	background-color: #007aff;
	border: none;
	border-radius: 5px;
	color: #ffffff;
	font-size: 16px;
	cursor: pointer;
}

.register-button:active {
	background-color: #005fa3;
}

.error-message {
	color: red;
	font-size: 14px;
	margin-top: 10px;
	text-align: center;
}

.success-message {
	color: green;
	font-size: 14px;
	margin-top: 10px;
	text-align: center;
}
</style>