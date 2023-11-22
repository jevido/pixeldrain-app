<script>
	import * as Dialog from '$lib/components/ui/dialog';
	export let dialogOpen = false;
	export let title = '';
</script>

<Dialog.Root bind:open={dialogOpen}>
	<Dialog.Content>
		<Dialog.Header>
			{#if title}
				<Dialog.Title>{title}</Dialog.Title>
			{/if}
			{#if $$slots.description}
				<Dialog.Description class="text-center text-lg font-normal">
					<slot name="description"/>
				</Dialog.Description>
			{/if}
		</Dialog.Header>

		<slot />

		{#if $$slots.footer}
			<Dialog.Footer>
				<slot name="footer" />
			</Dialog.Footer>
		{/if}
	</Dialog.Content>
</Dialog.Root>
