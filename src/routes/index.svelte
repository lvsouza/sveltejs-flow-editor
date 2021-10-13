<script type="ts">
	import { CardsStore } from './CardsStore';
	import CardDrag from './CardDrag.svelte';
	import Card from './Card.svelte';
</script>

<div>
	{#each $CardsStore as { left, title, top }}
		<Card {left} {top} {title} />
		<Card {left} {top} {title} second={true} />

		<CardDrag {left} {top} {title} />
		<CardDrag {left} {top} {title} second={true} />
	{/each}
</div>
