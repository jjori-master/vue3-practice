import { createMemoryHistory, createRouter } from 'vue-router';

import Emits from './components/examples/emits/ParentComponent.vue';
import NonProp from './components/examples/non-prop/IndexView.vue';

const routes = [
  { path: '/emits', component: Emits },
  { path: '/non-prop', component: NonProp },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
