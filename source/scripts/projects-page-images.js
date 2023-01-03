export const deletSrcAttributeForImages = () => {
	const images = document.querySelectorAll('img');
	console.log(images);
	images.forEach((img) => {
		img.removeAttribute('src');
	})
}
