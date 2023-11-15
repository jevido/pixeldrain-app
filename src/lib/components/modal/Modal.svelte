<script>
	export let modalShown = false;

	function close() {
		modalShown = false;
	}
</script>

{#if modalShown}
	<div
		class="fixed left-0 top-0 z-50 flex h-screen w-screen items-center rounded bg-background/60"
		tabindex="-1"
		on:click={close}
	>
		<div class="relative mx-auto max-h-full w-full max-w-md rounded-md" on:click|stopPropagation>
			<div class="relative rounded-lg bg-background shadow">
				<slot />
			</div>
		</div>
	</div>
{/if}
