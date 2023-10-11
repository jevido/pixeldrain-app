<script>
	import { twMerge } from 'tailwind-merge';
	export let value;
	export let disabled = false;
	export let size = 'default';
	export let state = 'default';
	export let placeholder = '';
	export let classes = {};

	$: classNames = Object.keys(classes)
		.map((key) => (classes[key] ? key : ''))
		.join(' ');

	const sizes = {
		default: 'h-9',
		small: 'h-8',
		large: 'h-10',
		full: 'w-full'
	};

	const states = {
		default: '',
		error: 'border-destructive',
		warning: '',
		info: ''
	};

	$: mergedClasses = twMerge(
		'flex rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
		sizes[size],
		states[state],
		classNames
	);
</script>

<input {disabled} bind:value {placeholder} class={mergedClasses} on:input />
