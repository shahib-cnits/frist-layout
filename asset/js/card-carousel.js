var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {  
      '480': {
        slidesPerView: 2,
      },
      '990': {
        slidesPerView: 3,
      },
    },
  });