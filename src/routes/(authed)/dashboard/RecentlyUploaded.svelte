<script>
	import { files } from '$lib/api/pixeldrain';
</script>

{#if $files.length > 0}
	<div
		class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
	>
		<h5 class="text-2xl font-extrabold text-center">Recently uploaded</h5>
		<div class="flow-root">
			<ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700 overflow-y-auto">
				{#each $files as file}
					<li class="py-3 sm:py-4">
						<a href={file.id ? `/file/${file.id}` : undefined} class="flex items-center space-x-4">
							<div class="flex-1 min-w-0">
								<p class="text-sm font-medium truncate">
									{file.name}
								</p>
							</div>
							{#if file.progress}
								<div class="inline-flex items-center text-base font-semibold">
									{#if file.id}
									<a href="/file/{file.id}">View</a>
									{:else}
									{file.progress}%
									{/if}
								</div>
							{/if}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
{/if}
