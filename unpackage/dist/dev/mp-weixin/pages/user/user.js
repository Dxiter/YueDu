"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "user",
  setup(__props) {
    const store = common_vendor.useStore();
    const isLogin = common_vendor.computed(() => store.getters.getLoginStatus);
    const nickname = common_vendor.ref("");
    const checkLoginStatus = () => {
      if (!isLogin.value) {
        common_vendor.index.navigateTo({ url: "/pages/user/login" });
      } else {
        fetchUserProfile();
      }
    };
    const fetchUserProfile = () => {
      common_vendor.index.request({
        url: "http://localhost:8080/api/user/profile",
        method: "GET",
        header: {
          "Authorization": "Bearer " + store.state.token
        },
        success: (res) => {
          console.log("后端返回的数据:", res.data);
          if (res.data && res.data.nickname) {
            nickname.value = res.data.nickname;
          } else {
            errorMessage.value = "获取用户信息失败，请重试";
          }
        },
        fail: () => {
          errorMessage.value = "网络请求失败，请重试";
        }
      });
    };
    common_vendor.onMounted(() => {
      checkLoginStatus();
    });
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_assets._imports_1,
        c: common_assets._imports_2,
        d: common_assets._imports_3,
        e: common_assets._imports_4,
        f: common_assets._imports_5,
        g: common_assets._imports_6,
        h: common_assets._imports_7
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"]]);
wx.createPage(MiniProgramPage);
