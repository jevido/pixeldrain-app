function getCookie(name) {
	let cookieName = name + '=';
	let ca = document.cookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(cookieName) == 0) {
			return c.substring(cookieName.length, c.length);
		}
	}
	return '';
}

function setCookie(name, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
	let expires = 'expires=' + d.toUTCString();
	document.cookie = name + '=' + cvalue + ';' + expires + ';path=/';
}

function deleteCookie(name) {
	if (getCookie(name)) {
		setCookie(name, null, -1);
	}
}

export { getCookie, setCookie, deleteCookie };
