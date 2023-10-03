<script>
	import { page } from '$app/stores';

	import { Home, Settings, Library, Plus, Wallet } from '$lib/icons';
</script>

<div
	class="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 border rounded-full bottom-0 rounded-b left-1/2 bg-secondary"
>
	<div class="grid h-full max-w-lg grid-cols-5">
		<a
			href="/dashboard"
			class="inline-flex flex-col items-center justify-center px-5 rounded-l-full"
		>
			<Home class={$page.url.pathname !== '/dashboard' ? 'text-muted-foreground' : ''} />
		</a>
		<a href="/subscriptions" class="inline-flex flex-col items-center justify-center px-5">
			<Wallet class={$page.url.pathname !== '/subscriptions' ? 'text-muted-foreground' : ''} />
		</a>
		<div class="flex items-center justify-center">
			<button
				class="inline-flex items-center justify-center w-12 h-12 bg-accent rounded-full focus:outline-none"
			>
				<Plus class="w-4 h-4" />
			</button>
		</div>
		<a href="/settings" class="inline-flex flex-col items-center justify-center px-5">
			<Settings class={$page.url.pathname !== '/settings' ? 'text-muted-foreground' : ''} />
		</a>
		<a href="/library" class="inline-flex flex-col items-center justify-center px-5 rounded-r-full">
			<Library class={$page.url.pathname !== '/library' ? 'text-muted-foreground' : ''} />
		</a>
	</div>
</div>
