<!-- ChildComponent.vue -->
<template>
  <div>
    <h3>子组件</h3>
    <p>{{ message }}</p>
    <button @click="sendMessageToParent">发送消息给父组件</button>
  </div>
</template>

<script>
export default {
  props: ["message", "childEvent"],
  methods: {
    sendMessageToParent() {
      console.log("....");

      this.childEvent("fdsflkjdfs");
      //   this.$emit("childEvent", "来自子组件的消息");
    },
  },
};
</script>
