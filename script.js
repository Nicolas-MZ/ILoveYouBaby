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
    const elapsed
