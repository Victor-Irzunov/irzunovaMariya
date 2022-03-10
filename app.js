addEventListener('load', f1)
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger')
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul')
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a')
const header = document.querySelector('.header.container__new')
const autor = document.querySelector('.autor')
const maria = document.querySelector('.brand__text')
const aHome = document.querySelector('.a__home')
const aService = document.querySelector('.a__service')
const aProjects = document.querySelector('.a__projects')
const aAbout = document.querySelector('.a__about')
const aContact = document.querySelector('.a__contact')
hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active')
	mobile_menu.classList.toggle('active')
})
menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	})
})
document.addEventListener('scroll', () => {
	var scrollPosition = window.scrollY;
	if (scrollPosition > 250) {
		header.style.border = `1px solid rgba(255,255,255,0.25)`;
		header.style.borderTop = `1px solid rgba(255,255,255,0.5)`;
		header.style.borderLeft = `1px solid rgba(255,255,255,0.5)`;
		header.style.background = `rgba(255,255,255,0.2)`;
		header.style.backdropFilter = 'blur(10px)';
		header.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1);';
		autor.style.display = 'none'
		maria.style.paddingBottom = '20px'
		if (window.screen.availWidth < 500) {
			maria.style.opacity = '0.5'
		}
	}
	else {
		header.style.backgroundColor = 'transparent'
		autor.style.display = 'block'
		maria.style.paddingBottom = '10px'
		maria.style.opacity = '1'
	}
	if (scrollPosition < 450) aHome.classList.add('nav__active')
	if (scrollPosition > 1750) {
		aHome.classList.remove('nav__active')
		aService.classList.add('nav__active')
	}
	if (scrollPosition > 2600) {
		aService.classList.remove('nav__active')
		aProjects.classList.add('nav__active')
	}
	if (scrollPosition > 3500) {
		aProjects.classList.remove('nav__active')
		aAbout.classList.add('nav__active')
	}
	if (scrollPosition > 5200) {
		aAbout.classList.remove('nav__active')
		aContact.classList.add('nav__active')
	}
	if (scrollPosition < 5200) {
		aContact.classList.remove('nav__active')
	}
	if (scrollPosition < 3200) {
		aAbout.classList.remove('nav__active')
	}
	if (scrollPosition < 2300) {
		aProjects.classList.remove('nav__active')
	}
	if (scrollPosition < 1300) {
		aService.classList.remove('nav__active')
	}
})
const modal = document.querySelector('.modal')
const exit = document.getElementsByClassName('modal__box-clear')[0]
const btn = document.querySelector('.fa')
const link = document.querySelector('.main__center-btn')
const iframe = document.querySelector('.modal__box-video')
const modalVideo = document.querySelector('#modal__video')
const closeVideo = document.querySelector('.close__video')
function f1() {
	modalVideo.setAttribute('src', 'IMG_0763.mp4')
}
closeVideo.onclick = () => {
	modalVideo.pause()
	modal.style.display = 'none'
}
modalVideo.addEventListener('ended', myHandler, false)
function myHandler(e) {
	closeVideo.style.filter = 'invert()'
}
btn.onclick = () => modal.style.display = 'block'
document.onkeydown = event => {
	event = event || window.event
	let isEsc = false
	if ("key" in event) isEsc = (event.key === "Escape" || event.key === "Esc")
	else isEsc = (event.keyCode === 27)
	if (isEsc) modal.style.display = 'none'
}
function audioPlay(e) {
	const modalExercise = document.querySelector('.modal__exercise')
	modalExercise.classList.toggle('active')
}
function toggleModalChat(count) {
	if (count === 1) document.querySelector('.modal__business-1').classList.toggle('active')
	if (count === 2) document.querySelector('.modal__business-2').classList.toggle('active')
	if (count === 3) document.querySelector('.modal__business-3').classList.toggle('active')
	if (count === 4) document.querySelector('.modal__business-4').classList.toggle('active')
	if (count === 5) document.querySelector('.modal__business-5').classList.toggle('active')
	if (count === 6) document.querySelector('.modal__business-6').classList.toggle('active')
}
function toggleModalChatOrder(count) {
	document.querySelector('.modal__business-order').classList.toggle('active')
	if (count === 1) document.querySelector('.modal__box-cards-p').innerHTML = 'Стоимость 1500₽'
	if (count === 2) document.querySelector('.modal__box-cards-p').innerHTML = 'Стоимость 1100₽'
	if (count === 3) {
		document.querySelector('.modal__box-cards-p').innerHTML = 'БЕСПЛАТНО'
		document.querySelector('.modal__box-img').style.display = 'none'
		document.querySelector('.modal__box-cards-p2').style.display = 'none'
	}
	if (count === 4) document.querySelector('.modal__box-cards-p').innerHTML = 'Стоимость 600₽'
	if (count === 5) document.querySelector('.modal__box-cards-p').innerHTML = 'Стоимость 1000₽'
	if (count === 6) document.querySelector('.modal__box-cards-p').innerHTML = 'Стоимость 1100₽'
}

