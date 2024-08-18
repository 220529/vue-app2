<script>
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ParentComponent from "./ParentComponent";
export default {
  components: {
    // ComponentA,
    // ComponentB,
    ParentComponent,
  },
};
</script>

<template>
  <div>
    <!-- <ComponentA />
    <ComponentB /> -->
    <ParentComponent />
  </div>
</template>
