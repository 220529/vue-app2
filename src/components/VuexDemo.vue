<template>
  <div>
    <h2>Vuex 示例</h2>

    <!-- 测试 state -->
    <p>Count: {{ count }}</p>
    <p>Message: {{ message }}</p>

    <!-- 测试 getters -->
    <p>Double Count (getter): {{ doubleCount }}</p>
    <p>Reversed Message (getter): {{ reversedMessage }}</p>
    <p>cats: {{ cats }}</p>

    <!-- 测试 mutations -->
    <button @click="increment">Increment Count</button>
    <button @click="setMessage('New Message from VuexDemo')">
      Set Message
    </button>
    <button @click="setCats">setCats</button>
    <button @click="fetchCats">fetchCats</button>

    <!-- 测试 actions -->
    <button @click="incrementAsync">Increment Count Async</button>
    <button @click="updateMessage('Async Message Update')">
      Update Message Async
    </button>

    <!-- 测试 modules -->
    <h3>Module 示例</h3>
    <p>Module Count: {{ moduleCount }}</p>
    <p>Double Module Count (getter): {{ doubleModuleCount }}</p>
    <button @click="incrementModuleCount">Increment Module Count</button>
    <button @click="incrementModuleCountAsync">
      Increment Module Count Async
    </button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["count", "message", "cats"]),
    ...mapGetters(["doubleCount", "reversedMessage"]),
    ...mapState("exampleModule", ["moduleCount"]),
    ...mapGetters("exampleModule", ["doubleModuleCount"]),
  },
  methods: {
    ...mapMutations(["increment", "setMessage", "setCats"]),
    ...mapActions(["incrementAsync", "updateMessage", "fetchCats"]),
    ...mapMutations("exampleModule", ["incrementModuleCount"]),
    ...mapActions("exampleModule", ["incrementModuleCountAsync"]),
  },
};
</script>
