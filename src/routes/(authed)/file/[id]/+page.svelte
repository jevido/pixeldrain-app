<script>
	import * as Card from '$lib/components/ui/card';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { formatDate, formatBytes } from '$lib/util/misc';

	import { page } from '$app/stores';
	import { api, files } from '$lib/api/pixeldrain';
	import { Spinner } from '$lib/components';

	let file;

	async function load() {
		const data = await api.get(`file/${$page.params.id}/info`);
		console.debug(data);

		file = data;
		return data;
	}

	async function deleteFile() {
		await api.delete(`file/${file.id}`);
		let found = $files.findIndex((item) => {
			return item.id === file.id;
		});

		$files.splice(found, 1);
		history.back();
	}

	async function rename() {
		const formData = new FormData();
		formData.append('action', 'rename');
		formData.append('name', newFileName);

		await api.post(`file/${file.id}`, formData);

		doLoad = load();
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

	function openRenameModal() {
		console.debug('todo');
	}
</script>

{#await load()}
	<div class="fixed flex h-full w-full items-center justify-center">
		<Spinner class="h-12 w-12" />
	</div>
{:then file}
	<Card.Root class="mx-8 mt-8">
		<Card.Header>
			<Card.Title>{file.name}</Card.Title>
			<Card.Description>
				<p>Uploaded at: {formatDate(file.date_upload)}</p>
			</Card.Description>
		</Card.Header>
		<Card.Content>
			<div class="mb-4 flex justify-center">
				<img src="/api/{file.thumbnail_href}" />
			</div>
			<div class="grid grid-cols-2 gap-4 rounded-md border p-4">
				<Button variant="outline" on:click={openRenameModal}>Rename</Button>
				<a
					class={buttonVariants({ variant: 'outline' })}
					href="/api/file/{file.id}"
					download={file.name}
				>
					Download
				</a>
				<Button variant="outline" on:click={share}>Share</Button>
				<Button variant="outline" on:click={deleteFile}>Delete</Button>
			</div>
		</Card.Content>
	</Card.Root>
{/await}
