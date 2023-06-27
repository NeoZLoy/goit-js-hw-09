import inputedDateValidation from './inputed-date-validation';
let inputedDate = 0;

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

export { flatpickrOptions, inputedDate };
