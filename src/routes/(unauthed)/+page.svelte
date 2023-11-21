<script>
	import { open } from '@tauri-apps/api/shell';
	import {
		IconShareAlt,
		IconPrivateDoor,
		IconCloudDeploy,
		IconSend,
		IconWindow,
		IconPlanet
	} from 'obra-icons-svelte';
	import { buttonVariants } from '$lib/components/ui/button';
	import { Switch } from '$lib/components/ui/switch';
	import { Mastodon, Patreon, Twitter, Reddit } from '$lib/icons';

	let togglePlanYearly = false;
</script>

<header id="header">
	<img
		src="/branding/header_orbitron_wide.webp"
		alt="PixelDrain free filesharing"
		class="mx-auto mt-12 px-4 pb-6"
	/>
</header>

<section id="home" class="mb-8">
	<div class="container">
		<div class="flex flex-wrap">
			<div class="w-full px-4">
				<div class="mx-auto max-w-md text-center">
					<h1 class="mb-5 text-3xl font-bold leading-tight text-foreground">
						File sharing &amp; storage
					</h1>
					<p class="mb-12 text-lg font-medium leading-relaxed">
						Unleash the power of seamless file sharing and storage with PixelDrain. Elevate your
						digital experience – fast, secure, and hassle-free.
					</p>
					<div class="flex items-center justify-center">
						<a href="/login" class="mx-2 {buttonVariants({ size: 'lg' })}"> Login </a>
						<a
							href="https://pixeldrain.com/register"
							target="_BLANK"
							on:click={() => open('https://pixeldrain.com/register')}
							class="mx-2 {buttonVariants({ variant: 'outline', size: 'lg' })}"
						>
							Register
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="features" class="mb-16 mt-8">
	<div class="container">
		<div class=" flex flex-wrap">
			<div class="w-full px-4">
				<div class="mx-auto mb-16 max-w-[570px] text-center">
					<h2 class="mb-4 text-3xl font-bold text-foreground sm:text-4xl md:text-[45px]">
						Main Features
					</h2>
					<p class=" text-base leading-relaxed md:text-lg md:leading-relaxed">
						Discover the power of PixelDrain through its key features: Effortless Sharing, Privacy
						First, Generous Storage, Lightning-fast Transfers, User-Friendly Interface, and
						Cross-Platform Compatibility.
					</p>
				</div>
			</div>
		</div>
		<div class="grid grid-cols-1 gap-2 gap-y-8 sm:grid-cols-2 md:grid-cols-3 md:gap-4 md:gap-y-12">
			<div class="flex flex-col items-center text-center">
				<div
					class="mb-2 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary"
				>
					<IconShareAlt />
				</div>
				<h3 class="mb-2 text-xl font-bold text-foreground sm:text-2xl lg:text-xl xl:text-2xl">
					Effortless Sharing:
				</h3>
				<p class=" pr-[10px] font-medium leading-relaxed text-muted-foreground">
					Instantly share files with a simple link, making collaboration a breeze.
				</p>
			</div>
			<div class="flex flex-col items-center text-center">
				<div
					class="mb-2 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary"
				>
					<IconPrivateDoor />
				</div>
				<h3 class="mb-2 text-xl font-bold text-foreground sm:text-2xl lg:text-xl xl:text-2xl">
					Privacy First:
				</h3>
				<p class="font-medium leading-relaxed text-muted-foreground">
					No third party tracking scripts and no logging, we even go so far as to exclude
					third-party advertisement.
				</p>
			</div>
			<div class="flex flex-col items-center text-center">
				<div
					class="mb-2 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary"
				>
					<IconCloudDeploy />
				</div>
				<h3 class="mb-2 text-xl font-bold text-foreground sm:text-2xl lg:text-xl xl:text-2xl">
					Generous Storage:
				</h3>
				<p class="font-medium leading-relaxed text-muted-foreground">
					Ample space for all your files, with options to expand as needed.
				</p>
			</div>
			<div class="flex flex-col items-center text-center">
				<div
					class="mb-2 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary"
				>
					<IconSend />
				</div>
				<h3 class="mb-2 text-xl font-bold text-foreground sm:text-2xl lg:text-xl xl:text-2xl">
					Lightning-fast Transfers:
				</h3>
				<p class="font-medium leading-relaxed text-muted-foreground">
					Experience high-speed uploads and downloads for efficiency on the go.
				</p>
			</div>
			<div class="flex flex-col items-center text-center">
				<div
					class="mb-2 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary"
				>
					<IconWindow />
				</div>
				<h3 class="mb-2 text-xl font-bold text-foreground sm:text-2xl lg:text-xl xl:text-2xl">
					User-Friendly Interface:
				</h3>
				<p class="font-medium leading-relaxed text-muted-foreground">
					Intuitive design makes managing and organizing your files a delight.
				</p>
			</div>
			<div class="flex flex-col items-center text-center">
				<div
					class="mb-2 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary"
				>
					<IconPlanet />
				</div>
				<h3 class="mb-2 text-xl font-bold text-foreground sm:text-2xl lg:text-xl xl:text-2xl">
					Cross-Platform Compatibility:
				</h3>
				<p class="font-medium leading-relaxed text-muted-foreground">
					Access your files seamlessly across devices, from desktop to mobile.
				</p>
			</div>
		</div>
	</div>
</section>

<section id="cornerstones" class="my-8">
	<div class="container">
		<div class=" flex flex-wrap items-center">
			<div class="w-full px-4 lg:w-1/2">
				<div class="mb-12 text-center lg:mb-0 lg:text-left">
					<img src="images/sunrise.webp" alt="Sunrise" class="mx-auto max-w-full lg:ml-0" />
				</div>
			</div>
			<div class="w-full px-4 lg:w-1/2">
				<div class="max-w-[470px]">
					<div class="mb-9">
						<h3 class="mb-4 text-xl font-bold text-foreground sm:text-2xl lg:text-xl xl:text-2xl">
							Used world-wide
						</h3>
						<p class=" text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed">
							Trusted globally, our platform is a cornerstone for individuals and businesses alike.
							Experience the convenience and reliability that users around the world have come to
							depend on.
						</p>
					</div>
					<div class="mb-9">
						<h3 class="mb-4 text-xl font-bold text-foreground sm:text-2xl lg:text-xl xl:text-2xl">
							Built to last
						</h3>
						<p class=" text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed">
							By employing reliable and battle-tested encoding, we guarantee the longevity and
							steadfast security of your files. While your files remain unchanged
						</p>
					</div>
					<div class="mb-1">
						<h3 class="mb-4 text-xl font-bold text-foreground sm:text-2xl lg:text-xl xl:text-2xl">
							Regular updates
						</h3>
						<p class=" text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed">
							Stay current with seamless updates. Our commitment to continuous improvement ensures a
							cutting-edge experience. Join us as we evolve for an even better user experience.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="pricing" class="my-8">
	<div class="container">
		<div class=" flex flex-wrap">
			<div class="w-full px-4">
				<div class="mx-auto mb-[100px] max-w-[655px] text-center">
					<h2 class="mb-4 text-3xl font-bold text-foreground sm:text-4xl md:text-[45px]">
						Simple and Affordable Pricing
					</h2>
					<p class=" mx-auto max-w-[570px] text-base leading-relaxed md:text-lg md:leading-relaxed">
						Clear and affordable pricing designed with simplicity in mind. No hidden fees, just
						straightforward plans to suit your needs.
					</p>
				</div>
			</div>
		</div>
		<div class="flex flex-wrap">
			<div class="w-full px-4">
				<div class="mb-16 flex justify-center">
					<span
						class="mr-4 cursor-pointer text-base font-semibold"
						on:click={() => {
							togglePlanYearly = false;
						}}
					>
						Monthly
					</span>
					<div class="flex cursor-pointer items-center">
						<Switch bind:checked={togglePlanYearly} />
					</div>
					<span
						class="ml-4 cursor-pointer text-base font-semibold"
						on:click={() => {
							togglePlanYearly = true;
						}}
					>
						Yearly
					</span>
				</div>
			</div>
		</div>

		<div class="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3">
			<div class="mb-10 rounded-md bg-card px-8 py-10 text-card-foreground">
				<div class="flex items-center justify-between">
					<h3 class="mb-2 text-3xl font-bold">
						$0 / {togglePlanYearly ? 'year' : 'month'}
					</h3>
					<h4 class="mb-2 text-xl font-bold text-white">Free</h4>
				</div>
				<p class=" mb-7 text-base">
					Unlock the essentials, and start your PixelDrain journey today. no cost involved
				</p>
				<div
					class="border-body-color mb-8 border-b border-opacity-10 pb-8 dark:border-white dark:border-opacity-10"
				>
					<a
						href="javascript:void(0)"
						class="flex w-full items-center justify-center rounded-md bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80"
					>
						Start Free
					</a>
				</div>
				<div>
					<div class="mb-3 flex items-center">
						<span
							class="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary"
						>
							<svg width="8" height="6" viewBox="0 0 8 6" class="fill-current">
								<path
									d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z"
								/>
							</svg>
						</span>
						<p class=" m-0 text-base font-medium">5 GB per day</p>
					</div>
					<div class="mb-3 flex items-center">
						<span
							class="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary"
						>
							<svg width="8" height="6" viewBox="0 0 8 6" class="fill-current">
								<path
									d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z"
								/>
							</svg>
						</span>
						<p class=" m-0 text-base font-medium">Max 5 simultaneous downloads</p>
					</div>
					<div class="mb-3 flex items-center">
						<span
							class="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary"
						>
							<svg width="8" height="6" viewBox="0 0 8 6" class="fill-current">
								<path
									d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z"
								/>
							</svg>
						</span>
						<p class=" m-0 text-base font-medium">Files expire when inactive</p>
					</div>
					<div class="mb-3 flex items-center">
						<span
							class="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary"
						>
							<svg width="8" height="6" viewBox="0 0 8 6" class="fill-current">
								<path
									d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z"
								/>
							</svg>
						</span>
						<p class=" m-0 text-base font-medium">Files expire after 90 days of inactivity</p>
					</div>
					<div class="mb-3 flex items-center">
						<span
							class="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary"
						>
							<svg width="8" height="8" viewBox="0 0 8 8" class="fill-current stroke-current">
								<path
									d="M1.40102 0.95486C1.27421 0.828319 1.07219 0.828354 0.945421 0.954965C0.818519 1.08171 0.818519 1.28389 0.945421 1.41063L0.945612 1.41083L3.54915 4.00184L0.955169 6.60202C0.955106 6.60209 0.95504 6.60215 0.954978 6.60222C0.828263 6.72897 0.82833 6.93101 0.955169 7.05769C1.01288 7.11533 1.09989 7.15024 1.17815 7.15024C1.25641 7.15024 1.34342 7.11533 1.40113 7.05769L1.29513 6.95156L1.40113 7.05769L4.00493 4.45706L6.59917 7.0575L6.59936 7.05769C6.65707 7.11533 6.74408 7.15024 6.82234 7.15024C6.9006 7.15024 6.98761 7.11533 7.04532 7.05769C7.17215 6.93102 7.17222 6.729 7.04553 6.60224C7.04546 6.60217 7.04539 6.6021 7.04532 6.60202L4.46051 4.00165L7.05507 1.4009C7.05511 1.40085 7.05516 1.4008 7.05521 1.40076L7.05526 1.40071L6.94907 1.29477L1.40102 0.95486ZM1.40102 0.95486C1.40106 0.954895 1.40109 0.95493 1.40113 0.954965L1.40102 0.95486Z"
									stroke-width="0.3"
								/>
							</svg>
						</span>
						<p class=" m-0 text-base font-medium">20 GB/file</p>
					</div>
					<div class="flex items-center">
						<span
							class="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary"
						>
							<svg width="8" height="8" viewBox="0 0 8 8" class="fill-current stroke-current">
								<path
									d="M1.40102 0.95486C1.27421 0.828319 1.07219 0.828354 0.945421 0.954965C0.818519 1.08171 0.818519 1.28389 0.945421 1.41063L0.945612 1.41083L3.54915 4.00184L0.955169 6.60202C0.955106 6.60209 0.95504 6.60215 0.954978 6.60222C0.828263 6.72897 0.82833 6.93101 0.955169 7.05769C1.01288 7.11533 1.09989 7.15024 1.17815 7.15024C1.25641 7.15024 1.34342 7.11533 1.40113 7.05769L1.29513 6.95156L1.40113 7.05769L4.00493 4.45706L6.59917 7.0575L6.59936 7.05769C6.65707 7.11533 6.74408 7.15024 6.82234 7.15024C6.9006 7.15024 6.98761 7.11533 7.04532 7.05769C7.17215 6.93102 7.17222 6.729 7.04553 6.60224C7.04546 6.60217 7.04539 6.6021 7.04532 6.60202L4.46051 4.00165L7.05507 1.4009C7.05511 1.40085 7.05516 1.4008 7.05521 1.40076L7.05526 1.40071L6.94907 1.29477L1.40102 0.95486ZM1.40102 0.95486C1.40106 0.954895 1.40109 0.95493 1.40113 0.954965L1.40102 0.95486Z"
									stroke-width="0.3"
								/>
							</svg>
						</span>
						<p class="m-0 text-base font-medium">No ads!</p>
					</div>
				</div>
			</div>

			<div class="mb-10 rounded-md bg-card px-8 py-10 text-card-foreground">
				<div class="flex items-center justify-between">
					<h3 class="price mb-2 text-3xl font-bold text-foreground">
						${togglePlanYearly ? '40' : '4'} / {togglePlanYearly ? 'year' : 'month'}
					</h3>
					<h4 class="mb-2 text-xl font-bold text-white">Pro</h4>
				</div>
				<p class=" mb-7 text-base">Charged through Patreon</p>
				<div
					class="border-body-color mb-8 border-b border-opacity-10 pb-8 dark:border-white dark:border-opacity-10"
				>
					<a
						href="javascript:void(0)"
						class="flex w-full items-center justify-center rounded-md bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80"
					>
						Become pro
					</a>
				</div>
				<div>
					<div class="mb-3 flex items-center">
						<span
							class="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary"
						>
							<svg width="8" height="6" viewBox="0 0 8 6" class="fill-current">
								<path
									d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z"
								/>
							</svg>
						</span>
						<p class=" m-0 text-base font-medium">2TB per 30days</p>
					</div>
					<div class="mb-3 flex items-center">
						<span
							class="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary"
						>
							<svg width="8" height="6" viewBox="0 0 8 6" class="fill-current">
								<path
									d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z"
								/>
							</svg>
						</span>
						<p class=" m-0 text-base font-medium">Hotlinking</p>
					</div>
					<div class="mb-3 flex items-center">
						<span
							class="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary"
						>
							<svg width="8" height="6" viewBox="0 0 8 6" class="fill-current">
								<path
									d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z"
								/>
							</svg>
						</span>
						<p class=" m-0 text-base font-medium">Unlimited simultaneous downloads</p>
					</div>
					<div class="mb-3 flex items-center">
						<span
							class="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary"
						>
							<svg width="8" height="6" viewBox="0 0 8 6" class="fill-current">
								<path
									d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z"
								/>
							</svg>
						</span>
						<p class=" m-0 text-base font-medium">240 days (8months) file expiry</p>
					</div>
					<div class="mb-3 flex items-center">
						<span
							class="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary"
						>
							<svg width="8" height="6" viewBox="0 0 8 6" class="fill-current">
								<path
									d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z"
								/>
							</svg>
						</span>
						<p class=" m-0 text-base font-medium">100 GB/file</p>
					</div>
					<div class="flex items-center">
						<span
							class="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary"
						>
							<svg width="8" height="8" viewBox="0 0 8 8" class="fill-current stroke-current">
								<path
									d="M1.40102 0.95486C1.27421 0.828319 1.07219 0.828354 0.945421 0.954965C0.818519 1.08171 0.818519 1.28389 0.945421 1.41063L0.945612 1.41083L3.54915 4.00184L0.955169 6.60202C0.955106 6.60209 0.95504 6.60215 0.954978 6.60222C0.828263 6.72897 0.82833 6.93101 0.955169 7.05769C1.01288 7.11533 1.09989 7.15024 1.17815 7.15024C1.25641 7.15024 1.34342 7.11533 1.40113 7.05769L1.29513 6.95156L1.40113 7.05769L4.00493 4.45706L6.59917 7.0575L6.59936 7.05769C6.65707 7.11533 6.74408 7.15024 6.82234 7.15024C6.9006 7.15024 6.98761 7.11533 7.04532 7.05769C7.17215 6.93102 7.17222 6.729 7.04553 6.60224C7.04546 6.60217 7.04539 6.6021 7.04532 6.60202L4.46051 4.00165L7.05507 1.4009C7.05511 1.40085 7.05516 1.4008 7.05521 1.40076L7.05526 1.40071L6.94907 1.29477L1.40102 0.95486ZM1.40102 0.95486C1.40106 0.954895 1.40109 0.95493 1.40113 0.954965L1.40102 0.95486Z"
									stroke-width="0.3"
								/>
							</svg>
						</span>
						<p class=" m-0 text-base font-medium">No ads!</p>
					</div>
				</div>
			</div>

			<div class="mb-10 rounded-md bg-card px-8 py-10 text-card-foreground">
				<div class="flex items-center justify-between">
					<h3 class="price mb-2 text-3xl font-bold text-foreground">
						${togglePlanYearly ? '24' : '2'} / {togglePlanYearly ? 'year' : 'month'}
					</h3>
					<h4 class="mb-2 text-xl font-bold text-white">Prepaid</h4>
				</div>
				<p class=" mb-7 text-base">
					Never pay for more than you use, by paying up-front, you pay for bandwidth and storage
					seperately
				</p>
				<div
					class="border-body-color mb-8 border-b border-opacity-10 pb-8 dark:border-white dark:border-opacity-10"
				>
					<a
						href="javascript:void(0)"
						class="flex w-full items-center justify-center rounded-md bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80"
					>
						Go prepaid
					</a>
				</div>
				<div>
					<div class="mb-3 flex items-center">
						<span
							class="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary"
						>
							<svg width="8" height="6" viewBox="0 0 8 6" class="fill-current">
								<path
									d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z"
								/>
							</svg>
						</span>
						<p class=" m-0 text-base font-medium">$2 per TB transferred</p>
					</div>
					<div class="mb-3 flex items-center">
						<span
							class="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary"
						>
							<svg width="8" height="6" viewBox="0 0 8 6" class="fill-current">
								<path
									d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z"
								/>
							</svg>
						</span>
						<p class=" m-0 text-base font-medium">$4 per TB stored</p>
					</div>
					<div class="mb-3 flex items-center">
						<span
							class="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary"
						>
							<svg width="8" height="6" viewBox="0 0 8 6" class="fill-current">
								<path
									d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z"
								/>
							</svg>
						</span>
						<p class=" m-0 text-base font-medium">Hotlinking</p>
					</div>
					<div class="mb-3 flex items-center">
						<span
							class="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary"
						>
							<svg width="8" height="6" viewBox="0 0 8 6" class="fill-current">
								<path
									d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z"
								/>
							</svg>
						</span>
						<p class=" m-0 text-base font-medium">Unlimited simultaneous downloads</p>
					</div>
					<div class="mb-3 flex items-center">
						<span
							class="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary"
						>
							<svg width="8" height="6" viewBox="0 0 8 6" class="fill-current">
								<path
									d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z"
								/>
							</svg>
						</span>
						<p class=" m-0 text-base font-medium">
							Files never expire while subscription is active
						</p>
					</div>
					<div class="mb-3 flex items-center">
						<span
							class="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary"
						>
							<svg width="8" height="6" viewBox="0 0 8 6" class="fill-current">
								<path
									d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z"
								/>
							</svg>
						</span>
						<p class=" m-0 text-base font-medium">100 GB/file</p>
					</div>
					<div class="flex items-center">
						<span
							class="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary"
						>
							<svg width="8" height="6" viewBox="0 0 8 6" class="fill-current">
								<path
									d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z"
								/>
							</svg>
						</span>
						<p class=" m-0 text-base font-medium">No ads!</p>
					</div>
				</div>
			</div>
		</div>

		<a
			href="https://pixeldrain.com/register"
			target="_BLANK"
			on:click={() => open('https://pixeldrain.com/register')}
			class="flex justify-center text-lg underline"
		>
			other subscriptions
		</a>
	</div>
</section>

<footer class="relative z-10 bg-secondary bg-opacity-5 pt-16">
	<div class="mx-auto max-w-md pb-16">
		<a
			href="https://pixeldrain.com"
			target="_BLANK"
			on:click={() => open('https://pixeldrain.com')}
			class="mb-8 inline-block"
		>
			<img src="branding/header_orbitron.webp" alt="logo" class="w-full" />
		</a>

		<div class="flex justify-center">
			<a
				href="https://www.patreon.com/pixeldrain"
				on:click={() => open('https://www.patreon.com/pixeldrain')}
				target="_BLANK"
				aria-label="social-link-patreon"
				class="mr-6 hover:text-primary"
			>
				<Patreon />
			</a>
			<a
				href="https://twitter.com/Fornax96"
				on:click={() => open('https://twitter.com/Fornax96')}
				target="_BLANK"
				aria-label="social-link-twitter"
				class="mr-6 hover:text-primary"
			>
				<Twitter />
			</a>
			<a
				href="https://www.reddit.com/r/pixeldrain"
				on:click={() => open('https://www.reddit.com/r/pixeldrain')}
				target="_BLANK"
				aria-label="social-link-reddit"
				class="mr-6 hover:text-primary"
			>
				<Reddit />
			</a>
			<a
				href="https://mastodon.social/@fornax"
				on:click={() => open('https://mastodon.social/@fornax')}
				target="_BLANK"
				aria-label="social-link-mastodon"
				class="mr-6 hover:text-primary"
			>
				<Mastodon />
			</a>
		</div>
	</div>
</footer>
