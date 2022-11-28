const scrollSlider = document.querySelector('.scrollbar_swiper');

if (scrollSlider) {
	const swiper = new Swiper(scrollSlider, {
		slidesPerView: 'auto',
		slidesPerGroup: 1,
		scrollContainer: true,
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
			dragSize: 'auto',
		},
		breakpoints: {
			1024: {
				scrollbar: {
					dragSize: 350,
				},
			},
		},
	});
}
