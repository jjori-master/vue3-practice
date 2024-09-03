<template>
  <!-- <div>
    <h1>Bar Non Prop</h1>
    <p>Bar foo : {{ $attrs.foo }}</p>
  </div> -->
  <Baz />
</template>

<script>
import Baz from './Baz.vue';
export default {
  name: 'Bar',
  components: {
    Baz,
  },
};
</script>
