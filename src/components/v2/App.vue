<script>
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ParentComponent from "./ParentComponent";
import TestComponent from "./TestComponent";
import TestComponent2 from "./TestComponent2";
import KeepAliveApp from "./KeepAliveApp";
export default {
  components: {
    // ComponentA,
    // ComponentB,
    // ParentComponent,
    // TestComponent,
    // TestComponent2,
    KeepAliveApp,
  },
};
</script>

<template>
  <div>
    <!-- <ComponentA />
    <ComponentB /> -->
    <!-- <ParentComponent /> -->
    <!-- <TestComponent /> -->
    <!-- <TestComponent2 /> -->
    <div>防大风了</div>
    <KeepAliveApp />
  </div>
</template>
