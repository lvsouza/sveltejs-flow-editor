<script type="ts">
	import { Writable, get } from 'svelte/store';

	export let second: boolean = false;
	export let title: Writable<string>;
	export let left: Writable<number>;
	export let top: Writable<number>;

	function handleMouseMove(e: MouseEvent) {
		left.set(get(left) + e.movementX);
		top.set(get(top) + e.movementY);
	}

	const unregistre = () => {
		window.removeEventListener('mouseup', unregistre);
		window.removeEventListener('mousemove', handleMouseMove);
	};

	const registre = (e: MouseEvent) => {
		window.addEventListener('mouseup', unregistre);
		window.addEventListener('mousemove', handleMouseMove);
	};
</script>

<div
	class="card"
	on:mousedown={registre}
	style="transform: translate({$left + (second ? 150 : 0)}px, {$top + 150}px);"
>
	{$title}
	<input bind:value={$title} />
</div>

<style>
	* {
		user-select: none;
	}

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
