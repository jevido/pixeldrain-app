<script>
	import '../app.postcss';

	let darkMode = window?.matchMedia && window?.matchMedia('(prefers-color-scheme: dark)').matches;
</script>

<svelte:head>
	<title>PixelDrain</title>
	<meta name="theme-color" content="#1c064a" />
	<meta name="description" content="PixelDrain pwa" />
</svelte:head>

<div class:dark={darkMode} class="bg-background text-foreground block h-screen">
	<slot />
</div>
