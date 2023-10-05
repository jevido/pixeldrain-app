<script>
	import { logout } from '$lib/api/pixeldrain';
	import { Button } from '$lib/primitives';
	import { AlertCircle, X } from '$lib/icons';
	import { formatBytes } from '$lib/util';
	import { Modal } from '$lib/components/modal';

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
		class="absolute top-3 right-2.5 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
		data-modal-hide="popup-modal"
		on:click={() => (modalShown = false)}
	>
		<X class="w-5 h-5" />
		<span class="sr-only">Close modal</span>
	</button>
	<div class="p-6 text-center">
		<AlertCircle class="mx-auto mb-4 w-14 h-14" />
		<h3 class="mb-5 text-lg font-normal">Are you sure you want to logout</h3>
		<Button variant="destructive" on:click={logout}>Confirm</Button>
		<Button class="bg-gray-700 text-foreground" on:click={() => (modalShown = false)}>
			No, cancel
		</Button>
	</div>
</Modal>

<div class="relative w-full shadow">
	<div class="p-4 rounded-lg border border-border bg-secondary">
		<h5 class="text-2xl font-extrabold text-center  pointer-events-none select-none">Statistics</h5>
		<dl
			class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto sm:grid-cols-3 xl:grid-cols-6 sm:p-8"
		>
			<div class="flex flex-col items-center justify-center">
				<dt class="mb-2 text-2xl font-extrabold text-center">{spaceUsed}</dt>
				<dd class="text-muted-foreground">Space used</dd>
			</div>
			<div class="flex flex-col items-center justify-center">
				<dt class="mb-2 text-2xl font-extrabold text-center">{spaceRemaining}</dt>
				<dd class="text-muted-foreground">remaining</dd>
			</div>
			<div class="flex flex-col items-center justify-center">
				<dt class="mb-2 text-2xl font-extrabold text-center">{bandwidthUsed}</dt>
				<dd class="text-muted-foreground">Bandwidth</dd>
			</div>
			<div class="flex flex-col items-center justify-center">
				<dt class="mb-2 text-2xl font-extrabold text-center">{bandwidthRemaining}</dt>
				<dd class="text-muted-foreground">remaining</dd>
			</div>
			<div class="flex flex-col items-center justify-center">
				<dt class="mb-2 text-2xl font-extrabold text-center">{files.files.length}</dt>
				<dd class="text-muted-foreground">Files</dd>
			</div>
			<div class="flex flex-col items-center justify-center">
				<dt class="mb-2 text-2xl font-extrabold text-center">{fileSizeLimit}</dt>
				<dd class="text-muted-foreground">file size limit</dd>
			</div>
		</dl>
		<div class="w-full justify-center flex">
			<Button variant="destructive" size="large" on:click={() => (modalShown = true)}>
				logout
			</Button>
		</div>
	</div>
</div>
