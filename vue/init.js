import { proxyData } from "./proxy";

function initState(vm) {
  let options = vm.$options;

  if (options.data) {
    initData(vm);
  }
}

function initData(vm) {
  let data = vm.$options.data;
  data = vm.$data = typeof data === "function" ? data.call(this) : data || {};

  Object.keys(data).map((key) => {
    proxyData(vm, "$data", key);
  });
}

export { initState };
