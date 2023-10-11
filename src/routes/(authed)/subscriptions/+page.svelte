<script>
	import { formatBytes } from '$lib/util';

	const maxWidth = 320;
	const maxHeight = 180;

	let oldImageSrc;
	let newImageSrc;
	let text = '';

	// function onFileSelected(event) {
	// 	const image = event.target.files[0];
	// 	const reader = new FileReader();
	// 	reader.readAsDataURL(image);

	// 	reader.onload = (e) => {
	// 		oldImageSrc = e.target.result;
    //         console.debug(image);

	// 		const [newWidth, newHeight] = calculateSize(oldImageSrc, maxWidth, maxHeight);

	// 		const canvas = document.createElement('canvas');
	// 		canvas.width = newWidth;
	// 		canvas.height = newHeight;

	// 		const ctx = canvas.getContext('2d');
	// 		ctx.drawImage(image, 0, 0, newWidth, newHeight);
	// 		canvas.toBlob(
	// 			(blob) => {
	// 				newImageSrc = window.URL.createObjectURL(blob);
	// 			},
	// 			undefined,
	// 			1
	// 		);
	// 	};
	// }

    function onFileSelected(event) {
    const imageFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);

    reader.onload = (e) => {
        const oldImage = new Image(); // Create an HTMLImageElement
        oldImage.src = e.target.result; // Set the source of the image
        oldImageSrc = e.target.result

        oldImage.onload = () => {
            const [newWidth, newHeight] = calculateSize(oldImage, maxWidth, maxHeight);

            const canvas = document.createElement('canvas');
            canvas.width = newWidth;
            canvas.height = newHeight;

            const ctx = canvas.getContext('2d');
            ctx.drawImage(oldImage, 0, 0, newWidth, newHeight);

            canvas.toBlob(
                (blob) => {
                    newImageSrc = window.URL.createObjectURL(blob);
                    // You can use the newImageSrc URL here
                },
                undefined,
                1
            );
        };
    };
}
	function calculateSize(img, maxWidth, maxHeight) {
		let width = img.width;
		let height = img.height;

		// calculate the width and height, constraining the proportions
		if (width > height) {
			if (width > maxWidth) {
				height = Math.round((height * maxWidth) / width);
				width = maxWidth;
			}
		} else {
			if (height > maxHeight) {
				width = Math.round((width * maxHeight) / height);
				height = maxHeight;
			}
		}
		return [width, height];
	}
</script>

<div class="flex">
	<h3>Image compression using Canvas</h3>
	<h2>{text}</h2>
	<input type="file" on:change={onFileSelected} accept="image/*" />
	<img id="old" src={oldImageSrc} class="w-64" />
	<img id="new" src={newImageSrc} class="w-64" />
</div>
Todo..
