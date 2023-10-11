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

<div class="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 border bottom-0 left-1/2 bg-secondary">
	<div class="grid h-full max-w-lg grid-cols-5">
		<a href="/dashboard" class="inline-flex flex-col items-center justify-center px-5">
			<Home class={$page.url.pathname !== '/dashboard' ? 'text-muted-foreground' : ''} />
		</a>
		<a href="/subscriptions" class="inline-flex flex-col items-center justify-center px-5">
			<Wallet class={$page.url.pathname !== '/subscriptions' ? 'text-muted-foreground' : ''} />
		</a>
		<div class="flex items-center justify-center">
			<label
				class="inline-flex hover:cursor-pointer items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full focus:outline-none"
				for="file-uploader"
			>
				<Plus class="w-4 h-4" />
				<input
					type="file"
					id="file-uploader"
					hidden
					on:change|preventDefault|stopPropagation={uploadFiles}
				/>
			</label>
		</div>
		<a href="/settings" class="inline-flex flex-col items-center justify-center">
			<Settings class={$page.url.pathname !== '/settings' ? 'text-muted-foreground' : ''} />
		</a>
		<a href="/library" class="inline-flex flex-col items-center justify-center">
			<Library class={$page.url.pathname !== '/library' ? 'text-muted-foreground' : ''} />
		</a>
	</div>
</div>
