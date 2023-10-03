<script>
	import { twMerge } from 'tailwind-merge';
	let className = '';

	export { className as class };
	export let variant = 'unordered';
	export let styled = 'unstyled';

	const variants = {
		unordered: '',
		ordered: 'list-decimal'
	};

	const styles = {
		unstyled: 'list-none',
		bullet: 'list-disc pl-2'
	};

	$: mergedClasses = twMerge(
		'max-w-md space-y-2 list-inside',
		styles[styled],
		variants[variant],
		className
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