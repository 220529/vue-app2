<!-- ParentComponent.vue -->
<template>
  <div>
    <h2>父组件</h2>
    <ChildComponent />
  </div>
</template>

<script>
import ChildComponent from "./ComponentC.vue";

export default {
  components: {
    ChildComponent,
  },
};
</script>
