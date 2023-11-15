<script>
	import { api, logout } from '$lib/api/pixeldrain';
	import { Spinner } from '$lib/components';
	import { Button } from '$lib/components/ui/button';

	async function load() {
		return await api.get('user');
	}
</script>

{#await load()}
	<div class="fixed flex h-full w-full items-center justify-center">
		<Spinner class="h-12 w-12" />
	</div>
{:then user}
	{user.username}

	<Button variant="outline" on:click={logout}>logout</Button>
{/await}
