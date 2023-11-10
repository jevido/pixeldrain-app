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
		<div class="">
			<a href="/file/{item.id}">
				{item.name}
			</a>
		</div>
	</VirtualList>
{/await}

<svelte:head>
	<title>Library ~ Pixeldrain</title>
</svelte:head>
