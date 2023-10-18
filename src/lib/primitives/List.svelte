<script>
	import { twMerge } from 'tailwind-merge';
	export let variant = 'unordered';
	export let styled = 'unstyled';
	export let classes = {};

	$: classNames = Object.keys(classes)
		.map((key) => (classes[key] ? key : ''))
		.join(' ');

	const variants = {
		unordered: '',
		ordered: 'list-decimal'
	};

	const styles = {
		unstyled: 'list-none',
		bullet: 'list-disc pl-2'
	};

	$: mergedClasses = twMerge(
		'max-w-md space-y-2 list-inside w-full',
		styles[styled],
		variants[variant],
		classNames
	);
</script>

{#if variant === 'unordered'}
	<ul class={mergedClasses}>
		<slot />
	</ul>
{:else}
	<ol class={mergedClasses}>
		<slot />
	</ol>
{/if}
