<template>
  <div>
    <div>
      <label for="">메시지 1</label>
      <input
        type="text"
        :value="msg1"
        @input="$emit('update:msg1', $event.target.value)"
      />
    </div>
    <div>
      <label for="">메시지 2</label>
      <input
        type="text"
        :value="msg2"
        @input="$emit('update:msg2', $event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Foo',
  props: ['msg1', 'msg2'],
  emits: ['update:msg1', 'update:msg2'],
};
</script>

<style></style>
