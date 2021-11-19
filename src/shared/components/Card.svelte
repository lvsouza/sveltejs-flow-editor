<script type="ts">
	import type { Writable } from 'svelte/store';

	import { draggable } from './../derectives/Drag';

	export let title: Writable<string>;
	export let left: Writable<number>;
	export let top: Writable<number>;
</script>

<div
	use:draggable={{ left, top }}
	style="background-color: blue;width: 100px; height: 100px;position:absolute;"
>
	<span>{$title}</span>
	<input
		bind:value={$title}
		style="width: 100%;padding: unset;font-size: smaller;text-align: center;"
	/>
</div>
