import Notiflix from 'notiflix';
import createPromise from './03-create-promise';

const formEl = document.querySelector('.form');
const submitBtn = document.querySelector('button')
  
  formEl.addEventListener('submit', onSubmit);

  
  let delays = 0;
  let position = 0;

 function onSubmit(e) {
    e.preventDefault();
    submitBtn.disabled = true;
    const { delay, step, amount } = e.currentTarget.elements;
    
    
    if (delay.value == 0 || step.value == 0|| amount.value == 0) {
      Notiflix.Notify.warning(`Incorrect value! Inputed value must be > 0`);
    } else {
      const timerForButton = step.value*amount.value;
      setTimeout(() => setTimeout(() => {
        submitBtn.disabled = false;
      }, timer))
      for (let i = 0; i < amount.value; i++) {
        console.log(i)
        position = i + 1;
        delays = Number(delay.value) + step.value * i;
        
        createPromise(position, delays)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        });
       
      }
      formEl.reset();
      
    }
  }