
const numero = document.querySelector("#secret");
const video = document.querySelector("#video-comiat");
let codi = undefined;

numero.addEventListener('input', () => {
	console.log("here")
	codi = numero.value

	if (codi == '0107'){
		video.style.visibility = 'unset'

	}
})

if (codi == '0107'){
	video.style.visibility = 'unset'

}

