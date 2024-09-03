<template>
  <div>
    <h1>Non Prop 테스트</h1>
    <Foo foo="bar" />
  </div>
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

<style scoped>
/* Your component styles here */
</style>
