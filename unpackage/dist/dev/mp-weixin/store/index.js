"use strict";
const common_vendor = require("../common/vendor.js");
const store = common_vendor.createStore({
  state: {
    cartItems: []
  },
  getters: {
    cartItems: (state) => state.cartItems,
    cartItemCount: (state) => state.cartItems.length,
    cartTotalPrice: (state) => state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  },
  mutations: {
    addToCart(state, item) {
      const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.cartItems.push({ ...item, quantity: item.quantity || 1 });
      }
    },
    removeFromCart(state, productId) {
      state.cartItems = state.cartItems.filter((item) => item.id !== productId);
    },
    updateCartItemQuantity(state, { productId, quantity }) {
      const item = state.cartItems.find((cartItem) => cartItem.id === productId);
      if (item) {
        item.quantity = quantity;
      }
    }
  },
  actions: {
    addToCart({ commit }, item) {
      commit("addToCart", item);
    },
    removeFromCart({ commit }, productId) {
      commit("removeFromCart", productId);
    },
    updateCartItemQuantity({ commit }, payload) {
      commit("updateCartItemQuantity", payload);
    }
  }
});
exports.store = store;
