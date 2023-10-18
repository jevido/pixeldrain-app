<script>
	import '../app.postcss';

	import { preferences } from '$lib/stores';
</script>

<svelte:head>
	<title>PixelDrain</title>
	<meta name="theme-color" content="#1c064a" />
	<meta name="description" content="PixelDrain pwa" />
</svelte:head>

<div class="bg-background text-foreground block min-h-screen {$preferences.theme}">
	<slot />
</div>
