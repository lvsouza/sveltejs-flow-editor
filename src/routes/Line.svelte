<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { gridSnap } from './GridSnap';

	export let top1: Writable<number>;
	export let left1: Writable<number>;
	export let top2: Writable<number>;
	export let left2: Writable<number>;
</script>

<line
	y1={gridSnap($top1)}
	y2={gridSnap($top2)}
	x1={gridSnap($left1)}
	x2={gridSnap($left2)}
	style="stroke:red;stroke-width:2"
/>
