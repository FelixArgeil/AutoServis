
let wrapper = document.querySelector('.wrapper');

let pageSlider = new Swiper('.page', {
	// Свои классы
	wrapperClass: "page__wrapper",
	slideClass: "page__screen",

	// Вертикальный слайдер 
	direction: 'vertical',

	// Количество слайдов для паказа 
	slidesPerView: 'auto',

	// Выключаем параллакс 
	parallax: true,


	// Управление клавиатурой 
	keyboard: {
		// Включить / Выключить 
		enabled: true,
		// Включить / Выключить 
		// только когда слайдер 
		// в пределах вьпорта 
		onlyInViewport: true,
		// Включить / Выключить 
		// управление клавиатурой 
		// pageUp pageDown
		pageUpDown: true,
	},

	// Управление колесом мыши 
	mousewheel: {
		// Чувствительность колеса мыши 
		sensitivity: 1,
		// Класс объекта на котором 
		// будет срабатвать прокрутка мыши 
		// eventsTarget: ".image slider" 
	},

	//Отключение функционнала 
	//Если слайдов меньше чем нужно 
	watchOverflow: true,

	//Скорость 
	speed: 800,

	//Обновить свайпер 
	// при изменении элементов слайда 
	observer: true,

	//Обновить свайпер 
	// при изменении дочерних 
	// элементов слайда
	observeSlideChildren: true,



	// Навигация
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.page__pagination',
		type: 'bullets',
		clickable: true,
		bulletClass: "page__bullet",
		bulletActiveClass: "page__bullet_active",
	},
	// Скролл 
	scrollbar: {
		el: '.page__scroll',
		dragClass: "page__drag-scroll",
		// Возможность претскивать скролл 
		draggable: true,
	},

	// Отключение автоинициализации 
	init: false,

	// События
	on: {
		// События инициализации
		init: function () {
			menuSlider();
			setScrollType();
			wrapper.classList.add('_loaded');
		},
	// События смены слайда
		slideChange: function () {
			menuSliderRemove();
			menuLinks[pageSlider.realIndex].classList.add('_active');
		},
		resize: function () {
			setScrollType();
		},
	},
});



let menuLinks = document.querySelectorAll('.menu__link');

function menuSlider() {
	if (menuLinks.length > 0) {
		menuLinks[pageSlider.realIndex].classList.add('_active');
		for (let index = 0; index < menuLinks.length; index++) {
			const menuLink = menuLinks[index];
			menuLink.addEventListener("click", function (e) {
				menuSliderRemove();
				pageSlider.slideTo(index, 800);
				menuLink.classList.add('_active');
				e.preventDefault();
			});
		}	
	}
}

function menuSliderRemove() {
	let menuLinkActive = document.querySelector('.menu__link._active');
	if (menuLinkActive) {
		menuLinkActive.classList.remove('_active');
	}
}

function setScrollType() {
	if (wrapper.classList.contains('_free')) {
		wrapper.classList.remove('_free');
		pageSlider.params.freeMode = false;
	}

	for (let index = 0; index < pageSlider.slides.length; index++) {
		const pageSlide = pageSlider.slides[index];
		const pageSlideContent = pageSlide.querySelector('.screen__content');
		if (pageSlideContent) {
			const pageSlideContentHeight = pageSlideContent.offsetHeight;
			if (pageSlideContentHeight > window.innerHeight) {
				wrapper.classList.add('_free');
				pageSlider.params.freeMode = true;
				break;
			}
		}
	}
}

pageSlider.init();





var time = 2.5;
$('.counters__number').each(function() {
  var i = 1,
    num = $(this).data('num'),
    step = 1000 * time / num,
    that = $(this),
    int = setInterval(function() {
      if (i <= num) {
        that.html(i);
      } else {
        clearInterval(int);
      }
      i++;
    }, step);
});


////////////////////////////////////////////////////////////////
const menuIcon = document.querySelector('.screen__button');
const menuIconTwo = document.querySelector('.screen__button__popup');
const navBar = document.querySelector('.page');
////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////
menuIcon.addEventListener('click', () => {
	navBar.classList.add("change");
}) 
menuIconTwo.addEventListener('click', () => {
	navBar.classList.remove("change");
}) 
////////////////////////////////////////////////////////////////

