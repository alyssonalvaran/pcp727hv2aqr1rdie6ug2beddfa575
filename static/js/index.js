var galleryThumbs = new Swiper('.gallery-thumbs', {
	spaceBetween: 10,
	slidesPerView: 3,
	loop: true,
	freeMode: true,
	loopedSlides: 5, //looped slides should be the same
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
	spaceBetween: 10,
	loop:true,
	loopedSlides: 5, //looped slides should be the same
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	thumbs: {
		swiper: galleryThumbs,
	},
});

function downloadImages(images){
	var activeSlide = parseInt(jQuery('.swiper-slide-active')[0].attributes[2].value);
	window.open('../static/img/' + images[activeSlide], '_blank');
};