<script>
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { Spinner } from '$lib/components';
	import { api } from '$lib/api/pixeldrain';
	import { formatDate, formatBytes, mimetypes } from '$lib/util';
	import VirtualList from '$lib/components/VirtualList.svelte';
	import { preferences } from '$lib/stores';

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
			date_upload: item.date_upload,
			mime_type: item.mime_type
		}));
		files = files.sort((a, b) => {
			return a.date_upload <= b.date_upload;
		});
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

<div class="w-full bg-secondary px-4 pt-4">
	<Input bind:value={searchInputValue} placeholder="Search files.." />
	<div class="flex w-full flex-row gap-4 overflow-x-auto p-3 sm:justify-center sm:gap-8">
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
	<div class="fixed flex h-full w-full items-center justify-center">
		<Spinner class="h-12 w-12" />
	</div>
{:then}
	{#if filteredFiles.length > 0}
		<VirtualList items={filteredFiles} let:item>
			<a href="/file/{item.id}" class="flex px-4 py-2">
				{#if !$preferences.dataSaving}
					<img
						class="h-8 w-8 rounded-full"
						src="https://pixeldrain.com/api/file/{item.id}/thumbnail?width=32&height=32"
						alt={item.name}
					/>
				{/if}
				<div class="ml-2 min-w-0">
					<p class="truncate text-sm font-medium">
						{item.name}
					</p>
					<p class="truncate text-sm text-muted-foreground">
						uploaded at: {item.date}
					</p>
				</div>
			</a>
		</VirtualList>
	{:else}
		<div class="flex justify-center px-4 py-2">
			{#if filteredFiles.length === 0 && files.length > 0}
				All {files.length} files are filtered out
			{:else}
				You haven't uploaded any files yet
			{/if}
		</div>
	{/if}
{/await}

<svelte:head>
	<title>Library ~ Pixeldrain</title>
</svelte:head>
