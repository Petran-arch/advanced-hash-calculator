// build 026172b11e
// (auto) f1e517
import { ref } from 'vue';
export function useCounter(init = 0) {
  const n = ref(init);
  return { n, inc: () => n.value++, dec: () => n.value-- };
}
