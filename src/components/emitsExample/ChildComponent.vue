<template>
  <div>
    <h1>Child Component</h1>
    <button @click="handleClick">Click</button>
  </div>
</template>

<script>
export default {
  name: "ChildComponent",

  emits: ["click"],

  methods: {
    handleClick() {
      this.$emit("click", "Child Component");
    },
  },
};
</script>
