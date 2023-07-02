import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';
import printTimeComponents from './02-print-time-components';
 

let inputedDate = 0;

let timerId = null;
const startBtn = document.querySelector('button[data-start]');

const flatpickrOptions = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      inputedDate = selectedDates[0].getTime();
      inputedDateValidation(inputedDate);
    },
  };


  
  startBtn.disabled = true;
 
flatpickr('#datetime-picker', flatpickrOptions);


function inputedDateValidation(inputedDate) {
    if (inputedDate > Date.now()) {
      startBtn.disabled = false;
      startBtn.addEventListener('click', event => {
        timerId = setInterval(printTimeComponents, 1000)
        
        
      });
    } else {
      Notiflix.Notify.failure('Choose date in future');
    }
  }

  export { timeDifference, timerId, inputedDate, startBtn}
