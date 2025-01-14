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

const card1 = document.getElementById('card-1'); // Исправлено
const card1h2 = document.getElementById('card-1_h2'); // Исправлено
const card1img = document.getElementById('card1img');

card1.addEventListener('mouseover', () => {
    card1h2.style.opacity = '1'; // Сделать видимым
    card1.style.width = '580px';
    card1.style.height = '340px';
    card1img.style.filter = 'blur(2px)';
});

card1.addEventListener('mouseout', () => {
    card1h2.style.opacity = '0'; // Скрыть
    card1.style.width = '560px';
    card1.style.height = '320px';
    card1img.style.filter = 'blur(0px)';
});



const card2 = document.getElementById('card-2'); // Исправлено
const card2h2 = document.getElementById('card-2_h2'); // Исправлено
const card2img = document.getElementById('card2img');

card2.addEventListener('mouseover', () => {
    card2h2.style.opacity = '1'; // Сделать видимым

    card2.style.width = '580px';
    card2.style.height = '340px';
    card2img.style.filter = 'blur(2px)';
});

card2.addEventListener('mouseout', () => {
    card2h2.style.opacity = '0'; // Скрыть
    card2.style.width = '560px';
    card2.style.height = '320px';
    card2img.style.filter = 'blur(0px)';
});

const card3 = document.getElementById('card-3'); // Исправлено
const card3h2 = document.getElementById('card-3_h2'); // Исправлено
const card3img = document.getElementById('card3img');

card3.addEventListener('mouseover', () => {
    card3h2.style.opacity = '1'; // Сделать видимым
    card3.style.width = '580px';
    card3.style.height = '340px';
    card3img.style.filter = 'blur(2px)';
});

card3.addEventListener('mouseout', () => {
    card3h2.style.opacity = '0'; // Скрыть
    card3.style.width = '560px';
    card3.style.height = '320px';
    card3img.style.filter = 'blur(0px)';
});

const card4 = document.getElementById('card-4'); // Исправлено
const card4h2 = document.getElementById('card-4_h2'); // Исправлено
const card4img = document.getElementById('card4img');

card4.addEventListener('mouseover', () => {
    card4h2.style.opacity = '1'; // Сделать видимым
    card4.style.width = '580px';
    card4.style.height = '340px';
    card4img.style.filter = 'blur(2px)';
});

card4.addEventListener('mouseout', () => {
    card4h2.style.opacity = '0'; // Скрыть
    card4.style.width = '560px';
    card4.style.height = '320px';
    card4img.style.filter = 'blur(0px)';
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

