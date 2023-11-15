<script>
	import { twMerge } from 'tailwind-merge';
	export let classes = {};

	$: classNames = Object.keys(classes)
		.map((key) => (classes[key] ? key : ''))
		.join(' ');
</script>

<div class={twMerge('relative w-full shadow', classNames)}>
	<div class="rounded-lg border border-border bg-secondary p-4">
		<slot />
	</div>
</div>
