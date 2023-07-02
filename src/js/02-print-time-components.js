import { inputedDate, timerId } from "./02-timer";
import addLeadingZero from './02-add-leading-zero';
import getTimeComponents from './02-get-time-components';

let timeDifference = 0;
const daysOutput = document.querySelector('span[data-days]');
const hoursOutput = document.querySelector('span[data-hours]');
const minutesOutput = document.querySelector('span[data-minutes]');
const secondsOutput = document.querySelector('span[data-seconds]');

export default function printTimeComponents() {
    timeDifference = inputedDate - Date.now();
    const { days, hours, minutes, seconds } = getTimeComponents(timeDifference);
    
      daysOutput.textContent = addLeadingZero(days);
      hoursOutput.textContent = addLeadingZero(hours);
      minutesOutput.textContent = addLeadingZero(minutes);
      secondsOutput.textContent = addLeadingZero(seconds);
  
      if(timeDifference <1000){
          clearInterval(timerId)
      }
    }