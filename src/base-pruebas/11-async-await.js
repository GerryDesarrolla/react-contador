export const getImagen = async() => {
	try {
		const apiKey = 'H0Kyp2ijwEM26nE0dv421JLD6Qd00USk';
		const resp   = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
		const { data } = await resp.json();
		const { url } = data.images.original;
		console.log(url);
		return url;
	} catch (error) {
		return 'No se encontro la imagen'
	}
}

getImagen();
