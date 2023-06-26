import setBodyColor from './01-set-body-color';

const startBtn = document.querySelector('button[data-start]');
const stoptBtn = document.querySelector('button[data-stop]');
let changeBodyColorInterval = null;

stoptBtn.disabled = true;

startBtn.addEventListener('click', event => {
  changeBodyColorInterval = setInterval(setBodyColor, 1000);
  startBtn.disabled = true;
  stoptBtn.disabled = false;
});

stoptBtn.addEventListener('click', event => {
  clearInterval(changeBodyColorInterval);
  startBtn.disabled = false;
  stoptBtn.disabled = true;
});
