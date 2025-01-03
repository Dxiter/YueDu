<!-- filepath: /d:/CpApp/Codes/MyProjectForUniApp/UniShop/pages/bookshelf/bookshelf.vue -->
<template>
  <view class="bookshelf">
    <header>
      <h1>书架</h1>
      <input v-model="searchQuery" placeholder="搜索书籍" />
    </header>
    <view class="book-list">
      <view v-for="(book, index) in filteredBooks" :key="index" class="book-card">
        <navigator :url="'/pages/bookdetail/bookdetail?id=' + book.id">
          <img :src="book.cover" :alt="book.title" />
          <p>{{ book.title }}</p>
        </navigator>
        <button class="delete-button" @click="deleteBook(book.id)">删除</button>
      </view>
      <view class="book-card-add-new" @click="addNewBook">+</view>
    </view>
  </view>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const searchQuery = ref('');
const books = ref([]);

onMounted(() => {
  loadBooks();
});

const loadBooks = () => {
  // 检查是否有缓存的数据
  if (books.value.length > 0) return;

  const shelfList = JSON.parse(uni.getStorageSync('shelfList') || '[]');
  books.value = shelfList;
};

const filteredBooks = computed(() => {
  return books.value.filter(book => book.title.toLowerCase().includes(searchQuery.value.toLowerCase()));
});

const addNewBook = () => {
  // 跳转到首页
  uni.switchTab({
    url: '/pages/index/index'
  });
};

const deleteBook = (bookId) => {
  books.value = books.value.filter(book => book.id !== bookId);
  uni.setStorageSync('shelfList', JSON.stringify(books.value));
};
</script>

<style scoped>
.bookshelf {
  padding: 20px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

header h1 {
  font-size: 24px;
}

header input {
  flex: 1;
  margin-left: 10px;
  padding: 5px;
}

.book-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.book-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  text-align: center;
  padding: 10px;
  position: relative;
}

.book-card img {
  width: 100%;
  border-radius: 5px;
  margin-bottom: 5px;
}

.book-card-add-new {
  display: flex;
  height: 190px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  color: #aaa;
}

.delete-button {
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgb(92, 26, 226);
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>