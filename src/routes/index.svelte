<script type="ts">
	import { CardsStore } from './../shared/stores/CardsStore';
	import Card from './../shared/components/Card.svelte';
	import Line from '../shared/components/Line.svelte';
</script>

<div style="width: 100vw; height: 100vh;">
	{#each $CardsStore as { left, title, top }, i}
		<Card {left} {top} {title} />
	{/each}

	<svg style="width: 100%; height: 100%;top: 0;left: 0;position:absolute;pointer-events: none;">
		{#each $CardsStore as { left, top }, i}
			{#if i + 1 < $CardsStore.length}
				<Line
					top1={top}
					left1={left}
					top2={$CardsStore[i + 1].top}
					left2={$CardsStore[i + 1].left}
				/>
			{/if}
		{/each}
	</svg>
</div>

<style>
	:global(*) {
		user-select: none;
		margin: 0;
		padding: 0;
		font-family: sans-serif;
	}
	:global(body) {
		background-color: #d2d2d2;
	}
</style>
