<!-- ParentComponent.vue -->
<template>
  <div>
    <h2>父组件</h2>
    <ChildComponent :message="parentMessage" :childEvent="handleChildEvent" />
    <p>子组件发来的消息: {{ childMessage }}</p>
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";

export default {
  data() {
    return {
      parentMessage: "来自父组件的消息",
      childMessage: "",
    };
  },
  components: {
    ChildComponent,
  },
  methods: {
    handleChildEvent(message) {
      this.childMessage = message;
    },
  },
};
</script>
