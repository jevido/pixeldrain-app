<script>
	import { greeting } from '$lib/util';
	export let user;
</script>

<p class="text-5xl font-extrabold text-center">
	{greeting()}
	<span class="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-purple-600"
		>{user.username}</span
	>
</p>
