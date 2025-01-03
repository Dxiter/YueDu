<template>
  <div class="voicebook">
    <header>
      <h1>有声书</h1>
      <input type="text" placeholder="搜索" v-model="searchQuery" />
      <button @click="filterCategory">分类</button>
    </header>

    <section class="recommend">
      <h2>为你推荐</h2>
      <div class="grid">
        <div v-for="item in recommended" :key="item.id" class="card">
          <img :src="item.image" :alt="item.title" />
          <p>{{ item.title }}</p>
        </div>
      </div>
      <button @click="refreshRecommended">换一批</button>
    </section>

    <section class="hot-list">
      <h2>热听榜</h2>
      <div class="list">
        <div v-for="(item, index) in hotList" :key="item.id" class="list-item">
          <span>{{ index + 1 }}</span>
          <img :src="item.image" :alt="item.title" />
          <p>{{ item.title }}</p>
        </div>
      </div>
      <button @click="viewMore">查看完整热听榜</button>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const searchQuery = ref('');
const recommended = ref([
  { id: 1, image: 'https://bookcover.yuewen.com/qdbimg/349573/1042556182/600.webp', title: '有声书1' },
  { id: 2, image: 'https://bookcover.yuewen.com/qdbimg/349573/1042556182/600.webp', title: '有声书2' },
  // 更多推荐有声书数据...
]);
const hotList = ref([
  { id: 1, image: 'https://bookcover.yuewen.com/qdbimg/349573/1042556182/600.webp', title: '热听书1' },
  { id: 2, image: 'https://bookcover.yuewen.com/qdbimg/349573/1042556182/600.webp', title: '热听书2' },
  { id: 3, image: 'https://bookcover.yuewen.com/qdbimg/349573/1042556182/600.webp', title: '热听书3' },
  { id: 4, image: 'https://bookcover.yuewen.com/qdbimg/349573/1042556182/600.webp', title: '热听书4' },
  { id: 5, image: 'https://bookcover.yuewen.com/qdbimg/349573/1042556182/600.webp', title: '热听书5' },
  { id: 6, image: 'https://bookcover.yuewen.com/qdbimg/349573/1042556182/600.webp', title: '热听书6' },
  // 更多热听榜数据...
]);

const filterCategory = () => {
  // 分类过滤逻辑
};

const refreshRecommended = () => {
  // 刷新推荐有声书逻辑
};

const viewMore = () => {
  // 查看完整热听榜逻辑
};
</script>

<style scoped>
.voicebook {
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
  margin: 0 10px;
  padding: 5px;
}

header button {
  padding: 5px 10px;
}

.recommend,
.hot-list {
  margin-bottom: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.list {
  display: flex;
  flex-direction: column;
}

.list-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.list-item span {
  width: 30px;
  text-align: center;
}

.list-item img {
  width: 50px;
  height: 50px;
  margin: 0 10px;
  border-radius: 5px;
}
</style>