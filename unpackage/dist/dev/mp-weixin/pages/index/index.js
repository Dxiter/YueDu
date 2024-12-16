"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const banners = common_vendor.ref([
      { image: "https://via.placeholder.com/750x300?text=Banner+1" },
      { image: "https://via.placeholder.com/750x300?text=Banner+2" },
      { image: "https://via.placeholder.com/750x300?text=Banner+3" }
    ]);
    const categories = common_vendor.ref([
      { id: 1, name: "电子", icon: "https://via.placeholder.com/100?text=Electronics" },
      { id: 2, name: "家居", icon: "https://via.placeholder.com/100?text=Furniture" },
      { id: 3, name: "服装", icon: "https://via.placeholder.com/100?text=Clothing" },
      { id: 4, name: "食品", icon: "https://via.placeholder.com/100?text=Food" }
    ]);
    const recommendedProducts = common_vendor.ref([
      { id: 1, name: "智能手表", image: "https://via.placeholder.com/200?text=Watch", price: 999 },
      { id: 2, name: "无线耳机", image: "https://via.placeholder.com/200?text=Headphones", price: 499 },
      { id: 3, name: "蓝牙音箱", image: "https://via.placeholder.com/200?text=Speaker", price: 299 }
    ]);
    const newProducts = common_vendor.ref([
      { id: 4, name: "新款手机", image: "https://via.placeholder.com/200?text=Phone", price: 2999 },
      { id: 5, name: "智能手环", image: "https://via.placeholder.com/200?text=Wristband", price: 199 },
      { id: 6, name: "游戏机", image: "https://via.placeholder.com/200?text=Gaming+Console", price: 2499 }
    ]);
    const promotions = common_vendor.ref([
      { title: "双11大促", description: "全场五折", image: "https://via.placeholder.com/750x200?text=Double+11", url: "/pages/promotion/promotion?id=1" },
      { title: "感恩节特惠", description: "买一赠一", image: "https://via.placeholder.com/750x200?text=Thanksgiving", url: "/pages/promotion/promotion?id=2" }
    ]);
    const navigateToCategory = (categoryId) => {
      common_vendor.index.switchTab({
        url: `/pages/category/category?id=${categoryId}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(banners.value, (banner, index, i0) => {
          return {
            a: banner.image,
            b: index
          };
        }),
        b: common_vendor.f(categories.value, (category, index, i0) => {
          return {
            a: category.icon,
            b: common_vendor.t(category.name),
            c: index,
            d: common_vendor.o(($event) => navigateToCategory(category.id), index)
          };
        }),
        c: common_vendor.f(recommendedProducts.value, (product, index, i0) => {
          return {
            a: product.image,
            b: common_vendor.t(product.name),
            c: common_vendor.t(product.price),
            d: index,
            e: "/pages/product/product?id=" + product.id
          };
        }),
        d: common_vendor.f(newProducts.value, (product, index, i0) => {
          return {
            a: product.image,
            b: common_vendor.t(product.name),
            c: common_vendor.t(product.price),
            d: index,
            e: "/pages/product/product?id=" + product.id
          };
        }),
        e: common_vendor.f(promotions.value, (promotion, index, i0) => {
          return {
            a: promotion.image,
            b: common_vendor.t(promotion.title),
            c: common_vendor.t(promotion.description),
            d: index,
            e: promotion.url
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
