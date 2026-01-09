const slides = [
    "Practice IELTS exactly like the real computer-delivered exam",
    "Full mock tests with real exam timing",
    "Improve accuracy, speed, and confidence",
    "Designed for serious IELTS candidates"
];

let index = 0;
const slideText = document.getElementById("slideText");

setInterval(() => {
    index = (index + 1) % slides.length;
    slideText.textContent = slides[index];
    slideText.style.animation = "none";
    slideText.offsetHeight;
    slideText.style.animation = null;
}, 3000);
