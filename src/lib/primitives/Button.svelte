<script>
	import { twMerge } from 'tailwind-merge';
	export let type = 'button';
	export let variant = 'default';
	export let size = 'default';
	export let disabled = false;
	export let classes = {};

	$: classNames = Object.keys(classes)
		.map((key) => (classes[key] ? key : ''))
		.join(' ');

	const variants = {
		default: 'bg-primary text-primary-foreground shadow hover-bg-primary/90',
		destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
		outline:
			'border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground',
		secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
		ghost: 'hover:bg-accent hover:text-accent-foreground',
		link: 'text-primary underline-offset-4 hover:underline',
		submit: 'bg-secondary/90 text-secondary-foreground shadow-sm hover:bg-secondary'
	};

	const sizes = {
		default: 'h-9 px-4 py-2',
		small: 'h-8 rounded-md px-3 text-xs',
		large: 'h-10 rounded-md px-8',
		icon: 'h-9 w-9'
	};

	$: mergedClasses = twMerge(
		'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
		variants[variant],
		sizes[size],
		classNames
	);
</script>

<button {type} {disabled} class={mergedClasses} on:click>
	<slot />
</button>
