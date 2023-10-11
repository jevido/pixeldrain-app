<script>
	import { twMerge } from 'tailwind-merge';

	export let classes = {};

	$: classNames = Object.keys(classes)
		.map((key) => (classes[key] ? key : ''))
		.join(' ');

	$: mergedClasses = twMerge('', classNames);
</script>

<li class={mergedClasses}>
	<slot />
</li>
