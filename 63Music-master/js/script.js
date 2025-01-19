document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);

        if (!scrollTarget) return; // Прекратить, если цель отсутствует

        const topOffset = document.querySelector('header').offsetHeight || 0;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});




const aboutMI = document.getElementById('img_content');
const aboutMP = document.getElementById('text_content');

aboutMI.addEventListener('mouseover', () => {
    aboutMI.style.width = '350%';
    aboutMP.style.opacity = '0.5';
});

aboutMI.addEventListener('mouseout', () => {
    aboutMI.style.width = '330%';
    aboutMP.style.opacity = '1';
});

