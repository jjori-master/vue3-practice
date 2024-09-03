<template>
  <div>
    <h1>Multi V-Model 테스트</h1>
    {{ `msg1:${msg1}, msg2:${msg2}` }}
    <Foo v-model:msg1="msg1" v-model:msg2="msg2" />
  </div>
</template>

<script>
import Foo from './Foo.vue';
export default {
  name: 'IndexView',
  components: {
    Foo,
  },
  data() {
    return {
      msg1: 'Hello',
      msg2: 'World',
    };
  },
};
</script>
