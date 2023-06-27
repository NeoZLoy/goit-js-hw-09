import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { flatpickrOptions } from './02-flatpickr-options';

const startBtn = document.querySelector('button[data-start]');

flatpickr('#datetime-picker', flatpickrOptions);

startBtn.disabled = true;

export { startBtn };
