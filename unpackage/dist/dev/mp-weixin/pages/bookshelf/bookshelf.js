"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "bookshelf",
  setup(__props) {
    const searchQuery = common_vendor.ref("");
    const books = common_vendor.ref([]);
    common_vendor.onMounted(() => {
      loadBooks();
    });
    const loadBooks = () => {
      if (books.value.length > 0)
        return;
      const shelfList = JSON.parse(common_vendor.index.getStorageSync("shelfList") || "[]");
      books.value = shelfList;
    };
    const filteredBooks = common_vendor.computed(() => {
      return books.value.filter((book) => book.title.toLowerCase().includes(searchQuery.value.toLowerCase()));
    });
    const addNewBook = () => {
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
    };
    const deleteBook = (bookId) => {
      books.value = books.value.filter((book) => book.id !== bookId);
      common_vendor.index.setStorageSync("shelfList", JSON.stringify(books.value));
    };
    return (_ctx, _cache) => {
      return {
        a: searchQuery.value,
        b: common_vendor.o(($event) => searchQuery.value = $event.detail.value),
        c: common_vendor.f(filteredBooks.value, (book, index, i0) => {
          return {
            a: book.cover,
            b: book.title,
            c: common_vendor.t(book.title),
            d: "/pages/bookdetail/bookdetail?id=" + book.id,
            e: common_vendor.o(($event) => deleteBook(book.id), index),
            f: index
          };
        }),
        d: common_vendor.o(addNewBook)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-babe43ef"]]);
wx.createPage(MiniProgramPage);
