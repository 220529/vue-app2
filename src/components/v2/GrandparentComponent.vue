<!-- GrandparentComponent.vue -->
<template>
  <div>
    <h2>祖父组件</h2>
    <ParentComponent />
  </div>
</template>

<script>
import ParentComponent from "./ParentComponentC.vue";

export default {
  components: {
    ParentComponent,
  },
  provide() {
    return {
      messageFromGrandparent: "来自祖父组件的消息",
    };
  },
};
</script>
