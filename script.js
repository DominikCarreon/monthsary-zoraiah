const startScreen = document.getElementById('start-screen');
const mainContent = document.getElementById('main-content');
const music = document.getElementById('music');
const startBtn = document.getElementById('start-btn');

function triggerSurprise() {
  music.play().then(() => {
    startScreen.style.display = 'none';
    mainContent.style.display = 'flex';
  }).catch(error => {
    console.error(error);
    startScreen.style.display = 'none';
    mainContent.style.display = 'flex';
  });
}

startScreen.addEventListener('click', triggerSurprise);
startBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  triggerSurprise();
});