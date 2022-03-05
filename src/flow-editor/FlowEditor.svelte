<script type="ts">
  import type { Writable } from 'svelte/store';

  import type { IFlowItem } from './../shared/stores/CardsStore';
	import Card from './../shared/components/Card.svelte';
	import Line from '../shared/components/Line.svelte';

	export let cardsStore: Writable<IFlowItem[]>;
</script>

<div class="panel">
	{#each $cardsStore as { left, title, top }, i}
		<Card {left} {top} {title} />
	{/each}

	<svg class="svg-panel">
		{#each $cardsStore as { left, top }, i}
			{#if i + 1 < $cardsStore.length}
				<Line
					top1={top}
					left1={left}
					top2={$cardsStore[i + 1].top}
					left2={$cardsStore[i + 1].left}
				/>
			{/if}
		{/each}
	</svg>
</div>

<style>
	.panel {
		width: 100vw;
		height: 100vh;
	}
	.svg-panel {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		position: absolute;
		pointer-events: none;
	}
</style>
