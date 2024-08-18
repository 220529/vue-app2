<!-- ComponentB.vue -->
<template>
  <div>
    <h2>组件 B</h2>
    <p>从组件 A 收到的消息: {{ message }}</p>
  </div>
</template>

<script>
import { EventBus } from "./EventBus.js";

export default {
  data() {
    return {
      message: "",
    };
  },
  created() {
    console.log("EventBus", EventBus);

    EventBus.on("messageFromA", (msg) => {
      this.message = msg;
    });
  },
};
</script>
