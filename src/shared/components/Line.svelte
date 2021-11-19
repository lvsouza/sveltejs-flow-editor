<script lang="ts">
	import type { Writable } from 'svelte/store';

	import { gridSnap } from './../services/GridSnap';

	export let top1: Writable<number>;
	export let left1: Writable<number>;
	export let top2: Writable<number>;
	export let left2: Writable<number>;

	$: resolvedTop1 = gridSnap($top1) + 97;
	$: resolvedTop2 = gridSnap($top2) + 11;
	$: resolvedLeft1 = gridSnap($left1) + 97;
	$: resolvedLeft2 = gridSnap($left2) + 11;

	$: resolvedLeftMiddle = (resolvedLeft2 - resolvedLeft1) * 0.5;
	$: resolvedTopMiddle = (resolvedTop2 - resolvedTop1) * 0.5;

	$: diferenceLeft1Left2 = (resolvedLeft2 - resolvedLeft1) * -1;
	
	$: resolvedQuadraticY = diferenceLeft1Left2 > 0 ? (diferenceLeft1Left2 <= 25 ? diferenceLeft1Left2 : 25) : 0;
	$: resolvedQuadraticX = 100 + (diferenceLeft1Left2 > 0 && diferenceLeft1Left2 < 200 ? diferenceLeft1Left2 : diferenceLeft1Left2 > 200 ? 200 : 0);
</script>

<path
	fill="none"
	stroke="#333"
	stroke-width="4"
	stroke-linecap="round"
	d="M{resolvedLeft1},{resolvedTop1} q{resolvedQuadraticX},{resolvedQuadraticY} {resolvedLeftMiddle},{resolvedTopMiddle} T{resolvedLeft2},{resolvedTop2}"
/>
