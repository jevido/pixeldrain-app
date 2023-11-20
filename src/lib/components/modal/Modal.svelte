<script>
	import * as Dialog from '$lib/components/ui/dialog';
	export let dialogOpen = false;
	export let title = '';
</script>

<Dialog.Root bind:open={dialogOpen}>
	<Dialog.Content class="px-2">
		<Dialog.Header>
			{#if title}
				<Dialog.Title>{title}</Dialog.Title>
			{/if}
			<Dialog.Description class="mb-5 text-center text-lg font-normal">
				<slot />
			</Dialog.Description>
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>
