gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !==1) {

    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.25,
        effect: true
    })

    gsap.fromTo('.main_content', { opacity: 1 }, {
        opacity: 0, 
        scrollTrigger: {
            trigger: '.main_content',
            start: '100',
            end: '500',
            scrub: true
        }
    })

    gsap.fromTo('.services_h1', { y: 100, opacity: 0.5 }, {
        opacity: 1,
        y: 25,
        scrollTrigger: {
            trigger: '.services_h1',
            scrub: true
        }
    })

    gsap.fromTo('.card-1', { x: -100, opacity: 0.75 }, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
            trigger: '.card-1',
            scrub: true
        }
    })

    gsap.fromTo('.card-2', { x: -50, opacity: 0.75 }, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
            trigger: '.card-2',
            scrub: true
        }
    })

    gsap.fromTo('.card-3', { x: 50, opacity: 0.75 }, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
            trigger: '.card-3',
            scrub: true
        }
    })

    gsap.fromTo('.card-4', { x: 100, opacity: 0.75 }, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
            trigger: '.card-4',
            scrub: true
        }
    })


    gsap.fromTo('.contact', { opacity: 0.525, }, {
        opacity: 1,
        scrollTrigger: {
            trigger: '.contact',
            scrub: true
        }
    })

    gsap.fromTo('.contact_text', { x: -100, y: 100, opacity: 0.5 }, {
        opacity: 1,
        y: 40,
        x: 0,
        scrollTrigger: {
            trigger: '.contact_text',
            scrub: true
        }
    })

    gsap.fromTo('.about-us_h1', { y: 100, opacity: 0.5 }, {
        opacity: 1,
        y: 30,
        scrollTrigger: {
            trigger: '.about-us_h1',
            scrub: true
        }
    })

    gsap.fromTo('.img_content', { x: 200 }, {
        x: 0,
        scrollTrigger: {
            trigger: '.img_content',
            scrub: true
        }
    })

    gsap.fromTo('.text_content', { x: -75, opacity: 0.65 }, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
            trigger: '.text_content',
            scrub: true
        }
    })

}

gsap.to(".cards", {
    x: () => -(document.querySelector(".card_item").scrollWidth - window.innerWidth), // Прокрутка на ширину контента
    ease: "none", // Без замедления
    scrollTrigger: {
      trigger: ".services", // Триггер для анимации
      start: "top top", // Когда верхняя часть контейнера будет вверху окна
      end: "bottom bottom", // Когда нижняя часть контейнера выйдет из окна
      scrub: true, // Для плавной синхронизации
      pin: true, // Чтобы закрепить контейнер
    }
  });