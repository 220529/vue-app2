<template>
  <button @click="toggle">切换</button>

  <keep-alive>
    <ChildOne v-if="num === 1"></ChildOne>
    <ChildTwo v-else></ChildTwo>
  </keep-alive>
</template>

<script>
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";

export default {
  name: "KeepAlive",
  components: { ChildOne, ChildTwo },
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    toggle() {
      if (this.num === 1) {
        this.num = 2;
      } else {
        this.num = 1;
      }
    },
  },
};
</script>
