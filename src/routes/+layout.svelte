<script>
	import '../app.postcss';

	import { preferences } from '$lib/stores';

	let oldTheme = 'theme';

	function setTheme(oldtheme, newTheme) {
		document.body.classList.remove(oldtheme);
		document.body.classList.add(newTheme);

		oldTheme = newTheme;
	}

	$: setTheme(oldTheme, $preferences.theme);
</script>

<svelte:head>
	<title>PixelDrain</title>
	<meta name="theme-color" content="#1c064a" />
	<meta name="description" content="PixelDrain pwa" />
</svelte:head>

<div class="block min-h-screen bg-background text-foreground">
	<slot />
</div>
