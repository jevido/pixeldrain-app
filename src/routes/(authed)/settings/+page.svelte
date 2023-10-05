<script>
	import { preferences } from '$lib/stores';
    console.debug($preferences)
</script>

Settings page
<button on:click={() => ($preferences.theme = 'dark')}>dark</button>
<button on:click={() => ($preferences.theme = 'funk')}>funk</button>
<button on:click={() => ($preferences.theme = 'white')}>white</button>

theme: {$preferences.theme}
