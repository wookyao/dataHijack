import { proxyData } from "./proxy";

function initData(vm) {
  let data = vm.$options.data;
  data = vm.$data = typeof data === "function" ? data.call(this) : data || {};

  Object.keys(data).map((key) => {
    proxyData(vm, "$data", key);
  });
}

export { initData };
