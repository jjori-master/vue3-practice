import { createMemoryHistory, createRouter } from 'vue-router';

import Emits from './components/examples/emits/ParentComponent.vue';

const routes = [{ path: '/emits', component: Emits }];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
