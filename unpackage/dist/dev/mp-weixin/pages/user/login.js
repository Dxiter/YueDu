"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const store = common_vendor.useStore();
    const username = common_vendor.ref("");
    const password = common_vendor.ref("");
    const errorMessage = common_vendor.ref("");
    const handleLogin = () => {
      if (!username.value || !password.value) {
        errorMessage.value = "用户名和密码不能为空";
        return;
      }
      common_vendor.index.request({
        url: "http://localhost:8080/api/login",
        // 替换为你的后端接口地址
        method: "POST",
        data: {
          username: username.value,
          password: password.value
        },
        success: (res) => {
          console.log("后端返回的数据:", res.data);
          if (res.data.success) {
            store.dispatch("login", true);
            common_vendor.index.switchTab({ url: "/pages/user/user" });
          } else {
            errorMessage.value = res.data.message || "登录失败，请重试";
          }
        },
        fail: () => {
          errorMessage.value = "网络请求失败，请重试";
        }
      });
    };
    const moveRegister = () => {
      common_vendor.index.navigateTo({ url: "/pages/user/register" });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: username.value,
        b: common_vendor.o(($event) => username.value = $event.detail.value),
        c: password.value,
        d: common_vendor.o(($event) => password.value = $event.detail.value),
        e: common_vendor.o(handleLogin),
        f: common_vendor.o(moveRegister),
        g: errorMessage.value
      }, errorMessage.value ? {
        h: common_vendor.t(errorMessage.value)
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6163e5ce"]]);
wx.createPage(MiniProgramPage);
