<script>
	import { Input, List, ListItem } from '$lib/primitives';
	import { Spinner } from '$lib/components';
	import { api } from '$lib/api/pixeldrain';

	let files = [];
	let searchInputValue = '';

	async function load() {
		const data = await api.get('user/files');
		files = data.files;
	}

	$: searchFor = searchInputValue.toLowerCase();
	$: filteredFiles = files.filter((file) => file.name.toLowerCase().includes(searchFor));
</script>

<div class="w-full p-4 bg-secondary">
	<Input size="full" bind:value={searchInputValue} placeholder="Search files.." />
</div>

{#await load()}
	<div class="flex fixed w-full h-full items-center justify-center">
		<Spinner class="w-12 h-12" />
	</div>
{:then}
	<div class="overflow-hidden overflow-y-auto">
		<div class="flex justify-center mx-12">
			<List>
				{#if filteredFiles.length > 0}
					{#each filteredFiles as file}
						<ListItem>
							<a href="/file/{file.id}" class="w-full">
								{file.name}
							</a>
						</ListItem>
					{/each}
				{:else}
					<ListItem>No files found</ListItem>
				{/if}
			</List>
		</div>
	</div>
{/await}

<svelte:head>
	<title>Library ~ Pixeldrain</title>
</svelte:head>
