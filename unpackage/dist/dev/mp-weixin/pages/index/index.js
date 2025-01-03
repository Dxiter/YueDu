"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const banners = common_vendor.ref([
      { image: "https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/2a921eefb0ad96193657168c5f7eb6a7.jpg" },
      { image: "https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/a57f73a65bbddb51e6f3512cbb2aa1b0.jpg" },
      { image: "https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/119db9a8899a5a106b750229c0db0408.jpg" }
    ]);
    const categories = common_vendor.ref([
      { id: 1, name: "玄幻", icon: "../../static/icon_pic/long.png" },
      { id: 2, name: "都市", icon: "../../static/icon_pic/dushi.png" },
      { id: 3, name: "战争", icon: "../../static/icon_pic/dapao.png" },
      { id: 4, name: "悬疑", icon: "../../static/icon_pic/kongbu.png" }
    ]);
    const hotSearch = common_vendor.ref([
      { id: 1, image: "https://bookcover.yuewen.com/qdbimg/349573/1042444808/600.webp", title: "2024 热搜趋势", detail: "在这些书里看见世界" },
      { id: 2, image: "https://bookcover.yuewen.com/qdbimg/349573/1042246156/600.webp", title: "清明上河图密码", detail: "连续在榜8天" },
      { id: 3, image: "https://bookcover.yuewen.com/qdbimg/349573/1042443001/600.webp", title: "第一性原理", detail: "6444 人在搜" }
    ]);
    const risingList = common_vendor.ref([
      { id: 1, image: "https://bookcover.yuewen.com/qdbimg/349573/1042444808/600.webp", title: "我们为什么而活", detail: "本周超5千人在读" },
      { id: 2, image: "https://bookcover.yuewen.com/qdbimg/349573/1042246156/600.webp", title: "越过山丘", detail: "累计在榜12天" },
      { id: 3, image: "https://bookcover.yuewen.com/qdbimg/349573/1042443001/600.webp", title: "职场十年", detail: "打工人的蜕变之旅" }
    ]);
    const recommendedBooks = common_vendor.ref([
      {
        id: 1,
        title: "坐看仙倾",
        author: "错哪儿了",
        cover: "https://bookcover.yuewen.com/qdbimg/349573/1042444808/600.webp"
      },
      {
        id: 2,
        title: "传说时代",
        author: "奥尔良烤鲟鱼堡",
        cover: "https://bookcover.yuewen.com/qdbimg/349573/1042246156/600.webp"
      },
      {
        id: 3,
        title: "世界版本更新",
        author: "不落鱼",
        cover: "https://bookcover.yuewen.com/qdbimg/349573/1042443001/600.webp"
      },
      {
        id: 4,
        title: "剑出仙山",
        author: "南朝陈",
        cover: "https://bookcover.yuewen.com/qdbimg/349573/1042433761/600.webp"
      }
    ]);
    const viewMoreHotSearch = () => {
      alert("查看热搜榜功能开发中...");
    };
    const viewMoreRisingList = () => {
      alert("查看飙升榜功能开发中...");
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
            d: common_vendor.o(($event) => _ctx.navigateToCategory(category.id), index)
          };
        }),
        c: common_vendor.f(recommendedBooks.value, (book, index, i0) => {
          return {
            a: book.cover,
            b: common_vendor.t(book.author),
            c: index,
            d: "/pages/bookdetail/bookdetail?id=" + book.id
          };
        }),
        d: common_vendor.f(hotSearch.value, (item, k0, i0) => {
          return {
            a: item.image,
            b: item.title,
            c: common_vendor.t(item.title),
            d: common_vendor.t(item.detail),
            e: item.id,
            f: "/pages/bookdetail/bookdetail?id=" + item.id
          };
        }),
        e: common_vendor.o(viewMoreHotSearch),
        f: common_vendor.f(risingList.value, (item, k0, i0) => {
          return {
            a: item.image,
            b: item.title,
            c: common_vendor.t(item.title),
            d: common_vendor.t(item.detail),
            e: item.id,
            f: "/pages/bookdetail/bookdetail?id=" + item.id
          };
        }),
        g: common_vendor.o(viewMoreRisingList)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
