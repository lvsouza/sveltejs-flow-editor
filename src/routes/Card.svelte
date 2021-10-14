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

<g on:mousedown={registre} style="transform: translate({$left + (second ? 150 : 0)}px, {$top}px);">
	<text>{$title}</text>
	<rect fill="blue" style="width: 100px; height: 100px;" />
</g>
