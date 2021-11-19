<script lang="ts">
	import type { Writable } from 'svelte/store';

	import { gridSnap } from './../services/GridSnap';

	export let top1: Writable<number>;
	export let left1: Writable<number>;
	export let top2: Writable<number>;
	export let left2: Writable<number>;

	$: resolvedTop1 = gridSnap($top1) + 80;
	$: resolvedTop2 = gridSnap($top2) + 20;
	$: resolvedLeft1 = gridSnap($left1) + 80;
	$: resolvedLeft2 = gridSnap($left2) + 20;

	$: resolvedLeftMiddle = (resolvedLeft2 - resolvedLeft1) * 0.5;
	$: resolvedTopMiddle = (resolvedTop2 - resolvedTop1) * 0.5;
</script>

<path
	fill="none"
	stroke="#333"
	stroke-width="3"
	d="M{resolvedLeft1},{resolvedTop1} q100,0 {resolvedLeftMiddle},{resolvedTopMiddle} T{resolvedLeft2},{resolvedTop2}"
/>
