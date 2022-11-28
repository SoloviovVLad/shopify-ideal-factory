singleSliderSection = document.querySelector('.single_swiper');
let singleSlider = new Swiper(singleSliderSection, {
	slidesPerView: 1,
	slidesPerGroup: 1,
	effect: 'fade',
	speed: 1000,
	fadeEffect: {
		crossFade: true,
	},
	allowTouchMove: false,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});