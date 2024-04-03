document.addEventListener('DOMContentLoaded', () => {
	const previewCard_wrap__GdZvG = document.querySelectorAll('.previewCard_wrap__GdZvG')
	const placeRightContainer = document.querySelector('.place-right-container')

	previewCard_wrap__GdZvG.forEach(elem => {
		elem.addEventListener('click', () => {
			console.log('dldk');
			placeRightContainer.classList.add('place-right-container')
		})
	})

	placeRightContainer.addEventListener('click', () => {
		placeRightContainer.classList.remove('place-right-container')
	})
})
