<script>
	import { logout } from '$lib/api/pixeldrain';
	import { Button } from '$lib/primitives';
	import { AlertCircle, X } from '$lib/icons';
	import { formatBytes } from '$lib/util';
	import { Block, Modal } from '$lib/components';

	export let user = {};
	export let files = {};

	$: spaceUsed = formatBytes(user?.storage_space_used);
	$: spaceRemaining = formatBytes(user?.subscription.storage_space - user?.storage_space_used);
	$: bandwidthUsed = formatBytes(user?.monthly_transfer_used);
	$: bandwidthRemaining = formatBytes(
		user?.subscription.monthly_transfer_cap - user?.monthly_transfer_used
	);
	$: fileSizeLimit = formatBytes(user?.subscription.file_size_limit);

	let modalShown = false;

	// Todo: Show logout button without the requirement of statistics.
	// If an error occurs, you should be able to log out
</script>

<Modal bind:modalShown>
	<button
		class="absolute right-2.5 top-3 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm"
		data-modal-hide="popup-modal"
		on:click={() => (modalShown = false)}
	>
		<X class="h-5 w-5" />
		<span class="sr-only">Close modal</span>
	</button>
	<div class="p-6 text-center">
		<AlertCircle class="mx-auto mb-4 h-14 w-14" />
		<h3 class="mb-5 text-lg font-normal">Are you sure you want to logout</h3>
		<Button variant="destructive" on:click={logout}>Confirm</Button>
		<Button class="bg-gray-700 text-foreground" on:click={() => (modalShown = false)}>
			No, cancel
		</Button>
	</div>
</Modal>

<Block>
	<h5 class="pointer-events-none select-none text-center text-2xl font-extrabold">Statistics</h5>
	<dl
		class="mx-auto grid max-w-screen-xl grid-cols-2 gap-8 p-4 sm:grid-cols-3 sm:p-8 xl:grid-cols-6"
	>
		<div class="flex flex-col items-center justify-center">
			<dt class="mb-2 text-center text-2xl font-extrabold">{spaceUsed}</dt>
			<dd class="text-muted-foreground">Space used</dd>
		</div>
		<div class="flex flex-col items-center justify-center">
			<dt class="mb-2 text-center text-2xl font-extrabold">{spaceRemaining}</dt>
			<dd class="text-muted-foreground">remaining</dd>
		</div>
		<div class="flex flex-col items-center justify-center">
			<dt class="mb-2 text-center text-2xl font-extrabold">{bandwidthUsed}</dt>
			<dd class="text-muted-foreground">Bandwidth</dd>
		</div>
		<div class="flex flex-col items-center justify-center">
			<dt class="mb-2 text-center text-2xl font-extrabold">{bandwidthRemaining}</dt>
			<dd class="text-muted-foreground">remaining</dd>
		</div>
		<div class="flex flex-col items-center justify-center">
			<dt class="mb-2 text-center text-2xl font-extrabold">{files.files.length}</dt>
			<dd class="text-muted-foreground">Files</dd>
		</div>
		<div class="flex flex-col items-center justify-center">
			<dt class="mb-2 text-center text-2xl font-extrabold">{fileSizeLimit}</dt>
			<dd class="text-muted-foreground">file size limit</dd>
		</div>
	</dl>
	<div class="flex w-full justify-center">
		<Button variant="destructive" size="large" on:click={() => (modalShown = true)}>logout</Button>
	</div>
</Block>
