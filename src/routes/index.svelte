<script type="ts">
	import { CardsStore } from './../shared/stores/CardsStore';
	import FlowEditor from './../flow-editor/FlowEditor.svelte';
</script>

<FlowEditor cardsStore={CardsStore} />

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
