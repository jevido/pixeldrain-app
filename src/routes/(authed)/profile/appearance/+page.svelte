<script>
	import { Check, ChevronsUpDown } from 'lucide-svelte';
	import * as Command from '$lib/components/ui/command';
	import * as Popover from '$lib/components/ui/popover';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import { tick } from 'svelte';
	import * as Card from '$lib/components/ui/card';
	import { Switch } from '$lib/components/ui/switch';

	import { preferences } from '$lib/stores';

	const themes = [
		{
			value: 'dark',
			label: 'Dark'
		},
		{
			value: 'funk',
			label: 'Funk'
		},
		{
			value: 'bright',
			label: 'Bright'
		},
		{
			value: 'flexoki-bright',
			label: 'Flexoki bright'
		},
		{
			value: 'flexoki-dark',
			label: 'Flexoki dark'
		}
	];

	let open = false;

	// We want to refocus the trigger button when the user selects
	// an item from the list so users can continue navigating the
	// rest of the form with the keyboard.
	function closeAndFocusTrigger(triggerId) {
		open = false;
		tick().then(() => {
			document.getElementById(triggerId)?.focus();
		});
	}

	function resetToDefaults() {
		preferences.reset()
	}
</script>

<Card.Root class="mx-auto mb-auto mt-4 max-w-full">
	<Card.Header>
		<Card.Title>Appearance</Card.Title>
		<Card.Description>These settings are for this device only</Card.Description>
	</Card.Header>
	<Card.Content class="grid gap-4">
		<div class="flex items-center space-x-4 rounded-md border p-4">
			<div class="flex-1 space-y-1">
				<p class=" justify-between flex items-center text-sm font-medium leading-none">
					Theme
					<Popover.Root bind:open let:ids>
						<Popover.Trigger asChild let:builder>
							<Button
								builders={[builder]}
								variant="outline"
								role="combobox"
								aria-expanded={open}
								class="w-[150px] justify-between"
							>
								{$preferences.theme ?? 'Select a theme'}
								<ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
							</Button>
						</Popover.Trigger>
						<Popover.Content class="w-[150px] p-0">
							<Command.Root>
								<Command.Input placeholder="Select a theme..." />
								<Command.Empty>No theme found.</Command.Empty>
								<Command.Group>
									{#each themes as theme}
										<Command.Item
											value={theme.value}
											onSelect={(currentValue) => {
												$preferences.theme = currentValue;
												closeAndFocusTrigger(ids.trigger);
											}}
										>
											<Check
												class={cn(
													'mr-2 h-4 w-4',
													$preferences.theme !== theme.value && 'text-transparent'
												)}
											/>
											{theme.label}
										</Command.Item>
									{/each}
								</Command.Group>
							</Command.Root>
						</Popover.Content>
					</Popover.Root>
				</p>
			</div>
		</div>
		<div class="flex items-center space-x-4 rounded-md border p-4">
			<div class="flex-1 space-y-1">
				<p class="text-sm font-medium leading-none">Data saving</p>
				<p class="text-sm text-muted-foreground">Show less images to save bandwidth</p>
			</div>
			<Switch bind:checked={$preferences.dataSaving} />
		</div>
	</Card.Content>
	<Card.Footer>
		<Button class="w-full" on:click={resetToDefaults}>reset to default</Button>
	</Card.Footer>
</Card.Root>
