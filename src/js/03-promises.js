import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputData = document.querySelector('.form');

function createPromise(position, delay) {
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
    }, delay);
  });
}

function successful ({ position, delay }) {
  Notify.success (`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function unsuccessful ({ position, delay }) {
  Notify.failure (`❌ Rejected promise ${position} in ${delay}ms`);
}

function createPromises (ev) {
  ev.preventDefault();
  const formData = new FormData(ev.currentTarget);
  const parameters = {};

  for (const [key, value] of formData.entries()) {
    parameters[key] = Number(value);
  }

  let { amount, step, delay } = parameters;
  
  for (let position = 1; position <= amount; position += 1) {
    delay += step;
    createPromise(position, delay).then(successful).catch(unsuccessful);
  }
}

inputData.addEventListener('submit', createPromises);
