// script.js
const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let slideIndex = 0;

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

function prevSlide() {
    if (slideIndex > 0) {
        slideIndex--;
        showSlide(slideIndex);
    }
}

function nextSlide() {
    if (slideIndex < slider.children.length - 1) {
        slideIndex++;
        showSlide(slideIndex);
    }
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Automatically advance to the next slide every few seconds (optional)
setInterval(nextSlide, 5000);