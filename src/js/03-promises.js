import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputData = document.querySelector('.form');

function createPromise(position, delay) {
// this function returns promise with result which depends of random value const shouldResolve  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
    // Fulfill
    resolve({position, delay})
    } else {
    // Reject
    reject({position, delay})
    }
  // after delay seconds signal that the job is done "Fulfilled" or "Rejected"
    }, delay);
  });
}
// Show promise with state: "fulfilled" result: value 
function onSuccessful ({ position, delay }) {
  Notify.success (`✅ Fulfilled promise ${position} in ${delay}ms`,
   {timeout: 6000,
   width: '320px',
   });
}
// Show promise with state: "rejected" result: error
function onError ({ position, delay }) {
  Notify.failure (`❌ Rejected promise ${position} in ${delay}ms`,
   {timeout: 6000,
    width: '320px',
   });
}

// create a function which will work when the button was pushed and show notify messages 
function createPromises (ev) {
  ev.preventDefault();
//create empty object formData for getting data from HTML
  const formData = new FormData(ev.currentTarget);
  let parameters = {};
// make iteration for creating array with values
  for (const [key, value] of formData.entries()) {
    parameters[key] = Number(value);
  }
// Array with values
  let { delay, step, amount } = parameters;
// do loops for creating promise, i = position
  for (let i = 1; i <= amount; i += 1) {
    delay += step;
    createPromise(i, delay).then(onSuccessful).catch(onError);
  }
// when all promises was created - clean form
  inputData.reset();
}

inputData.addEventListener('submit', createPromises);
