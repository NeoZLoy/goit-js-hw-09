import { inputedDate, startBtn } from './02-timer';
export default function dataValueValidation() {
  if (inputedDate > Date.now()) {
    startBtn.disabled = false;
  } else {
    console.log('Choose date in future');
  }
}
