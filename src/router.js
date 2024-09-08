import { createMemoryHistory, createRouter } from 'vue-router';

import Emits from './components/examples/emits/ParentComponent.vue';
import NonProp from './components/examples/non-prop/IndexView.vue';
import MultiVModel from './components/examples/multi-vmodel/IndexView.vue';
import NameSlots from './components/examples/name-slots/IndexView.vue';

const routes = [
  { path: '/emits', component: Emits },
  { path: '/non-prop', component: NonProp },
  { path: '/multi-vmodel', component: MultiVModel },
  { path: '/name-slots', component: NameSlots },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
