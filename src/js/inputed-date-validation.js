import {
  printTimeComponents,
  timeDifference,
} from './02-print-time-components';
import { startBtn } from './02-timer';

import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

export default function inputedDateValidation(inputedDate) {
  if (inputedDate > Date.now()) {
    startBtn.disabled = false;
    startBtn.addEventListener('click', event => {
      while (timeDifference === 0) {
        setInterval(printTimeComponents, 1000);
      }
    });
  } else {
    Notiflix.Notify.failure('Choose date in future');
  }
}
