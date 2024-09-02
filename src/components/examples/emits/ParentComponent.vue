<template>
  <div>
    <h1>Parent Component</h1>
    <ChildComponent @click="handleClick" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  name: 'ParentComponent',

  components: {
    ChildComponent,
  },

  methods: {
    handleClick(payload) {
      console.log('Parent Component', payload);
    },
  },
};
</script>
