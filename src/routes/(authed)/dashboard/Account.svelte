<script>
	import { logout } from '$lib/api/pixeldrain';
	import { AlertCircle } from '$lib/icons';
	import { formatBytes } from '$lib/util';
	import { Modal } from '$lib/components';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';

	export let user = {};
	export let files = {};

	$: spaceUsed = formatBytes(user?.storage_space_used);
	$: spaceRemaining = formatBytes(user?.subscription.storage_space - user?.storage_space_used);
	$: bandwidthUsed = formatBytes(user?.monthly_transfer_used);
	$: bandwidthRemaining = formatBytes(
		user?.subscription.monthly_transfer_cap - user?.monthly_transfer_used
	);
	$: fileSizeLimit = formatBytes(user?.subscription.file_size_limit);
	$: fileStorageLimit = formatBytes(user?.subscription.storage_space);

	let dialogOpen = true;
</script>

<Modal bind:dialogOpen>
	<div slot="description">
		<AlertCircle class="mx-auto mb-4 h-14 w-14" />
		Are you sure you want to logout
	</div>

	<Button variant="destructive" size="lg" on:click={logout}>Confirm</Button>
	<Button variant="secondary" size="lg" on:click={() => (dialogOpen = false)}>No, cancel</Button>
</Modal>

<Card.Root>
	<Card.Header>
		<Card.Title class="text-center text-4xl font-extrabold">Statistics</Card.Title>
	</Card.Header>
	<Card.Content>
		<div class="grid grid-cols-2 gap-4 gap-y-6 rounded-md p-4">
			<div class="text-center text-lg font-extrabold">
				{spaceUsed}<br /><span class="font-normal text-muted-foreground">space used</span>
			</div>
			<div class="text-center text-lg font-extrabold">
				{spaceRemaining}<br /><span class="font-normal text-muted-foreground">remaining</span>
			</div>
			<div class="text-center text-lg font-extrabold">
				{bandwidthUsed}<br /><span class="font-normal text-muted-foreground">bandwidth used</span>
			</div>
			<div class="text-center text-lg font-extrabold">
				{bandwidthRemaining}<br />
				<span class="font-normal text-muted-foreground">remaining</span>
			</div>
			<div class="text-center text-lg font-extrabold">
				{files.files.length}<br />
				<span class="font-normal text-muted-foreground">files uploaded</span>
			</div>
			<div class="text-center text-lg font-extrabold">
				{fileStorageLimit}<br />
				<span class="font-normal text-muted-foreground">storage limit</span>
			</div>
			<div class="col-span-2 text-center text-lg font-extrabold">
				{fileSizeLimit}<br />
				<span class="font-normal text-muted-foreground">filesize limit</span>
			</div>
		</div>
	</Card.Content>
</Card.Root>

<div class="mt-8 flex w-full justify-center">
	<Button variant="destructive" size="lg" on:click={() => (dialogOpen = true)}>logout</Button>
</div>
