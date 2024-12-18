document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button-right');
    const prevButton = document.querySelector('.carousel-button-left');

    const slideWidth = slides[0].getBoundingClientRect().width;

    // Arrange the slides next to one another
    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    };
    slides.forEach(setSlidePosition);

    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };

    // Move to the next slide
    nextButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;
        const currentIndex = slides.findIndex(slide => slide === currentSlide);
        const nextIndex = currentIndex + 1;

        moveToSlide(track, currentSlide, nextSlide);

        if (nextIndex === slides.length - 1) {
            nextButton.classList.add('is-hidden');
        }
        prevButton.classList.remove('is-hidden');
    });

    // Move to the previous slide
    prevButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;
        const currentIndex = slides.findIndex(slide => slide === currentSlide);
        const prevIndex = currentIndex - 1;

        moveToSlide(track, currentSlide, prevSlide);

        if (prevIndex === 0) {
            prevButton.classList.add('is-hidden');
        }
        nextButton.classList.remove('is-hidden');
    });
});

// Calcular o tempo juntos
const startDate = new Date('2024-07-21T21:00:00');
setInterval(() => {
    const now = new Date();
    const elapsed = now - startDate;
    const years = Math.floor(elapsed / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor(elapsed / (1000 * 60 * 60 * 24 * 30)) % 12;
    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24)) % 30;
    const hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((elapsed / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsed / 1000) % 60);

    document.getElementById('years').innerText = years;
    document.getElementById('months').innerText = months;
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}, 1000);

// Lista de frases românticas
const quotes = [_{{{CITATION{{{_1{](https://github.com/rakeshreddy8061/vishnu.github.io/tree/5c957cb8bd9306431502b0fc7a6bc2fee581a6b9/carousel.js)[_{{{CITATION{{{_2{](https://github.com/lukebennett88/simple-carousel/tree/3e7121b11902598999d3dc331e918649aca541a9/carousel.js)[_{{{CITATION{{{_3{](https://github.com/grzegorzgebala/possible-site/tree/b98553f0875c393193a13257bd2691f60ec01cac/.history%2Fjs%2Fscript_20200217233556.js)[_{{{CITATION{{{_4{](https://github.com/Dumbledank/carousel/tree/7231ca8cb864be7474506c7e05a915ac07b9f8d8/javascript%2Fcarousel.js)[_{{{CITATION{{{_5{](https://github.com/rt1301/Pegasys/tree/975644232e0272ac274e1e4841830ef8c9368bd4/public%2Fjs%2Fapp.js)
