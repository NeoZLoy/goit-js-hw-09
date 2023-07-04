import { inputedDate, timerId } from "./02-timer";
import addLeadingZero from './02-add-leading-zero';
import getTimeComponents from './02-get-time-components';
import Notiflix from "notiflix";

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
  
      if(days === 0 && hours === 0 && minutes === 0 && seconds === 0){
        Notiflix.Notify.success('Its your time now!');
          clearInterval(timerId)
          
      }
    }