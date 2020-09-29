function proxyData(vm, vmKey, key) {
  Object.defineProperty(vm, key, {
    get() {
      return vm[vmKey][key];
    },
    set(newValue) {
      vm[vmKey][key] = newValue;
    },
  });
}

export { proxyData };
