"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "product",
  setup(__props) {
    const route = common_vendor.useRoute();
    const store = common_vendor.useStore();
    const productId = common_vendor.ref(route.query.id);
    const products = [
      { id: 1, name: "智能手表", image: "https://via.placeholder.com/200?text=Watch", price: 999 },
      { id: 2, name: "无线耳机", image: "https://via.placeholder.com/200?text=Headphones", price: 499 },
      { id: 3, name: "蓝牙音箱", image: "https://via.placeholder.com/200?text=Speaker", price: 299 },
      { id: 4, name: "新款手机", image: "https://via.placeholder.com/200?text=Phone", price: 2999 },
      { id: 5, name: "智能手环", image: "https://via.placeholder.com/200?text=Wristband", price: 199 },
      { id: 6, name: "游戏机", image: "https://via.placeholder.com/200?text=Gaming+Console", price: 2499 },
      { id: 7, name: "沙发", image: "https://via.placeholder.com/200?text=Sofa", price: 1999 },
      { id: 8, name: "餐桌", image: "https://via.placeholder.com/200?text=Dining+Table", price: 2999 },
      { id: 9, name: "T恤", image: "https://via.placeholder.com/200?text=T-Shirt", price: 99 },
      { id: 10, name: "牛仔裤", image: "https://via.placeholder.com/200?text=Jeans", price: 199 },
      { id: 11, name: "牛奶", image: "https://via.placeholder.com/200?text=Milk", price: 10 },
      { id: 12, name: "面包", image: "https://via.placeholder.com/200?text=Bread", price: 5 },
      { id: 13, name: "智能手表", image: "https://via.placeholder.com/200?text=Watch", price: 999 },
      { id: 14, name: "无线耳机", image: "https://via.placeholder.com/200?text=Headphones", price: 499 },
      { id: 15, name: "蓝牙音箱", image: "https://via.placeholder.com/200?text=Speaker", price: 299 }
    ];
    const product = common_vendor.ref({});
    const fetchProductDetails = () => {
      console.log("Fetching product details for ID:", productId.value);
      const foundProduct = products.find((p) => p.id === parseInt(productId.value));
      if (foundProduct) {
        product.value = foundProduct;
        console.log("Product found:", product.value);
      } else {
        console.error("Product not found");
      }
    };
    const addToCart = () => {
      store.dispatch("addToCart", product.value);
      common_vendor.index.showToast({
        title: "已添加到购物车",
        icon: "success"
      });
    };
    common_vendor.onMounted(() => {
      fetchProductDetails();
    });
    common_vendor.watch(
      () => route.query.id,
      (newId) => {
        productId.value = newId;
        fetchProductDetails();
      }
    );
    return (_ctx, _cache) => {
      return {
        a: product.value.image,
        b: product.value.image,
        c: common_vendor.t(product.value.name),
        d: common_vendor.t(product.value.price),
        e: common_vendor.o(addToCart)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-946a9793"]]);
wx.createPage(MiniProgramPage);
