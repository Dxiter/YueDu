"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  ProductCard();
}
const ProductCard = () => "../../components/ProductCard.js";
const _sfc_main = {
  __name: "category",
  setup(__props) {
    common_vendor.useRouter();
    const categories = common_vendor.ref([
      { name: "电子", id: 1 },
      { name: "家居", id: 2 },
      { name: "服装", id: 3 },
      { name: "食品", id: 4 }
    ]);
    const products = common_vendor.ref([
      { id: 1, name: "智能手表", image: "https://via.placeholder.com/200?text=Watch", price: 999, categoryId: 1 },
      { id: 2, name: "无线耳机", image: "https://via.placeholder.com/200?text=Headphones", price: 499, categoryId: 1 },
      { id: 3, name: "蓝牙音箱", image: "https://via.placeholder.com/200?text=Speaker", price: 299, categoryId: 1 },
      { id: 4, name: "新款手机", image: "https://via.placeholder.com/200?text=Phone", price: 2999, categoryId: 1 },
      { id: 5, name: "智能手环", image: "https://via.placeholder.com/200?text=Wristband", price: 199, categoryId: 1 },
      { id: 6, name: "游戏机", image: "https://via.placeholder.com/200?text=Gaming+Console", price: 2499, categoryId: 1 },
      { id: 7, name: "沙发", image: "https://via.placeholder.com/200?text=Sofa", price: 1999, categoryId: 2 },
      { id: 8, name: "餐桌", image: "https://via.placeholder.com/200?text=Dining+Table", price: 2999, categoryId: 2 },
      { id: 9, name: "T恤", image: "https://via.placeholder.com/200?text=T-Shirt", price: 99, categoryId: 3 },
      { id: 10, name: "牛仔裤", image: "https://via.placeholder.com/200?text=Jeans", price: 199, categoryId: 3 },
      { id: 11, name: "牛奶", image: "https://via.placeholder.com/200?text=Milk", price: 10, categoryId: 4 },
      { id: 12, name: "面包", image: "https://via.placeholder.com/200?text=Bread", price: 5, categoryId: 4 }
    ]);
    const activeCategoryIndex = common_vendor.ref(0);
    const filteredProducts = common_vendor.computed(() => {
      const filtered = products.value.filter((product) => product.categoryId === categories.value[activeCategoryIndex.value].id);
      return filtered;
    });
    const selectCategory = (index) => {
      activeCategoryIndex.value = index;
    };
    const navigateToProduct = (product) => {
      common_vendor.index.navigateTo({
        url: `/pages/product/product?id=${product.id}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(categories.value, (category, index, i0) => {
          return {
            a: common_vendor.t(category.name),
            b: index,
            c: activeCategoryIndex.value === index ? 1 : "",
            d: common_vendor.o(($event) => selectCategory(index), index)
          };
        }),
        b: common_vendor.f(filteredProducts.value, (product, index, i0) => {
          return {
            a: index,
            b: common_vendor.o(($event) => navigateToProduct(product), index),
            c: "8145b772-0-" + i0,
            d: common_vendor.p({
              product
            })
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8145b772"]]);
wx.createPage(MiniProgramPage);
