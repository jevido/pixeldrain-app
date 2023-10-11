<script>
	import { Button } from '$lib/primitives';
	import { preferences } from '$lib/stores';
</script>

Choose a theme
<ol class="w-full items-center flex flex-col">
	<li>
		<Button
			variant="outline"
			size="large"
			classes={{ 'bg-accent': $preferences.theme === 'dark' }}
			on:click={() => ($preferences.theme = 'dark')}>dark</Button
		>
	</li>
	<li>
		<Button
			variant="outline"
			size="large"
			classes={{ 'bg-accent': $preferences.theme === 'funk' }}
			on:click={() => ($preferences.theme = 'funk')}>funk</Button
		>
	</li>
	<li>
		<Button
			variant="outline"
			size="large"
			classes={{ 'bg-accent': $preferences.theme === 'white' }}
			on:click={() => ($preferences.theme = 'white')}>white</Button
		>
	</li>
	<li>
		<Button
			variant="outline"
			size="large"
			classes={{ 'bg-accent': $preferences.theme === 'flexoki-bright' }}
			on:click={() => ($preferences.theme = 'flexoki-bright')}>flexoki-bright</Button
		>
	</li>
	<li>
		<Button
			variant="outline"
			size="large"
			classes={{ 'bg-accent': $preferences.theme === 'flexoki-dark' }}
			on:click={() => ($preferences.theme = 'flexoki-dark')}>flexoki-dark</Button
		>
	</li>
</ol>

theme: {$preferences.theme}
