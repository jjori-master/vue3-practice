<script setup></script>

<template>
  <h1>Hello App!!</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/emits">Emits</RouterLink></li>
      <li><RouterLink to="/non-prop">NonProp</RouterLink></li>
      <li><RouterLink to="/multi-vmodel">MultiVModel</RouterLink></li>
      <li><RouterLink to="/name-slots">NameSlots</RouterLink></li>
    </ul>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
