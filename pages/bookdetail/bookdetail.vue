<template>
	<view class="book-detail">
		<view class="book-cover">
			<img :src="book.cover" alt="Book Cover" />
		</view>
		<view class="book-info">
			<h1>{{ book.title }}</h1>
			<p>{{ book.author }}</p>
			<p>{{ book.description }}</p>
			<view class="book-stats">
				<p>读者人数: {{ book.readers }}</p>
				<p>完成阅读人数: {{ book.finishedReaders }}</p>
				<p>总字数: {{ book.wordCount }}</p>
				<p>出版日期: {{ book.publishDate }}</p>
			</view>
			<view class="book-recommendation">
				<p>推荐值: {{ book.recommendationScore }}%</p>
				<p>推荐: {{ book.recommendations }}</p>
				<p>一般: {{ book.neutralReviews }}</p>
				<p>不行: {{ book.negativeReviews }}</p>
			</view>
		</view>
		<view class="action-buttons">
			<button class="add-to-shelf" @click="addToShelf">加入书架</button>
			<button class="read-book" @click="readBook">阅读此书</button>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';

const book = ref({
	cover: '',
	title: '',
	author: '',
	description: '',
	readers: 0,
	finishedReaders: 0,
	wordCount: '',
	publishDate: '',
	recommendationScore: 0,
	recommendations: 0,
	neutralReviews: 0,
	negativeReviews: 0
});

const books = [
	{
		id: 1,
		title: '坐看仙倾',
		author: '错哪儿了',
		cover: 'https://bookcover.yuewen.com/qdbimg/349573/1042444808/600.webp',
		description: '我是大学生，我迷路了，这里的人都叫我季少爷，我开始了解这个奇怪的世界。。',
		readers: 8089,
		finishedReaders: 172,
		wordCount: '16.3万字',
		publishDate: '2024年12月出版',
		recommendationScore: 83.9,
		recommendations: 35,
		neutralReviews: 10,
		negativeReviews: 5
	},
	{
		id: 2,
		title: '传说时代',
		author: '奥尔良烤鲟鱼堡',
		cover: 'https://bookcover.yuewen.com/qdbimg/349573/1042246156/600.webp',
		description: '这是一本关于传说时代的小说，讲述了古代文明的故事。',
		readers: 5000,
		finishedReaders: 100,
		wordCount: '12.5万字',
		publishDate: '2023年1月出版',
		recommendationScore: 85.2,
		recommendations: 40,
		neutralReviews: 8,
		negativeReviews: 2
	},
	{
		id: 3,
		title: '世界版本更新',
		author: '不落鱼',
		cover: 'https://bookcover.yuewen.com/qdbimg/349573/1042443001/600.webp',
		description: '这是一本关于未来世界的小说，探讨了科技与人性的关系。',
		readers: 7000,
		finishedReaders: 150,
		wordCount: '14.2万字',
		publishDate: '2022年6月出版',
		recommendationScore: 82.1,
		recommendations: 38,
		neutralReviews: 12,
		negativeReviews: 4
	},
	{
		id: 4,
		title: '剑出仙山',
		author: '南朝陈',
		cover: 'https://bookcover.yuewen.com/qdbimg/349573/1042433761/600.webp',
		description: '这是一本关于修仙的小说，讲述了主角如何修炼成仙的故事。',
		readers: 6000,
		finishedReaders: 120,
		wordCount: '15.1万字',
		publishDate: '2023年9月出版',
		recommendationScore: 84.5,
		recommendations: 42,
		neutralReviews: 10,
		negativeReviews: 3
	}
];

onLoad((options) => {
	const bookId = parseInt(options.id);
	const selectedBook = books.find(b => b.id === bookId);
	if (selectedBook) {
		book.value = selectedBook;
	} else {
		console.error('Book not found');
	}
});

const addToShelf = () => {
	// 假设有一个全局的书架列表
	let shelfList = JSON.parse(uni.getStorageSync('shelfList') || '[]');
	if (!shelfList.some(b => b.id === book.value.id)) {
		shelfList.push(book.value);
		uni.setStorageSync('shelfList', JSON.stringify(shelfList));
		console.log('加入书架:', book.value.title);
	} else {
		console.log('书籍已存在于书架中');
	}
};

const readBook = () => {
	navigateTo({
		url: `/pages/reader/reader?id=${book.value.id}`
	});
};
</script>

<style scoped>
.book-detail {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	background-color: #f9f9f9;
	min-height: 100vh;
	position: relative;
}

.book-cover img {
	width: 100%;
	max-width: 300px;
	border-radius: 10px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	margin-bottom: 20px;
}

.book-info {
	text-align: center;
	width: 80%;
	max-width: 600px;
}

.book-info h1 {
	font-size: 28px;
	margin-bottom: 10px;
	color: #333;
}

.book-info p {
	margin: 5px 0;
	color: #666;
}

.book-stats,
.book-recommendation {
	margin-top: 20px;
}

.book-stats p,
.book-recommendation p {
	margin: 5px 0;
}

.action-buttons {
	display: flex;
	justify-content: space-around;
	width: 100%;
	max-width: 600px;
	position: absolute;
	bottom: 20px;
}

.add-to-shelf,
.read-book {
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	color: white;
	font-size: 16px;
	cursor: pointer;
	transition: background-color 0.2s;
}

.add-to-shelf {
	background-color: #007aff;
}

.add-to-shelf:hover {
	background-color: #0056b3;
}

.read-book {
	background-color: #4caf50;
}

.read-book:hover {
	background-color: #45a049;
}
</style>