<template>
  <div>
    <p>data 属性：{{ test }}</p>
    <!-- <p>methods 方法调用：{{ test() }}</p> -->
    <button @click="handler">btn</button>
  </div>
</template>

<script>
export default {
  name: "TestComponent",
  data() {
    return {
      test: "这是来自 data 的字符串",
    };
  },
  methods: {
    /* eslint-disable-next-line vue/no-dupe-keys */
    test() {
      return "这是来自 methods 的函数";
    },
    handler() {
      console.log("handler...", this.test);
      //   this.test();
    },
  },
};
</script>

<style scoped>
p {
  font-size: 18px;
}
</style>
