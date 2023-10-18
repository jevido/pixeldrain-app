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
	<div class="flex flex-col h-screen pb-16 overflow-y-auto">
		<slot />
	</div>
	<div class="fixed w-full bottom-0">
		<BottomNavigation />
	</div>
{/if}
