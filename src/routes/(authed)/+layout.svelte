<script setup>
	import { BottomNavigation } from '$lib/components';
	import { Spinner } from '$lib/components';
	import { fetchUserData } from '$lib/api/pixeldrain';

	import { goto } from '$app/navigation';
	import { getCookie } from '$lib/util';

	async function load() {
		const auth_key = getCookie('pd_auth_key');

		if (!auth_key) {
			goto('/login');
			return;
		}

		const userData = await fetchUserData();
	}
</script>

{#await load()}
	<div class="fixed flex h-full w-full items-center justify-center">
		<Spinner class="h-12 w-12" />
	</div>
{:then}
	<div class="flex h-screen flex-col overflow-y-auto pb-16">
		<slot />
	</div>
	<div class="fixed bottom-0 w-full">
		<BottomNavigation />
	</div>
{/await}
