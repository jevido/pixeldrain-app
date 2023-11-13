<script>
	import { page } from '$app/stores';
	import { api } from '$lib/api/pixeldrain';
	import { Spinner } from '$lib/components';

	async function load() {
		const data = await api.get(`file/${$page.params.id}/info`);
		console.debug(data);

		return data;
	}

	async function share(file) {
		try {
			await navigator.share({
				title: file.name,
				text: `${file.name} has been shared with you`,
				url: `https://pixeldrain.com/u/${file.id}`,
				dialogTitle: 'Share a file'
			});

			isCopiedShown = true;

			setTimeout(() => {
				isCopiedShown = false;
			}, 2500);
		} catch (error) {
			console.warn('Sharing failed', error);
		}
	}
</script>

{#await load()}
	<div class="flex fixed w-full h-full items-center justify-center">
		<Spinner class="w-12 h-12" />
	</div>
{:then file}
	<h4>{file.name}</h4>

	delete | rename <br/> download | copy/share
{/await}
