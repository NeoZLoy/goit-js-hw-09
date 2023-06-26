import getRandomHexColor from './01-get-random-hex-color';

const bodyEl = document.querySelector('body');

export default function setBodyColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
}
