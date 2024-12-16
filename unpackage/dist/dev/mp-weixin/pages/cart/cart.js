"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "cart",
  setup(__props) {
    const store = common_vendor.useStore();
    if (!store.getters) {
      console.error("Getters are undefined");
    }
    const cartItems = common_vendor.computed(() => store.getters.cartItems);
    const selectedItems = common_vendor.ref([]);
    const removeFromCart = (productId) => {
      store.commit("removeFromCart", productId);
      common_vendor.index.showToast({
        title: "已移除商品",
        icon: "success"
      });
    };
    const checkboxChange = (productId) => {
      if (selectedItems.value.includes(productId)) {
        selectedItems.value = selectedItems.value.filter((id) => id !== productId);
      } else {
        selectedItems.value.push(productId);
      }
    };
    const totalPrice = common_vendor.computed(() => {
      return cartItems.value.filter((item) => selectedItems.value.includes(item.id)).reduce((sum, item) => sum + item.price, 0);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: cartItems.value.length > 0
      }, cartItems.value.length > 0 ? {
        b: common_vendor.f(cartItems.value, (item, k0, i0) => {
          return {
            a: item.image,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.price),
            d: common_vendor.o(($event) => removeFromCart(item.id), item.id),
            e: item.id,
            f: selectedItems.value.includes(item.id),
            g: common_vendor.o(($event) => checkboxChange(item.id), item.id),
            h: item.id
          };
        })
      } : {}, {
        c: selectedItems.value.length > 0
      }, selectedItems.value.length > 0 ? {
        d: common_vendor.t(totalPrice.value)
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c91e7611"]]);
wx.createPage(MiniProgramPage);
