// main.js
import App from './App'
import store from './store'; // 确保引入 store

// #ifndef VUE3
import Vue from 'vue';
// import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App,
  store
})
app.$mount('#app')
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(store) // 在 Vue 3 模式下挂载 store
  return {
    app
  }
}
// #endif