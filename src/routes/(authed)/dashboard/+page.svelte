<script>
	import { api } from '$lib/api/pixeldrain';
	import { Spinner } from '$lib/components';

	import Dashboard from './Dashboard.svelte';
	import Account from './Account.svelte';
	import Pricing from './Pricing.svelte';
	import RecentlyUploaded from './RecentlyUploaded.svelte';

	async function load() {
		const data = [await api.get('user'), await api.get('user/files')];
		return data;
	}
</script>

{#await load()}
	<div class="fixed flex h-full w-full items-center justify-center">
		<Spinner class="h-12 w-12" />
	</div>
{:then [user, files]}
	<div class="p-4">
		<Dashboard {user} />
		<section class="mt-8">
			<RecentlyUploaded />
		</section>
		<Pricing />
		<section class="mt-8">
			<Account {user} {files} />
		</section>
	</div>
{/await}
