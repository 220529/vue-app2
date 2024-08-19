<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increaseCount">Increase Count</button>
  </div>
</template>

<script>
export default {
  name: "TestComponent",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increaseCount() {
      this.count += 1;
    },
  },
  mounted() {
    console.log("Component mounted. Initial count:", this.count);
  },
  updated() {
    console.log("Component updated. Current count:", this.count);

    // 在 updated 钩子中修改数据，可能导致死循环
    if (this.count < 10) {
      this.count += 1; // 这行代码会导致不断更新
      console.log("Incremented count in updated. New count:", this.count);
    }
  },
};
</script>

<style scoped>
p {
  font-size: 18px;
}
</style>
