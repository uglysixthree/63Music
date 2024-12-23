gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !==1) {

    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
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
        y: 0,
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

    gsap.fromTo('.contact', { y: 100, opacity: 0.5 }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: '.contact',
            scrub: true
        }
    })
}