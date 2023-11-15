<script setup>
	import { BottomNavigation } from '$lib/components';

	import { goto } from '$app/navigation';
	import { getCookie } from '$lib/util';

	const auth_key = getCookie('pd_auth_key');
	if (!auth_key) {
		goto('/login');
	}
</script>

{#if auth_key}
	<div class="flex h-screen flex-col overflow-y-auto pb-16">
		<slot />
	</div>
	<div class="fixed bottom-0 w-full">
		<BottomNavigation />
	</div>
{/if}
