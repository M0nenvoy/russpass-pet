document.addEventListener('DOMContentLoaded', () => {
  const button_wrapLilcJ = document.querySelectorAll('.button_wrap__lilcJ')

	setTimeout(() => {
		console.log(button_wrapLilcJ);
	}, 1000)

	button_wrapLilcJ[1].addEventListener('click', () => {
		const catalogNotaFiltersFgBSg = document.querySelector('.catalogNota_filters__fgBSg')
		const filter = catalogNotaFiltersFgBSg.childNodes[1]

		filter.style.position = 'relative'
		filter.style.top = '0'

		const catalogNotaScrolledId = document.querySelector('.catalogNota_scrolled__7ggaI')
		catalogNotaScrolledId.classList.add('catalogNota_showFilters__mZJl4')
	})

	const housingFiltersNota_close = document.querySelector('.housingFiltersNota_close')
	housingFiltersNota_close.addEventListener('click', () => {
		const catalogNotaFiltersFgBSg = document.querySelector('.catalogNota_filters__fgBSg')
		const filter = catalogNotaFiltersFgBSg.childNodes[1]

		filter.style.position = 'sticky'
		filter.style.top = '75px'

		const catalogNotaScrolledId = document.querySelector('.catalogNota_scrolled__7ggaI')
		catalogNotaScrolledId.classList.remove('catalogNota_showFilters__mZJl4')
	})

	// form
	const petsForm = document.querySelector('.pets__form')
	petsForm.addEventListener('submit', submitQuestionPets)

	function submitQuestionPets(e) {
		e.preventDefault()
		e.stopPropagation()

		const petsWrapper = document.querySelector('.pets__wrapper')
		const petsInput = document.querySelector('.pets__input')
		const pets__dialog = document.querySelector('.pets__dialog')
		
		const petsQuestionElem = document.createElement('div')
		const petsMessageElem = document.createElement('div')
		
		const petsQuestionContainer = document.createElement('div')
		const petsMessageContainer = document.createElement('div')


		petsQuestionContainer.classList.add('pets__question')
		petsQuestionElem.classList.add('pets__question-elem')
		petsMessageContainer.classList.add('pets__message')
		petsMessageElem.classList.add('pets__message-elem')

		petsQuestionElem.innerHTML = petsInput.value
		petsMessageElem.innerHTML = (Math.random(0, 100) * 100).toFixed(2)



		if(petsInput.value) {
			petsMessageContainer.append(petsMessageElem)
			petsQuestionContainer.append(petsQuestionElem)
			petsWrapper.append(petsQuestionContainer, petsMessageContainer)

			pets__dialog.scrollTop = petsWrapper.scrollHeight

			petsInput.value = ''
		}

		console.log(petsWrapper.scrollHeight);

		// petsWrapper.style.transform = `translateY(100%)`
	}

	// const petsDialog = document.querySelector('.pets__dialog')

	// petsDialog.addEventListener('mousemove', (e) => {
	// 	e.stopPropagation()
	// })
})
