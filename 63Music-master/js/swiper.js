const swiper = new Swiper('.swiper-container', {
  slidesPerView: 2, // Показывать 3 слайда одновременно
  spaceBetween: 10,  // Отступы между слайдами
  loop: true,        // Бесконечная прокрутка
  autoplay: {
    delay: 3000,     // Автопрокрутка каждые 3 секунды
  },
});
