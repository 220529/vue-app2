<!-- ComponentA.vue -->
<template>
  <div>
    <h2>组件 A</h2>
    <button @click="sendMessage">发送消息给组件 B</button>
  </div>
</template>

<script>
import { EventBus } from "./EventBus.js";

export default {
  methods: {
    sendMessage() {
      EventBus.emit("messageFromA", "来自组件 A 的消息");
    },
  },
};
</script>
