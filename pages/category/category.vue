<template>
  <view class="category">
    <scroll-view scroll-y class="category-list">
      <view v-for="(category, index) in categories" :key="index" class="category-item"
        :class="{ 'active': activeCategoryIndex === index }" @click="selectCategory(index)">
        {{ category.name }}
      </view>
    </scroll-view>
    <scroll-view scroll-y class="product-list">
      <view class="product-grid">
        <ProductCard v-for="(product, index) in filteredProducts" :key="index" :product="product"
          @click="navigateToProduct(product)" />
      </view>
    </scroll-view>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router'; // 引入路由
import { onLoad } from '@dcloudio/uni-app';
import ProductCard from '@/components/ProductCard.vue';

const router = useRouter(); // 初始化路由

const categories = ref([
  { name: '电子', id: 1 },
  { name: '家居', id: 2 },
  { name: '穿搭', id: 3 },
  { name: '食品', id: 4 },
  { name: '护肤', id: 5 },
  { name: '户外', id: 6 },
  { name: '运动', id: 7 }
]);

const products = ref([
  { id: 1, name: '智能手表', image: 'https://img1.360buyimg.com/n6/jfs/t1/186195/24/53696/30183/6752b70dFad2ea20f/6715c5e96e5dbce0.jpg', price: 999, categoryId: 1, state: '已售2.5k', marks: '好评95%' },
  { id: 2, name: '无线耳机', image: 'https://img1.360buyimg.com/n6/jfs/t1/173412/3/52978/42054/6751532cFcbd79444/6f8347598551d622.jpg', price: 499, categoryId: 1, state: '已售1.8k', marks: '好评90%' },
  { id: 3, name: '蓝牙音箱', image: 'https://img1.360buyimg.com/n6/jfs/t1/248167/8/26400/152717/67568723F9935c31a/4ee76cd2ff73ded9.jpg', price: 299, categoryId: 1, state: '已售1.2k', marks: '好评85%' },
  { id: 4, name: '新款手机', image: 'https://img1.360buyimg.com/n6/jfs/t1/212189/30/49772/97603/674d5e40F53f8d1f2/33ff4086f586a6c6.jpg', price: 2999, categoryId: 1, state: '已售3.5k', marks: '好评98%' },
  { id: 5, name: '智能手环', image: 'https://img1.360buyimg.com/n6/jfs/t1/176959/10/52427/48787/6752b726Fc3e5af01/ea48d02c6c1dd88f.jpg', price: 199, categoryId: 1, state: '已售1.5k', marks: '好评92%' },
  { id: 6, name: '游戏机', image: 'https://img1.360buyimg.com/n6/jfs/t1/132926/17/50106/76251/673d4370F6dca49cd/3031243f8ebb3400.jpg', price: 2499, categoryId: 1, state: '已售2.0k', marks: '好评88%' },


  { id: 7, name: '沙发', image: 'https://img1.360buyimg.com/n6/jfs/t1/176392/40/52198/126565/67551491Fd9a1c948/8e2cb50e52710475.jpg', price: 1999, categoryId: 2, state: '已售500', marks: '好评94%' },
  { id: 8, name: '餐桌', image: 'https://img1.360buyimg.com/n6/jfs/t1/202685/6/51436/140220/674ed074F234bc603/609686cf0209cb15.jpg', price: 2999, categoryId: 2, state: '已售400', marks: '好评91%' },
  { id: 9, name: '椅子', image: 'https://img1.360buyimg.com/n6/jfs/t1/196327/23/51004/150549/674875eaF8ff9414a/2e9c82bceb5e899f.jpg', price: 99, categoryId: 2, state: '已售600', marks: '好评89%' },
  { id: 10, name: '书架', image: 'https://img1.360buyimg.com/n6/jfs/t1/238340/23/13295/136874/65ebc9d2F3cb0ce1c/35abcb958bd622c1.jpg', price: 499, categoryId: 2, state: '已售300', marks: '好评87%' },
  { id: 11, name: '衣柜', image: 'https://img1.360buyimg.com/n6/jfs/t1/160178/37/50961/78796/67402243F6f8d9bbc/81220d6f3d3c38a5.jpg', price: 799, categoryId: 2, state: '已售450', marks: '好评93%' },
  { id: 12, name: '梳妆台', image: 'https://img1.360buyimg.com/n6/jfs/t1/185575/35/51269/89215/6729c4caF7c0d0676/d8a1fffe5d6c7e57.jpg', price: 1499, categoryId: 2, state: '已售350', marks: '好评90%' },


  { id: 13, name: 'T恤', image: 'https://img1.360buyimg.com/n6/jfs/t1/217841/20/50604/64332/67500bc2F903060e4/bc1b23cd0d5512ad.jpg', price: 99, categoryId: 3, state: '已售800', marks: '好评96%' },
  { id: 14, name: '衬衫', image: 'https://img1.360buyimg.com/n6/jfs/t1/243231/29/8805/77723/663c618bF4141ef56/5490f7bca29ab607.jpg', price: 149, categoryId: 3, state: '已售700', marks: '好评94%' },
  { id: 15, name: '裤子', image: 'https://img1.360buyimg.com/n6/jfs/t1/173171/16/52626/122800/6753372fFdf9c83f3/2023d5881a972872.jpg', price: 249, categoryId: 3, state: '已售600', marks: '好评92%' },
  { id: 16, name: '裙子', image: 'https://img1.360buyimg.com/n6/jfs/t1/218541/32/51191/114614/67541280Fe46e9045/0e248a320eacfb6a.jpg', price: 199, categoryId: 3, state: '已售500', marks: '好评90%' },
  { id: 17, name: '羽绒服', image: 'https://img1.360buyimg.com/n6/jfs/t1/216595/31/53084/130569/67568e54F7a511fb6/62930b700dbc84c3.jpg', price: 499, categoryId: 3, state: '已售450', marks: '好评88%' },
  { id: 18, name: '毛衣', image: 'https://img1.360buyimg.com/n6/jfs/t1/215933/36/52266/40989/6751d66fF980e2256/269dc6e95593085e.jpg', price: 299, categoryId: 3, state: '已售350', marks: '好评86%' },


  { id: 19, name: '牛奶', image: 'https://img1.360buyimg.com/n6/jfs/t1/249814/7/26206/172852/6749b443F829e0fc7/77e5d902aeba8460.jpg', price: 10, categoryId: 4, state: '已售1000', marks: '好评95%' },
  { id: 20, name: '面包', image: 'https://img1.360buyimg.com/n6/jfs/t1/222788/18/49272/214428/67404bfdF21406101/d07b2d6ca82839e0.jpg', price: 5, categoryId: 4, state: '已售1200', marks: '好评93%' },
  { id: 21, name: '咖啡', image: 'https://img13.360buyimg.com/n7/jfs/t1/195403/26/54577/197479/67501d79F20cb6174/fa4132d1d68f2613.jpg.avif', price: 8, categoryId: 4, state: '已售800', marks: '好评91%' },
  { id: 22, name: '茶', image: 'https://img12.360buyimg.com/n7/jfs/t1/228534/40/14026/118742/65f01108F8e92d14d/a5d83fcdd4c0dc0f.jpg.avif', price: 6, categoryId: 4, state: '已售900', marks: '好评89%' },
  { id: 23, name: '水', image: 'https://img13.360buyimg.com/n7/jfs/t1/239498/25/9925/105833/6673cbdfFf67cdcc7/41b34bf83a0661f4.jpg.avif', price: 3, categoryId: 4, state: '已售1500', marks: '好评96%' },


  { id: 24, name: '兰蔻小黑瓶', image: 'https://img13.360buyimg.com/n1/jfs/t1/248055/15/28797/203413/67566de0F108214e3/1202d54fe8761d7d.jpg.avif', price: 5, categoryId: 4, state: '已售665', marks: '好评96%' },
  { id: 25, name: 'DIOR真我女士香水', image: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/207209/9/43771/603314/67371743Fb438c958/475d6f37e1266f74.jpg', price: 50, categoryId: 5, state: '已售776', marks: '好评93%' },
  { id: 26, name: 'M.A.C口红', image: 'https://img14.360buyimg.com/n7/jfs/t1/203881/23/52580/89515/6752a55aF7011946f/4cc75617291b3b63.jpg.avif', price: 5, categoryId: 5, state: '已售1888', marks: '好评94%' },
  { id: 27, name: '3CE眼影', image: 'https://img11.360buyimg.com/n1/jfs/t1/184363/25/54615/124287/6752b016Fa61d0179/176be1d5f525a41f.jpg.avif', price: 5, categoryId: 5, state: '已售1234', marks: '好评88%' },
  { id: 28, name: '红卫羊脂皂', image: 'https://img13.360buyimg.com/n1/jfs/t1/207009/37/49256/125386/6756bd4aF901a7ef3/4a270183fec3e535.jpg.avif', price: 5, categoryId: 5, state: '已售2345', marks: '好评90%' },
  { id: 29, name: '氨基酸洗发水', image: 'https://img11.360buyimg.com/n1/jfs/t1/195332/29/53553/116116/674ea023F0e5d09d4/01ba15ff7f0aeb6a.jpg.avif', price: 50, categoryId: 5, state: '已售1225', marks: '好评91%' },
  { id: 30, name: 'GUCT沐浴露', image: 'https://img14.360buyimg.com/n1/jfs/t1/227688/34/19559/64494/665d599bFc5f10e9e/d946c5369d3474d2.jpg', price: 50, categoryId: 5, state: '已售991', marks: '好评99%' },

  { id: 31, name: '米家保温杯', image: 'https://img13.360buyimg.com/n1/jfs/t1/179843/30/52761/124532/6752c5d0F805ceb02/8b17bcbe091bf553.jpg.avif', price: 40, categoryId: 6, state: '已售691', marks: '好评94%' },
  { id: 32, name: '海澜之家衬衫', image: 'https://img11.360buyimg.com/n1/s350x467_jfs/t1/219556/32/48703/122298/67404763Fa26f60e4/2d90944cdab795fc.jpg!cc_350x467.avif', price: 40, categoryId: 6, state: '已售1664', marks: '好评93%' },
  { id: 33, name: '回力雪地靴', image: 'https://img12.360buyimg.com/n1/jfs/t1/110306/12/51092/171100/67107537F776c7da3/66b1a9c92add13c4.jpg.avif', price: 40, categoryId: 6, state: '已售1871', marks: '好评91%' },
  { id: 34, name: '欧米茄手表', image: 'https://img14.360buyimg.com/n1/jfs/t1/222626/39/50533/87072/675150deFa1052664/3952ebbe25c62cb2.jpg.avif', price: 40, categoryId: 6, state: '已售1971', marks: '好评94%' },
  { id: 35, name: '途加行李箱', image: 'https://img14.360buyimg.com/n1/jfs/t1/199835/32/50037/9085/67516eb2Ffcdb8911/8d6d29714a213ab3.jpg.avif', price: 40, categoryId: 6, state: '已售765', marks: '好评95%' },
  { id: 36, name: '天山翠玉手镯', image: 'https://img12.360buyimg.com/n1/jfs/t1/181397/4/54698/47785/6752b34bF28a3e75c/6d0acaa1ae6f2a7c.jpg.avif', price: 40, categoryId: 6, state: '已售778', marks: '好评97%' },

  { id: 37, name: '周大生银项链', image: 'https://img13.360buyimg.com/n1/jfs/t1/230045/25/9537/31682/658145f3F3900be4a/4abd742046deb09e.jpg.avif', price: 40, categoryId: 7, state: '已售899', marks: '好评96%' },
  { id: 38, name: 'DR钻戒', image: 'https://img10.360buyimg.com/n1/jfs/t1/188127/28/54293/72795/67519081F250bf066/2aa85e1bb529f4f3.jpg.avif', price: 40, categoryId: 7, state: '已售178', marks: '好评97%' },
  { id: 39, name: '吉祥三宝平安扣', image: 'https://img10.360buyimg.com/n1/jfs/t1/245938/4/27340/115594/67569e2aF9a6b131d/21664b738af1ea88.jpg.avif', price: 40, categoryId: 7, state: '已售557', marks: '好评93%' },
  { id: 40, name: '迪桑特羽绒服', image: 'https://img12.360buyimg.com/n1/jfs/t1/231946/7/31916/72924/67568c99F79b505ff/7102394d07f80aa2.jpg.avif', price: 40, categoryId: 7, state: '已售913', marks: '好评90%' },
  { id: 41, name: '伯希和冲锋衣', image: 'https://img12.360buyimg.com/n1/s350x467_jfs/t1/223904/13/47681/105879/6752bb19F00840023/465f1e640817732a.jpg!cc_350x467.avif', price: 40, categoryId: 7, state: '已售876', marks: '好评99%' },
  { id: 42, name: '龙牙龙峰战术鞋', image: 'https://img14.360buyimg.com/n1/jfs/t1/249348/3/28763/100624/67565471F74ff2253/4888e1ea22347059.jpg.avif', price: 40, categoryId: 7, state: '已售763', marks: '好评92%' },
])

const activeCategoryIndex = ref(0);

const filteredProducts = computed(() => {
  const filtered = products.value.filter(product => product.categoryId === categories.value[activeCategoryIndex.value].id);
  return filtered;
});

const selectCategory = (index) => {
  activeCategoryIndex.value = index;
};

const navigateToProduct = (product) => {
  uni.navigateTo({
    url: `/pages/product/product?id=${product.id}`
  });
};

onLoad((options) => {
  if (options.id) {
    const categoryId = parseInt(options.id, 10);
    const index = categories.value.findIndex(category => category.id === categoryId);
    if (index !== -1) {
      activeCategoryIndex.value = index;
    }
  }
});
</script>

<style scoped>
.category {
  display: flex;
  height: 100vh;
}

.category-list {
  width: 200rpx;
  background-color: #f5f5f5;
  border-right: 1rpx solid #ddd;
}

.category-item {
  position: relative;
  /* 添加相对定位 */
  padding: 20rpx;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;
}

.category-item.active {
  background-color: #E6F2FF;
  font-weight: bold;
  color: #007AFF;
}

@keyframes slideIn {
  from {
    width: 0;
    left: 50%;
  }

  to {
    width: 100%;
    left: 0;
  }
}

.category-item.active::after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4rpx;
  /* 蓝条的高度 */
  background-color: rgb(61, 61, 169);
  /* 蓝条的颜色 */
  animation: slideIn 0.3s ease forwards;
  /* 应用动画 */
}

.product-list {
  flex: 1;
  padding: 20rpx;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200rpx, 1fr));
  gap: 20rpx;
}
</style>