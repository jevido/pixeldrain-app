<script>
	import * as Table from '$lib/components/ui/table';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Input } from '$lib/primitives';
	import { Spinner } from '$lib/components';
	import { api } from '$lib/api/pixeldrain';
	import { formatDate, formatBytes } from '$lib/util';

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
	$: filteredFiles = files.filter((file) => {
		return file.name.includes(searchFor);
	});
</script>

<div class="w-full p-4 bg-secondary">
	<Input size="full" bind:value={searchInputValue} placeholder="Search files.." />
</div>

{#await load()}
	<div class="flex fixed w-full h-full items-center justify-center">
		<Spinner class="w-12 h-12" />
	</div>
{:then}
	<Table.Root>
		<Table.Caption
			>A list of your {filteredFiles.length} filtered out of {files.length} uploads.</Table.Caption
		>
		<Table.Header>
			<Table.Row>
				<Table.Head class="w-2">Select</Table.Head>
				<Table.Head>Filename</Table.Head>
				<Table.Head class="w-28">Date uploaded</Table.Head>
				<Table.Head class="w-28 text-center">Size</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#if filteredFiles.length > 0}
				{#each filteredFiles as file}
					<Table.Row>
						<Table.Cell class="text-center">
							<Checkbox />
						</Table.Cell>
						<Table.Cell class="font-medium">{file.name}</Table.Cell>
						<Table.Cell>{file.date}</Table.Cell>
						<Table.Cell class="text-center">{file.size}</Table.Cell>
					</Table.Row>
				{/each}
			{:else}
				<Table.Row>
					<Table.Cell colspan="4" class="text-center">No records found</Table.Cell></Table.Row
				>
			{/if}
		</Table.Body>
	</Table.Root>
{/await}

<svelte:head>
	<title>Library ~ Pixeldrain</title>
</svelte:head>
