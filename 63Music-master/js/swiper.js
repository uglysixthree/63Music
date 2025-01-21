const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3, // Показывать 3 слайда одновременно
  spaceBetween: 30,  // Отступы между слайдами
  loop: true,        // Бесконечная прокрутка
  autoplay: {
    delay: 3000,     // Автопрокрутка каждые 3 секунды
  },
});
