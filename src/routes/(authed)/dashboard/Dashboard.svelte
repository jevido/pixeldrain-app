<script>
	import { greeting } from '$lib/util';
	export let user;
</script>

<p class="pointer-events-none mt-4 select-none text-center text-5xl font-extrabold">
	{greeting()}
	<span class="bg-gradient-to-br from-pink-400 to-purple-600 bg-clip-text text-transparent"
		>{user.username}</span
	>
</p>
