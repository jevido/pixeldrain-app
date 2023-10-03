<script>
	import { AlertCircle, X } from '$lib/icons';
	import { logout } from '$lib/api/pixeldrain';
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
</script>

<Modal bind:modalShown>
	<button
		class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
		data-modal-hide="popup-modal"
		on:click={() => (modalShown = false)}
	>
		<X class="w-5 h-5" />
		<span class="sr-only">Close modal</span>
	</button>
	<div class="p-6 text-center">
		<AlertCircle class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" />
		<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
			Are you sure you want to logout
		</h3>
		<button
			data-modal-hide="popup-modal"
			class="text-white bg-red-600 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
			on:click={logout}
		>
			Confirm
		</button>
		<button
			data-modal-hide="popup-modal"
			class="text-gray-500 bg-white hover:bg-gray-100 focus:outline-none rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
			on:click={() => (modalShown = false)}
		>
			No, cancel
		</button>
	</div>
</Modal>

<div
	class="relative w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
>
	<div class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
		<h5 class="text-2xl font-extrabold text-center">Statistics</h5>
		<dl
			class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto sm:grid-cols-3 xl:grid-cols-6 sm:p-8"
		>
			<div class="flex flex-col items-center justify-center">
				<dt class="mb-2 text-2xl font-extrabold text-center">{spaceUsed}</dt>
				<dd class="text-gray-500 dark:text-gray-400">Space used</dd>
			</div>
			<div class="flex flex-col items-center justify-center">
				<dt class="mb-2 text-2xl font-extrabold text-center">{spaceRemaining}</dt>
				<dd class="text-gray-500 dark:text-gray-400">remaining</dd>
			</div>
			<div class="flex flex-col items-center justify-center">
				<dt class="mb-2 text-2xl font-extrabold text-center">{bandwidthUsed}</dt>
				<dd class="text-gray-500 dark:text-gray-400">Bandwidth</dd>
			</div>
			<div class="flex flex-col items-center justify-center">
				<dt class="mb-2 text-2xl font-extrabold text-center">{bandwidthRemaining}</dt>
				<dd class="text-gray-500 dark:text-gray-400">remaining</dd>
			</div>
			<div class="flex flex-col items-center justify-center">
				<dt class="mb-2 text-2xl font-extrabold text-center">{files.files.length}</dt>
				<dd class="text-gray-500 dark:text-gray-400">Files</dd>
			</div>
			<div class="flex flex-col items-center justify-center">
				<dt class="mb-2 text-2xl font-extrabold text-center">{fileSizeLimit}</dt>
				<dd class="text-gray-500 dark:text-gray-400">file size limit</dd>
			</div>
		</dl>
		<div class="w-full justify-center flex">
			<button
				class="bg-red-600 hover:bg-red-700 rounded-md p-2 px-4"
				on:click={() => (modalShown = true)}
			>
				logout
			</button>
		</div>
	</div>
</div>
