"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "register",
  setup(__props) {
    const username = common_vendor.ref("");
    const password = common_vendor.ref("");
    const confirmPassword = common_vendor.ref("");
    const errorMessage = common_vendor.ref("");
    const successMessage = common_vendor.ref("");
    const handleRegister = () => {
      if (!username.value || !password.value || !confirmPassword.value) {
        errorMessage.value = "所有字段都不能为空";
        return;
      }
      if (password.value !== confirmPassword.value) {
        errorMessage.value = "密码和确认密码不一致";
        return;
      }
      common_vendor.index.request({
        url: "http://localhost:8080/api/register",
        // 替换为你的后端接口地址
        method: "POST",
        data: {
          username: username.value,
          password: password.value
        },
        success: (res) => {
          console.log("后端返回的数据:", res.data);
          if (res.data.success) {
            successMessage.value = res.data.message || "注册成功，请登录";
            errorMessage.value = "";
            username.value = "";
            password.value = "";
            confirmPassword.value = "";
            common_vendor.index.navigateTo({ url: "/pages/user/login" });
          } else {
            errorMessage.value = res.data.message || "注册失败，请重试";
            successMessage.value = "";
          }
        },
        fail: () => {
          errorMessage.value = "网络请求失败，请重试";
          successMessage.value = "";
        }
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: username.value,
        b: common_vendor.o(($event) => username.value = $event.detail.value),
        c: password.value,
        d: common_vendor.o(($event) => password.value = $event.detail.value),
        e: confirmPassword.value,
        f: common_vendor.o(($event) => confirmPassword.value = $event.detail.value),
        g: common_vendor.o(handleRegister),
        h: errorMessage.value
      }, errorMessage.value ? {
        i: common_vendor.t(errorMessage.value)
      } : {}, {
        j: successMessage.value
      }, successMessage.value ? {
        k: common_vendor.t(successMessage.value)
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fd534bf9"]]);
wx.createPage(MiniProgramPage);
