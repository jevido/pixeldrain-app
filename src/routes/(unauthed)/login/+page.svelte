<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { Mail, Lock } from '$lib/icons';

	import { Spinner } from '$lib/components';
	import { Button } from '$lib/components/ui/button';
	import { authenticate, logout } from '$lib/api/pixeldrain';
	import { getCookie } from '$lib/util';

	let username = '';
	let password = '';
	let message = '';
	let waiting = false;

	async function submit() {
		waiting = true;
		if (getCookie('pd_auth_key')) {
			await logout();
		}

		const auth = await authenticate(username, password);

		if (auth.success !== false) {
			goto('/dashboard');
		} else {
			message = auth.message;
		}

		waiting = false;
	}

	// Authentication is done per api-request,
	// so this will just send you back to login in-case of authentication falsication
	if (browser && getCookie('pd_auth_key')) {
		goto('/dashboard');
	}
</script>

<div class="flex h-screen justify-center">
	<div class="bg-background/60 w-full">
		<div class="mx-auto flex w-full max-w-md items-center px-6">
			<div class="flex-1 h-full py-16">
				<div class="text-center">
					<img class="mb-4" src="/branding/header_orbitron.webp" alt="pixeldrain logo" />
					<p class="mt-3 font-medium text-center">Sign in with your account</p>
					{#if message !== ''}
						<span class="text-destructive">{message}</span>
					{/if}
				</div>

				<div class="mt-8">
					<form on:submit|preventDefault={submit}>
						<label for="email" class="block mb-2 text-sm font-medium">
							Your username or e-mail
						</label>
						<div class="relative mb-6">
							<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<Mail tabindex="-1" />
							</div>
							<input
								type="text"
								id="email"
								class="bg-input border border-border text-sm rounded-lg focus:outline-none block w-full pl-10 p-2.5"
								placeholder="name@gmail.com"
								autocapitalize="none"
								required
								bind:value={username}
							/>
						</div>
						<div class="mt-6">
							<label for="password" class="justify-between flex mb-2 text-sm font-medium">
								Your password
								<a
									href="https://pixeldrain.com/password_reset"
									target="_BLANK"
									tabindex="-1"
									class="text-sm hover:text-accent-foreground truncate focus:outline-none"
								>
									Forgot password?
								</a>
							</label>
							<div class="relative mb-6">
								<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
									<Lock tabindex="-1" />
								</div>
								<input
									type="password"
									id="password"
									class="bg-input border border-border text-sm rounded-lg focus:outline-none block w-full pl-10 p-2.5"
									placeholder="******"
									required
									bind:value={password}
								/>
							</div>
						</div>

						<div class="mt-6">
							<Button
								type="submit"
								class="w-full rounded-lg"
								disabled={waiting}
							>
								{#if waiting}
									<Spinner class="inline py-0 h-4" />
								{:else}
									Sign in
								{/if}
							</Button>
						</div>
					</form>

					<p class="mt-6 text-center font-medium">
						Don't have an account yet? <br />
						<a class="underline" href="https://pixeldrain.com/register" target="_BLANK">
							Sign up
						</a>.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	input:autofill {
		background: none; /* or any other */
	}
</style>
