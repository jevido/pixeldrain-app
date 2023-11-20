<script>
	import { page } from '$app/stores';
	import { files } from '$lib/stores';

	import { Home, Settings, Library, Plus, Wallet } from '$lib/icons';

	function uploadFiles(event) {
		if (event.target.files) {
			for (const file of Array.from(event.target.files)) {
				files.upload(file);
			}
		}
	}
</script>

<div class="flex h-16 w-full flex-col items-center border bg-secondary">
	<div class="grid h-full w-full grid-cols-5">
		<a href="/dashboard" class="inline-flex flex-col items-center justify-center px-5">
			<Home class={$page.url.pathname !== '/dashboard' ? 'text-muted-foreground' : ''} />
		</a>
		<a href="/tree" class="inline-flex flex-col items-center justify-center px-5">
			<Wallet class={$page.url.pathname !== '/tree' ? 'text-muted-foreground' : ''} />
		</a>
		<div class="flex items-center justify-center">
			<label
				class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-pixeldrain text-pixeldrain-foreground hover:cursor-pointer focus:outline-none"
				for="file-uploader"
			>
				<Plus class="h-4 w-4" />
				<input
					type="file"
					id="file-uploader"
					hidden
					multiple
					on:change|preventDefault|stopPropagation={uploadFiles}
				/>
			</label>
		</div>
		<a href="/profile" class="inline-flex flex-col items-center justify-center">
			<Settings class={$page.url.pathname !== '/settings' ? 'text-muted-foreground' : ''} />
		</a>
		<a href="/library" class="inline-flex flex-col items-center justify-center">
			<Library class={$page.url.pathname !== '/library' ? 'text-muted-foreground' : ''} />
		</a>
	</div>
</div>
