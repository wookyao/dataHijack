import Vue from "vue";

const vm = new Vue({
  data() {
    return {
      limit: 5,
      linkUrl: "http://www.baidu.com",
      userInfo: {
        age: 18,
        name: "小张",
      },
      tags: [
        {
          id: 1,
          label: "一般",
        },
      ],
    };
  },
});

console.group("-------- 获取 -----------");
console.dir(vm);
console.log(vm.$data.linkUrl, " => $data.linkUrl");
console.log(vm.linkUrl, " => linkUrl");
console.groupEnd();
console.group("--------- 设置 ---------");
vm.linkUrl = "www.taobao.com";
console.dir(vm);
console.log(vm.linkUrl, " => linkUrl");
console.groupEnd();
