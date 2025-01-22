const swiper = new Swiper('.swiper-container', {
  slidesPerView: 2.1, // Показывать 3 слайда одновременно
  spaceBetween: 30,  // Отступы между слайдами
  loop: true,        // Бесконечная прокрутка
  autoplay: {
    delay: 3500,     // Автопрокрутка каждые 3 секунды
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},

});
