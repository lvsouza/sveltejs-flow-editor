<script type="ts">
	import type { Writable } from 'svelte/store';

	import { draggable } from './../derectives/Drag';

	export let title: Writable<string>;
	export let left: Writable<number>;
	export let top: Writable<number>;
</script>

<div class="container" use:draggable={{ left, top }}>
	<span class="input-circle" />
	<div class="content">
		<span>{$title}</span>
		<input bind:value={$title} class="title-editor" on:mousedown={(e) => e.stopPropagation()} />
	</div>
	<span class="output-circle" />
</div>

<style>
	.container {
		gap: 8px;
		cursor: move;
		width: 100px;
		padding: 4px;
		height: 100px;
		display: flex;
		position: absolute;
		border-radius: 4px;
		flex-direction: column;
		background-color: #ffffff;
		box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px,
			rgb(0 0 0 / 12%) 0px 1px 5px 0px;
	}
	.title-editor {
		padding: unset;
		font-size: smaller;
		text-align: center;
		border: thin solid #d2d2d2;
	}
	.content {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.input-circle {
		padding: 6px;
		align-self: start;
		border-radius: 50%;
		justify-self: start;
		border: thin solid black;
	}
	.output-circle {
		padding: 6px;
		align-self: end;
		border-radius: 50%;
		border: thin solid black;
	}
</style>
