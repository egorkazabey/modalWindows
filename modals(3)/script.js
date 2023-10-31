'use strict';

const btn = document.querySelector('[data-modal]'),
	  modal = document.querySelector('.loading'),
	  page = document.querySelector('.modal')


btn.addEventListener('click', () => {
	modal.classList.add('show')
	page.style.filter = 'blur(2.5px)'
	event.preventDefault()
})


this.document.addEventListener('keydown', (e) => {
	if (e.code === 'Escape' && modal.classList.contains('show')) {
		modal.classList.remove('show')
		page.style.filter = 'none'
	}
})
