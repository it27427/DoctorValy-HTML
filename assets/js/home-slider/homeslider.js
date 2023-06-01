const homeSlider = new Swiper(".doctorslider", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  centeredSlides: false,
  grabCursor: true,
  loop: true,
  speed: 600,
  parallax: true,
  spaceBetween: 16,
  pagination: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    360: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 4
    }
  },
});