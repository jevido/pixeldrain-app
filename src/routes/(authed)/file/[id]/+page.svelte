<script>
	import { page } from '$app/stores';
	import { api } from '$lib/api/pixeldrain';
	import { Spinner } from '$lib/components';

	async function load() {
		const data = await api.get(`file/${$page.params.id}/info`)  
		console.debug(data);

		return data;
	}
</script>

File viewer for: {$page.params.id}

{#await load()}
	<div class="flex fixed w-full h-full items-center justify-center">
		<Spinner class="w-12 h-12" />
	</div>
{:then data}
	{data.name}
{/await}