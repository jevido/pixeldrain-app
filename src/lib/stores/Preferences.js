import { writable } from 'svelte/store';

function storable(data) {
	const store = writable(data);
	const { subscribe, set, update } = store;
	const isBrowser = typeof window !== 'undefined';

	isBrowser && localStorage.storable && set(JSON.parse(localStorage.storable));

	return {
		subscribe,
		set: (n) => {
			isBrowser && (localStorage.storable = JSON.stringify(n));
			set(n);
		},
		update: (cb) => {
			const updatedStore = cb(get(store));

			isBrowser && (localStorage.storable = JSON.stringify(updatedStore));
			set(updatedStore);
		}
	};
}

const darkMode = window?.matchMedia && window?.matchMedia('(prefers-color-scheme: dark)').matches;

export const preferences = storable({
	theme: darkMode ? 'dark' : ''
});
