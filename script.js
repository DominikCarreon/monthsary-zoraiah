const track = document.getElementById("carouselTrack");
const slides = Array.from(track.children);
const dotsContainer = document.getElementById("dots");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const carousel = document.getElementById("carousel");
 
let currentIndex = 0;
let autoplayTimer = null;
const autoplayDelay = 4000;
 
slides.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.setAttribute("aria-label", `Go to photo ${i + 1}`);
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
});
 
const dots = Array.from(dotsContainer.children);
 
function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach((dot, i) => dot.classList.toggle("active", i === currentIndex));
}
 
function goToSlide(index) {
  currentIndex = (index + slides.length) % slides.length;
  updateCarousel();
  restartAutoplay();
}
 
function nextSlide() {
  goToSlide(currentIndex + 1);
}
 
function prevSlide() {
  goToSlide(currentIndex - 1);
}
 
function startAutoplay() {
  autoplayTimer = setInterval(nextSlide, autoplayDelay);
}
 
function stopAutoplay() {
  clearInterval(autoplayTimer);
}
 
function restartAutoplay() {
  stopAutoplay();
  startAutoplay();
}
 
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
carousel.addEventListener("mouseenter", stopAutoplay);
carousel.addEventListener("mouseleave", startAutoplay);
 
let touchStartX = 0;
carousel.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});
carousel.addEventListener("touchend", (e) => {
  const touchEndX = e.changedTouches[0].clientX;
  const diff = touchStartX - touchEndX;
  if (Math.abs(diff) > 40) {
    diff > 0 ? nextSlide() : prevSlide();
  }
});
 
updateCarousel();
startAutoplay();
 
const audio = document.getElementById("bgAudio");
const musicToggle = document.getElementById("musicToggle");
const musicIcon = document.getElementById("musicIcon");
let isPlaying = false;
 
function playAudio() {
  audio.play().then(() => {
    isPlaying = true;
    musicToggle.classList.add("playing");
    musicIcon.textContent = "❚❚";
  }).catch(() => {
    isPlaying = false;
  });
}
 
function pauseAudio() {
  audio.pause();
  isPlaying = false;
  musicToggle.classList.remove("playing");
  musicIcon.textContent = "♪";
}
 
musicToggle.addEventListener("click", () => {
  isPlaying ? pauseAudio() : playAudio();
});
 
function tryAutoplayOnFirstInteraction() {
  if (!isPlaying) playAudio();
  document.removeEventListener("click", tryAutoplayOnFirstInteraction);
  document.removeEventListener("touchstart", tryAutoplayOnFirstInteraction);
}
 
document.addEventListener("click", tryAutoplayOnFirstInteraction);
document.addEventListener("touchstart", tryAutoplayOnFirstInteraction);
 
const petalsContainer = document.getElementById("petals");
const petalSymbols = ["🌸", "💗", "🌷"];
const totalPetals = 18;
 
for (let i = 0; i < totalPetals; i++) {
  const petal = document.createElement("span");
  petal.classList.add("petal");
  petal.textContent = petalSymbols[Math.floor(Math.random() * petalSymbols.length)];
  petal.style.left = `${Math.random() * 100}vw`;
  petal.style.setProperty("--drift", `${Math.random() * 80 - 40}px`);
  petal.style.animationDuration = `${8 + Math.random() * 10}s`;
  petal.style.animationDelay = `${Math.random() * 10}s`;
  petal.style.fontSize = `${0.9 + Math.random() * 0.9}rem`;
  petalsContainer.appendChild(petal);
}

document.getElementById('start-btn').addEventListener('click', function() {
  const music = document.getElementById('bg-music');
  const startScreen = document.getElementById('start-screen');

  music.play().catch(error => console.log(error));
  startScreen.style.display = 'none';
});
