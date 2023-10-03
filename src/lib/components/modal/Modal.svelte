<script>
	export let modalShown = false;
</script>

{#if modalShown}
	<div
		class="fixed top-0 left-0 h-screen w-screen bg-gray-600/80 z-50 flex items-center"
		tabindex="-1"
		on:click={() => {
			modalShown = false;
		}}
	>
		<div class="relative w-full max-w-md max-h-full rounded-md mx-auto" on:click|stopPropagation>
			<div class="relative bg-background rounded-lg shadow">
				<slot />
			</div>
		</div>
	</div>
{/if}
