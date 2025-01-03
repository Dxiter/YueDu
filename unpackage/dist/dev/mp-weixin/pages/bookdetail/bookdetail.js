"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "bookdetail",
  setup(__props) {
    const book = common_vendor.ref({
      cover: "",
      title: "",
      author: "",
      description: "",
      readers: 0,
      finishedReaders: 0,
      wordCount: "",
      publishDate: "",
      recommendationScore: 0,
      recommendations: 0,
      neutralReviews: 0,
      negativeReviews: 0
    });
    const books = [
      {
        id: 1,
        title: "坐看仙倾",
        author: "错哪儿了",
        cover: "https://bookcover.yuewen.com/qdbimg/349573/1042444808/600.webp",
        description: "我是大学生，我迷路了，这里的人都叫我季少爷，我开始了解这个奇怪的世界。。",
        readers: 8089,
        finishedReaders: 172,
        wordCount: "16.3万字",
        publishDate: "2024年12月出版",
        recommendationScore: 83.9,
        recommendations: 35,
        neutralReviews: 10,
        negativeReviews: 5
      },
      {
        id: 2,
        title: "传说时代",
        author: "奥尔良烤鲟鱼堡",
        cover: "https://bookcover.yuewen.com/qdbimg/349573/1042246156/600.webp",
        description: "这是一本关于传说时代的小说，讲述了古代文明的故事。",
        readers: 5e3,
        finishedReaders: 100,
        wordCount: "12.5万字",
        publishDate: "2023年1月出版",
        recommendationScore: 85.2,
        recommendations: 40,
        neutralReviews: 8,
        negativeReviews: 2
      },
      {
        id: 3,
        title: "世界版本更新",
        author: "不落鱼",
        cover: "https://bookcover.yuewen.com/qdbimg/349573/1042443001/600.webp",
        description: "这是一本关于未来世界的小说，探讨了科技与人性的关系。",
        readers: 7e3,
        finishedReaders: 150,
        wordCount: "14.2万字",
        publishDate: "2022年6月出版",
        recommendationScore: 82.1,
        recommendations: 38,
        neutralReviews: 12,
        negativeReviews: 4
      },
      {
        id: 4,
        title: "剑出仙山",
        author: "南朝陈",
        cover: "https://bookcover.yuewen.com/qdbimg/349573/1042433761/600.webp",
        description: "这是一本关于修仙的小说，讲述了主角如何修炼成仙的故事。",
        readers: 6e3,
        finishedReaders: 120,
        wordCount: "15.1万字",
        publishDate: "2023年9月出版",
        recommendationScore: 84.5,
        recommendations: 42,
        neutralReviews: 10,
        negativeReviews: 3
      }
    ];
    common_vendor.onLoad((options) => {
      const bookId = parseInt(options.id);
      const selectedBook = books.find((b) => b.id === bookId);
      if (selectedBook) {
        book.value = selectedBook;
      } else {
        console.error("Book not found");
      }
    });
    const addToShelf = () => {
      let shelfList = JSON.parse(common_vendor.index.getStorageSync("shelfList") || "[]");
      if (!shelfList.some((b) => b.id === book.value.id)) {
        shelfList.push(book.value);
        common_vendor.index.setStorageSync("shelfList", JSON.stringify(shelfList));
        console.log("加入书架:", book.value.title);
      } else {
        console.log("书籍已存在于书架中");
      }
    };
    const readBook = () => {
      navigateTo({
        url: `/pages/reader/reader?id=${book.value.id}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: book.value.cover,
        b: common_vendor.t(book.value.title),
        c: common_vendor.t(book.value.author),
        d: common_vendor.t(book.value.description),
        e: common_vendor.t(book.value.readers),
        f: common_vendor.t(book.value.finishedReaders),
        g: common_vendor.t(book.value.wordCount),
        h: common_vendor.t(book.value.publishDate),
        i: common_vendor.t(book.value.recommendationScore),
        j: common_vendor.t(book.value.recommendations),
        k: common_vendor.t(book.value.neutralReviews),
        l: common_vendor.t(book.value.negativeReviews),
        m: common_vendor.o(addToShelf),
        n: common_vendor.o(readBook)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1f19eef3"]]);
wx.createPage(MiniProgramPage);
