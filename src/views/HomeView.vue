<template>
  <div class="home">
    <!-- <VuexDemo /> -->
    <V2 />
    <!-- <OptionApi />
    <CompositionApi /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import V2 from "@/components/v2/App.vue"; // @ is an alias to /src
import OptionApi from "@/components/OptionApi.vue"; // @ is an alias to /src
import CompositionApi from "@/components/CompositionApi.vue"; // @ is an alias to /src
import VuexDemo from "@/components/VuexDemo.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    // OptionApi,
    // CompositionApi,
    V2,
    // VuexDemo,
  },
});
</script>
