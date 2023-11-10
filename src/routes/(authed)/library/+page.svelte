<script>
	import { Input } from '$lib/primitives';
	import { Spinner } from '$lib/components';
	import { api } from '$lib/api/pixeldrain';
	import { formatDate, formatBytes } from '$lib/util';
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
			date: formatDate(item.date_upload)
		}));
	}

	$: searchFor = searchInputValue.toLowerCase();
	$: filteredFiles = files.filter((file) => file.name.includes(searchFor));
</script>

<div class="w-full p-4 bg-secondary">
	<Input size="full" bind:value={searchInputValue} placeholder="Search files.." />
</div>

{#await load()}
	<div class="flex fixed w-full h-full items-center justify-center">
		<Spinner class="w-12 h-12" />
	</div>
{:then}
	<VirtualList items={filteredFiles} let:item>
		<a href="/file/{item.id}" class="flex px-4 py-2 w-space-x-4">
			<div class="flex-shrink-0">
				<img
					class="w-8 h-8 rounded-full"
					src="https://pixeldrain.com/api/file/{item.id}/thumbnail?width=32&height=32"
					alt={item.name}
				/>
			</div>
			<div class="flex-1 ml-2 min-w-0">
				<p class="text-sm font-medium truncate">
					{item.name}
				</p>
				<p class="text-sm truncate text-muted-foreground">
					size: {item.size}
					upload date: {item.date}
				</p>
			</div>
		</a>
	</VirtualList>
{/await}

<svelte:head>
	<title>Library ~ Pixeldrain</title>
</svelte:head>
