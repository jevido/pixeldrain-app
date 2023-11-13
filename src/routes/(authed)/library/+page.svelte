<script>
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { Spinner } from '$lib/components';
	import { api } from '$lib/api/pixeldrain';
	import { formatDate, formatBytes, mimetypes } from '$lib/util';
	import VirtualList from '$lib/components/VirtualList.svelte';

	let files = [];
	let searchInputValue = '';
	let filteredFiles = [];

	async function load() {
		const data = await api.get('user/files');
		files = data.files?.map((item) => ({
			id: item.id,
			name: item.name.toLowerCase(),
			size: formatBytes(item.size),
			date: formatDate(item.date_upload),
			mime_type: item.mime_type
		}));
	}

	const filters = Object.values(mimetypes).map((item) => ({
		...item,
		isActive: false
	}));

	$: searchFor = searchInputValue.toLowerCase();
	$: activeFilters = filters.filter((item) => item.isActive);
	$: activeMimeTypes = activeFilters.flatMap((item) => item.extensions);

	$: filteredByActiveFilters =
		activeMimeTypes.length === 0
			? files
			: files.filter((item) => {
					let extension = item.mime_type.split('/')[1];
					return activeMimeTypes.includes(extension);
			  });
	$: filteredFiles = filteredByActiveFilters.filter((file) => file.name.includes(searchFor));
</script>

<div class="w-full px-4 pt-4 bg-secondary">
	<Input bind:value={searchInputValue} autofocus placeholder="Search files.." />
	<div class="flex flex-row justify-center gap-8 p-2">
		{#each filters as filter}
			<Button
				variant="ghost"
				class={filter.isActive ? 'bg-accent/90' : ''}
				on:click={() => {
					filter.isActive = !filter.isActive;
				}}
			>
				{filter.name}
			</Button>
		{/each}
	</div>
</div>

{#await load()}
	<div class="flex fixed w-full h-full items-center justify-center">
		<Spinner class="w-12 h-12" />
	</div>
{:then}
	<VirtualList items={filteredFiles} let:item>
		<a href="/file/{item.id}" class="flex px-4 py-2 w-space-x-4">
			<img
				class="w-8 h-8 rounded-full"
				src="https://pixeldrain.com/api/file/{item.id}/thumbnail?width=32&height=32"
				alt={item.name}
			/>
			<div class="ml-2 min-w-0">
				<p class="text-sm font-medium truncate">
					{item.name}
				</p>
				<p class="text-sm truncate text-muted-foreground">
					uploaded at: {item.date}
				</p>
			</div>
		</a>
	</VirtualList>
{/await}

<svelte:head>
	<title>Library ~ Pixeldrain</title>
</svelte:head>
