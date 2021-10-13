<script type="ts">
	import type { Writable } from 'svelte/store';

	export let second: boolean = false;
	export let title: Writable<string>;
	export let left: Writable<number>;
	export let top: Writable<number>;

	let dragStartTop = 0;
	let dragStartLeft = 0;

	function handleMouseMove(e: DragEvent) {
		left.set(e.pageX - dragStartLeft);
		top.set(e.pageY - dragStartTop);
	}

	const unregistre = () => {
		dragStartTop = 0;
		dragStartLeft = 0;
		window.removeEventListener('dragend', unregistre);
		window.removeEventListener('dragover', handleMouseMove);
	};

	const registre = (e: DragEvent) => {
		dragStartTop = e.offsetY;
		dragStartLeft = e.offsetX;
		e.dataTransfer.setDragImage(new Image(), 0, 0);
		window.addEventListener('dragend', unregistre);
		window.addEventListener('dragover', handleMouseMove);
	};
</script>

<div
	class="card"
	draggable="true"
	on:dragstart={registre}
	style="transform: translate({$left + (second ? 150 : 0)}px, {$top}px);"
>
	{$title}
	<input bind:value={$title} />
</div>

<style>
	input {
		width: 80%;
	}

	.card {
		box-shadow: 0 0 4px 0 black;
		background-color: white;
		position: absolute;
		height: 100px;
		padding: 8px;
		cursor: grab;
		width: 100px;
		margin: 0;
		left: 0;
		top: 0;
	}

	.card:active {
		box-shadow: 0 0 8px 0 black;
		cursor: grabbing;
	}
</style>
