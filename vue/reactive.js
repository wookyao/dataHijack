function reactiveData(data, key, value) {
  Object.defineProperty(data, key, {
    get() {
      console.log("数据监听", value);
      return value;
    },
    set(newVal) {
      value = newVal;
    },
  });
}

export { reactiveData };
