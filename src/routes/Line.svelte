<script lang="ts">
	import type { Writable } from 'svelte/store';

	export let top1: Writable<number>;
	export let left1: Writable<number>;
	export let top2: Writable<number>;
	export let left2: Writable<number>;
</script>

<line y1={$top1} x1={$left1} y2={$top2} x2={$left2} style="stroke:red;stroke-width:2" />
