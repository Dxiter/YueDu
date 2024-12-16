"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  __name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const handleClick = () => {
      emit("click", props.product);
    };
    return (_ctx, _cache) => {
      return {
        a: __props.product.image,
        b: common_vendor.t(__props.product.name),
        c: common_vendor.t(__props.product.price),
        d: common_vendor.o(handleClick)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fe52aa40"]]);
wx.createComponent(Component);
