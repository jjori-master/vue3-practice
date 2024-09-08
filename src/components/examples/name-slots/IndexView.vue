<template>
  <Foo>
    <template v-slot:header>
      <h1>Header</h1>
    </template>
    <template v-slot:default>
      <h1>Default</h1>
    </template>
  </Foo>
</template>

<script>
import Foo from './Foo.vue';
export default {
  name: 'IndexView',
  components: {
    Foo,
  },
};
</script>

<style></style>
