const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
}

function backSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
}

function updateCarousel() {
  const offset = -currentSlide * 100 + '%';
  sliderContainer.style.transform = `translateX(${offset})`;
}

setInterval(nextSlide, 20000);

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player('player-trailer', {
    width: 540,
    height: 330,
    videoId: 'JuP47fRBsWg',
    playerVars: {
      'autoplay': 0,
      'controls': 1,
      'rel': 0,
      'showinfo': 1
    }
  });
}