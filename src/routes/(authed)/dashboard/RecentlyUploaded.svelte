<script>
	import { Block } from '$lib/components';
	import { files } from '$lib/api/pixeldrain';
	import { Progress } from '$lib/components/ui/progress';
</script>

{#if $files.length > 0}
	<Block>
		<h5 class="text-center text-2xl font-extrabold">Recently uploaded</h5>
		<div class="flow-root">
			<ul role="list" class="divide-y divide-gray-200 overflow-y-auto dark:divide-gray-700">
				{#each $files as file}
					<li class="py-3 sm:py-4">
						<a href={file.id ? `/file?id=${file.id}` : undefined} class="flex items-center space-x-4">
							<div class="min-w-0 flex-1">
								<p class="truncate text-sm font-medium">
									{file.name}
								</p>
							</div>
							{#if file.progress}
								<div class="flex flex-col items-center text-base font-semibold">
									{#if file.id}
										<a href="/file/{file.id}">View</a>
									{:else if file.progress < 100}
										{file.progress}%
										<Progress value={file.progress} max={100} class="w-full" />
									{:else}
										finishing
									{/if}
								</div>
							{/if}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</Block>
{/if}
