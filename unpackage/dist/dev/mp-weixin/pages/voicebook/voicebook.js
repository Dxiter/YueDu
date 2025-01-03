"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "voicebook",
  setup(__props) {
    const searchQuery = common_vendor.ref("");
    const recommended = common_vendor.ref([
      { id: 1, image: "https://bookcover.yuewen.com/qdbimg/349573/1042556182/600.webp", title: "有声书1" },
      { id: 2, image: "https://bookcover.yuewen.com/qdbimg/349573/1042556182/600.webp", title: "有声书2" }
      // 更多推荐有声书数据...
    ]);
    const hotList = common_vendor.ref([
      { id: 1, image: "https://bookcover.yuewen.com/qdbimg/349573/1042556182/600.webp", title: "热听书1" },
      { id: 2, image: "https://bookcover.yuewen.com/qdbimg/349573/1042556182/600.webp", title: "热听书2" },
      { id: 3, image: "https://bookcover.yuewen.com/qdbimg/349573/1042556182/600.webp", title: "热听书3" },
      { id: 4, image: "https://bookcover.yuewen.com/qdbimg/349573/1042556182/600.webp", title: "热听书4" },
      { id: 5, image: "https://bookcover.yuewen.com/qdbimg/349573/1042556182/600.webp", title: "热听书5" },
      { id: 6, image: "https://bookcover.yuewen.com/qdbimg/349573/1042556182/600.webp", title: "热听书6" }
      // 更多热听榜数据...
    ]);
    const filterCategory = () => {
    };
    const refreshRecommended = () => {
    };
    const viewMore = () => {
    };
    return (_ctx, _cache) => {
      return {
        a: searchQuery.value,
        b: common_vendor.o(($event) => searchQuery.value = $event.detail.value),
        c: common_vendor.o(filterCategory),
        d: common_vendor.f(recommended.value, (item, k0, i0) => {
          return {
            a: item.image,
            b: item.title,
            c: common_vendor.t(item.title),
            d: item.id
          };
        }),
        e: common_vendor.o(refreshRecommended),
        f: common_vendor.f(hotList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(index + 1),
            b: item.image,
            c: item.title,
            d: common_vendor.t(item.title),
            e: item.id
          };
        }),
        g: common_vendor.o(viewMore)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7ad0658e"]]);
wx.createPage(MiniProgramPage);
