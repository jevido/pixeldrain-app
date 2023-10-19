<script>
	export let modalShown = false;

	function close() {
		modalShown = false;
	}
</script>

{#if modalShown}
	<div
		class="fixed top-0 left-0 h-screen w-screen bg-background/60 z-50 flex items-center rounded"
		tabindex="-1"
		on:click={close}
	>
		<div class="relative w-full max-w-md max-h-full rounded-md mx-auto" on:click|stopPropagation>
			<div class="relative bg-background rounded-lg shadow">
				<slot />
			</div>
		</div>
	</div>
{/if}
