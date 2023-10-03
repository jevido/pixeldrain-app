function greeting() {
	let greet;
	const date = new Date();
	const hour = date.getHours();

	greet = 'Hello. How do you do?'; // first time

	if (hour > 2 && hour < 5) {
		greet = 'What a time to be uploading files!';
	}

	if (hour >= 5 && hour < 12) {
		greet = 'Good morning';
	}

	if (hour >= 12 && hour < 16) {
		greet = 'Good afternoon';
	}
	if (hour >= 16 && hour <= 23) {
		greet = 'Good evening';
	}
	if (hour >= 0 && hour < 2) {
		greet = 'Good evening';
	}

	return greet;
}

function formatBytes(bytes, decimals = 2) {
	if (bytes === 0) return '0 Bytes';

	const k = 1024;
	const dm = decimals < 0 ? 0 : decimals;
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

	const i = Math.floor(Math.log(bytes) / Math.log(k));

	return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function formatDate(dateString) {
	return new Date(dateString).toLocaleString();
}

export { greeting, formatBytes, formatDate };
