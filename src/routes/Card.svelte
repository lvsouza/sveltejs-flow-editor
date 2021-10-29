<script type="ts">
	import type { Writable } from 'svelte/store';

	import { draggable } from './Drag';

	export let title: Writable<string>;
	export let left: Writable<number>;
	export let top: Writable<number>;
</script>

<g use:draggable={{ left, top }}>
	<rect fill="blue" style="width: 100px; height: 100px;" />
	<text>{$title}</text>
	<!-- <foreignObject width={50} height={50}>
		<input
			bind:value={$title}
			style="width: 100%;height: 100%;padding: unset;font-size: smaller;text-align: center;"
		/>
	</foreignObject> -->
</g>
