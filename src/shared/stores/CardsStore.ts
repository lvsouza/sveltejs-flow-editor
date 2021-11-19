import { writable } from 'svelte/store';

export const CardsStore = writable([
  { id: writable(1), relatedId: writable(1), left: writable(10), top: writable(0), title: writable('Teste 01') },
  { id: writable(2), relatedId: writable(2), left: writable(10), top: writable(0), title: writable('Teste 02') },
  { id: writable(3), relatedId: writable(3), left: writable(10), top: writable(0), title: writable('Teste 03') },
]);
