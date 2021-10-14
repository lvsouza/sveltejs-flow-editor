<script type="ts">
	import { CardsStore } from './CardsStore';
	import Card from './Card.svelte';
	import Line from './Line.svelte';
</script>

<svg style="width: 100vw; height: 100vh;">
	{#each $CardsStore as { left, title, top }, i}
		<Card {left} {top} {title} />

		{#if i + 1 < $CardsStore.length}
			<Line top1={top} left1={left} top2={$CardsStore[i + 1].top} left2={$CardsStore[i + 1].left} />
		{/if}
	{/each}
</svg>

<style>
	:global(*) {
		user-select: none;
	}
</style>
