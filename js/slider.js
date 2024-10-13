const imageSlides = document.querySelectorAll('.image-slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentImageIndex = 0;

function showImageSlide(index) {
  imageSlides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextImageSlide() {
  currentImageIndex = (currentImageIndex + 1) % imageSlides.length;
  showImageSlide(currentImageIndex);
}

function prevImageSlide() {
  currentImageIndex = (currentImageIndex - 1 + imageSlides.length) % imageSlides.length;
  showImageSlide(currentImageIndex);
}

nextBtn.addEventListener('click', nextImageSlide);
prevBtn.addEventListener('click', prevImageSlide);
