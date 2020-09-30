import { reactiveData } from "./reactive";

function Observer(data) {
  if (Array.isArray(data)) {
  } else {
    this.walk(data);
  }
}

Observer.prototype.walk = function (data) {
  Object.keys(data).forEach((key) => {
    let value = data[key];
    reactiveData(data, key, value);
  });
};

export default Observer;
