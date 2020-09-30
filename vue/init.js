import { proxyData } from "./proxy";
import observe from "./observe";

/**
 * 初始化状态
 * @param {Object} vm
 */
function initState(vm) {
  let options = vm.$options;

  if (options.data) {
    initData(vm);
  }
}

/**
 * 初始化Data
 * @param {Object}} vm 构造函数
 */
function initData(vm) {
  let data = vm.$options.data;
  data = vm.$data = typeof data === "function" ? data.call(this) : data || {};

  Object.keys(data).map((key) => {
    proxyData(vm, "$data", key);
  });

  // 观察data
  observe(vm.$data);
}

export { initState };
