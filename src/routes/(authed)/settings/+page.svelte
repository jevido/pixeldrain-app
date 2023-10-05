<script>
	import { Button } from '$lib/primitives';
	import { preferences } from '$lib/stores';
</script>

Settings page
<Button on:click={() => ($preferences.theme = 'dark')}>dark</Button>
<Button on:click={() => ($preferences.theme = 'funk')}>funk</Button>
<Button on:click={() => ($preferences.theme = 'white')}>white</Button>

theme: {$preferences.theme}
