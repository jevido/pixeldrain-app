<script>
	import { twMerge } from 'tailwind-merge';
</script>

<svg
	class={twMerge('h-5 w-5', $$props.class)}
	aria-hidden="true"
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 18 18"
>
	<path
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		d="M9 1v16M1 9h16"
	/>
</svg>
<span class="sr-only">New item</span>
