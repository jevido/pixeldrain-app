import { goto } from '$app/navigation';
import { page } from '$app/stores';
import { writable, get } from 'svelte/store';

import { deleteCookie } from '$lib/util';

// todo: handle errors
// - error on auth_key revoked

class Api {
	constructor() {
		this.endpoint = `/api/`;
	}

	async get(resource) {
		const data = await fetch(this.endpoint + resource, {
			credentials: 'include'
		});
		return await this.validateResponse(data);
	}

	async post(resource, formData, extra) {
		const data = await fetch(this.endpoint + resource, {
			method: 'POST',
			body: formData,
			credentials: 'include',
			...extra
		});

		return await this.validateResponse(data);
	}

	async delete(resource) {
		const data = await fetch(this.endpoint + resource, {
			method: 'DELETE',
			credentials: 'include'
		});
		return await data.json();
	}

	async validateResponse(response) {
		const json = await response.json()
		if (json?.success === false) {
			if (json.value == 'authentication_required' || json.value == 'authentication_failed') {
				await logout();

				if (get(page)?.url?.pathname !== '/') {
					goto('/');
				}
			}
		}

		return json;
	}
}

const api = new Api();

const authenticate = async (username, password) => {
	const formData = new FormData();
	formData.append('username', username);
	formData.append('password', password);
	formData.append('app_name', 'pixeldrain-mobile');

	const result = await api.post('user/login', formData);

	return result;
};

const fetchUserData = async () => {
	return await api.get('user');
};

const logout = async () => {
	// delete cookie
	await api.delete('user/session');
	deleteCookie('pd_auth_key');
	console.debug('ello?')
	goto('/login');
};

const Files = () => {
	let files = [];

	const { subscribe, set, update } = writable(files);

	const publicMethods = {
		// Accepts a FileList entry
		// Todo: clean this up
		upload: function (file) {
			let index = files.length;
			// Push the uploaded file in the tracked list. And update svelte
			update((files) => {
				files.push({
					name: file.name,
					progress: 0
				});
				return files;
			});

			let xhr = new XMLHttpRequest();
			xhr.open('PUT', api.endpoint + 'file/' + encodeURIComponent(file.name));
			xhr.withCredentials = true;

			// Todo: think about 6 hours for a mobile connection...
			xhr.timeout = 21600000; // 6 hours, to account for slow connections
			xhr.upload.onprogress = (event) => {
				update((files) => {
					let p = event.loaded / event.total;
					files[index].progress = parseInt(p * 100);
					return files;
				});
			};

			// Never remove the files from the list, since the index could be wrong when uploading multiple files
			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					if (this.status == 201) {
						update((files) => {
							files[index].id = JSON.parse(xhr.response).id;
							// Todo: We don't get a lot of information here
							// Maybe add the classic throttle function to retrieve the new files
							// And the pushed file object does not contain the mimetype
							return files;
						});
					} else {
						//pixeldrain.com/u/undefined
						console.error(xhr);
					}
				}
			};
			xhr.send(file);
		}
	};

	return {
		subscribe,
		set,
		update,
		...publicMethods
	};
};

const files = Files();

export { api, authenticate, fetchUserData, logout, files };
