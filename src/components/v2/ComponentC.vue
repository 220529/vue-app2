<!-- ChildComponent.vue -->
<template>
  <div>
    <h3>子组件</h3>
    <p>注入的消息: {{ injectedMessage }}</p>
  </div>
</template>

<script>
export default {
  inject: ["messageFromGrandparent"],
  computed: {
    injectedMessage() {
      return this.messageFromGrandparent;
    },
  },
};
</script>
