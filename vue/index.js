import { initData } from "./init";

function Vue(options) {
  this._int(options);
}

Vue.prototype._int = function (options) {
  const vm = this;
  vm.$options = options;
  initData(vm);
};

export default Vue;
