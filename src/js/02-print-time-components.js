import getTimeComponents from './02-get-time-components';
import { inputedDate } from './02-timer';

const daysOutput = document.querySelector('span[data-days]');
const hoursOutput = document.querySelector('span[data-hours]');
const minutesOutput = document.querySelector('span[data-minutes]');
const secondsOutput = document.querySelector('span[data-seconds]');

let timeDifference = 0;

export function printTimeComponents() {
  timeDifference = inputedDate - Date.now();
  const { days, hours, minutes, seconds } = getTimeComponents(timeDifference);
  daysOutput.textContent = `${days}`;
  hoursOutput.textContent = `${hours}`;
  minutesOutput.textContent = `${minutes}`;
  secondsOutput.textContent = `${seconds}`;
}

export { timeDifference };
