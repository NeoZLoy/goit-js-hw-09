import getTimeComponents from './02-get-time-components';
import { inputedDate } from './02-flatpickr-options';
import addLeadingZero from './02-add-leading-zero';

const daysOutput = document.querySelector('span[data-days]');
const hoursOutput = document.querySelector('span[data-hours]');
const minutesOutput = document.querySelector('span[data-minutes]');
const secondsOutput = document.querySelector('span[data-seconds]');

let timeDifference = 0;

export function printTimeComponents() {
  timeDifference = inputedDate - Date.now();
  const { days, hours, minutes, seconds } = getTimeComponents(timeDifference);
  daysOutput.textContent = addLeadingZero(days);
  hoursOutput.textContent = addLeadingZero(hours);
  minutesOutput.textContent = addLeadingZero(minutes);
  secondsOutput.textContent = addLeadingZero(seconds);
}

export { timeDifference };
