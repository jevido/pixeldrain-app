<script>
	import { page } from '$app/stores';
	import { buttonVariants } from '$lib/components/ui/button';
</script>

<div class="mb-auto mx-8 mt-8">
	<slot />
</div>

{#if $page.url.pathname !== '/profile/account'}
<a href="/profile/account" class="{buttonVariants({ variant: 'secondary' })} py-6"> Account </a>
{/if}
{#if $page.url.pathname !== '/profile/appearance' && $page.url.pathname !== '/profile'}
<a href="/profile/appearance" class="{buttonVariants({ variant: 'secondary' })} py-6"> Appearance </a>
{/if}
