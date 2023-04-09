import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/dark.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector('button[data-start]');
const fieldDays = document.querySelector('span[data-days]');
const fieldHours = document.querySelector('span[data-hours]');
const fieldMinutes = document.querySelector('span[data-minutes]');
const fieldSeconds = document.querySelector('span[data-seconds]');

let timerId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] < Date.now()) {
        startBtn.disabled = true;
        Notify.failure('Please choose a date in the future', {
          width: '320px',
          distance: '30px',
          borderRadius: '2px',
          position: 'left-top',
          timeout: 1500,
        });
      } else {
        startBtn.disabled = false;
      }
    },
  };

const flatp = flatpickr('#datetime-picker', options);

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  };
  
function addLeadingZero(value){
    return String(value).padStart(2, "0");
  }

function onTimerStart() {
  const selectedDate = flatp.selectedDates[0];
  timerId = setInterval(() => {
    const startTime = new Date();
    const countdown = selectedDate - startTime;
    startBtn.disabled = true;
    if (countdown < 0) {
      clearInterval(timerId);
      return;
    }
    updateTimer(convertMs(countdown));
  }, 1000);
}

function updateTimer({ days, hours, minutes, seconds }) {
  fieldDays.textContent = addLeadingZero(days);
  fieldHours.textContent = addLeadingZero(hours);
  fieldMinutes.textContent = addLeadingZero(minutes);
  fieldSeconds.textContent = addLeadingZero(seconds);
}

startBtn.addEventListener('click', onTimerStart);
