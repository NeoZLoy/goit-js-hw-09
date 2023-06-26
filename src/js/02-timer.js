import dataValueValidation from './02-data-value-validation';
import {
  printTimeComponents,
  timeDifference,
} from './02-print-time-components';

const startBtn = document.querySelector('button[data-start]');
const dateInput = document.querySelector('#datetime-picker');

const currentDate = new Date();
let inputedDate = null;

dateInput.type = 'datetime-local';
dateInput.value = currentDate.toISOString().slice(0, -8);

startBtn.disabled = true;

dateInput.addEventListener('blur', event => {
  inputedDate = event.target.valueAsNumber;
  dataValueValidation();
});

startBtn.addEventListener('click', event => {
  const timerInterval = setInterval(printTimeComponents, 1000);
});

export { inputedDate, startBtn };
