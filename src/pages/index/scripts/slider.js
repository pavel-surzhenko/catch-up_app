const slider = document.getElementById('slider');
const slides = Array.from(slider.querySelectorAll('.box-content'));
const prevButtons = slider.querySelectorAll('.box-content .button-prev');
const nextButtons = slider.querySelectorAll('.box-content .button-next');

let activeSlide = 0;
let timerId = 0;
const timeout = 4000;

slides[0].style.display = 'flex';
slides[0].querySelector('figure').classList.add('animate__fadeIn');
slides[0].querySelector('.slider-wrapper').classList.add('animate__fadeIn');

const hideSlides = () => {
    slides.forEach((item) => {
        item.style.display = 'none';
        item.querySelector('figure').classList.remove('animate__fadeIn');
        item.querySelector('.slider-wrapper').classList.remove('animate__fadeIn');
    });
};

const showSlide = (slideIdx) => {
    slides.forEach((item, index) => {
        if (index === slideIdx) {
            item.style.display = 'flex';
            item.querySelector('figure').classList.add('animate__fadeIn');
            item.querySelector('.slider-wrapper').classList.add('animate__fadeIn');
        }
    });
};

prevButtons.forEach((item) => {
    item.onclick = () => {
        const slide = activeSlide === 0 ? slides.length : activeSlide;

        clearInterval(timerId);
        hideSlides();

        activeSlide = slide - 1;

        showSlide(activeSlide);
        runSlider(timeout);
    };
});

nextButtons.forEach((item) => {
    item.onclick = () => {
        const slide = activeSlide === slides.length - 1 ? -1 : activeSlide;

        clearInterval(timerId);
        hideSlides();

        activeSlide = slide + 1;

        showSlide(activeSlide);
        runSlider(timeout);
    };
});

const runSlider = (timeout) => {
    timerId = setInterval(() => {
        hideSlides();
    
        if (activeSlide === slides.length - 1) {
            activeSlide = 0;
        } else {
            activeSlide += 1;
        }
    
        showSlide(activeSlide);
    }, timeout);
};

runSlider(timeout);