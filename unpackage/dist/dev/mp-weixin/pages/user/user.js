"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const wideValue = 20;
const _sfc_main = {
  data() {
    return {
      login: true,
      topPadding: 0,
      moveDistance: 0,
      // 当前产生的距离
      moveY: 0,
      // 拖拽时候的Y点
      startY: 0,
      // 初始位置的Y点
      wideValue,
      translateY: -1 * wideValue
      // 自身Y点
    };
  },
  onReady() {
    const SystemInfo = common_vendor.index.getWindowInfo();
    let statusBarHeight = SystemInfo.statusBarHeight;
    let titleBarHeight = common_vendor.index.getMenuButtonBoundingClientRect().height;
    this.topPadding = statusBarHeight + titleBarHeight;
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.login ? "/static/user_pic/p1.jpg" : "/static/user_pic/default.png",
    b: $data.login
  }, $data.login ? {} : {}, {
    c: $data.login
  }, $data.login ? {} : {}, {
    d: $data.topPadding + "px",
    e: $data.wideValue + "px",
    f: common_assets._imports_0,
    g: common_assets._imports_1,
    h: common_assets._imports_2,
    i: common_assets._imports_1,
    j: common_assets._imports_3,
    k: common_assets._imports_4,
    l: common_assets._imports_5,
    m: common_assets._imports_6,
    n: common_assets._imports_7,
    o: common_assets._imports_8,
    p: "translateY(" + $data.translateY + "px)"
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0f7520f0"]]);
wx.createPage(MiniProgramPage);
