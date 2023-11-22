<script>
	import { Block } from '$lib/components';
	import { files } from '$lib/api/pixeldrain';
	import { Progress } from '$lib/components/ui/progress';
	import * as Card from '$lib/components/ui/card';
</script>

{#if $files.length > 0}
	<Card.Root>
		<Card.Header>
			<Card.Title class="text-center text-4xl font-extrabold">Statistics</Card.Title>
		</Card.Header>
		<Card.Content>
			<ul>
				{#each $files as file}
					<li class="flex flex-1 space-x-4 py-3 sm:py-4">
						<span class="w-full truncate text-sm font-medium">{file.name}</span>

						{#if file.id}
							<a href="/file?id={file.id}">View</a>
						{:else}
							<div class="relative w-full">
								<Progress value={file.progress} max={100} class="w-full" />

								<span class="absolute -bottom-3 left-0 right-0 text-center text-sm">
									{#if file.progress < 100}
										<!-- Add this class -->
										{file.progress}%
									{:else}
										<!-- Add this class -->
										Finishing
									{/if}
								</span>
							</div>
						{/if}
					</li>
				{/each}
			</ul>
		</Card.Content>
	</Card.Root>
{/if}
