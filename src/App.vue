<script setup></script>

<template>
  <div>
    <h1>Hello world</h1>

    <h3>Emits Test</h3>
    <ParentComponent />
  </div>
</template>

<script>
import ParentComponent from './components/emitsExample/ParentComponent.vue';
export default {
  components: {
    ParentComponent,
  },
};
</script>
