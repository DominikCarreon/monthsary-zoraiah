const startScreen = document.getElementById('start-screen');
const mainContent = document.getElementById('main-content');
const music = document.getElementById('music');
const startBtn = document.getElementById('start-btn');

function triggerSurprise() {
  startScreen.style.display = 'none';
  mainContent.style.display = 'flex';
  music.load();
  music.play().catch(error => console.log(error));
}

startScreen.addEventListener('click', triggerSurprise);
startBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  triggerSurprise();
});