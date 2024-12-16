import { createRouter, createWebHistory } from 'vue-router';
import Category from '@/pages/category/category.vue';
import Product from '@/pages/product/product.vue';

const routes = [
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/product/:productId',
    name: 'Product',
    component: Product
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;