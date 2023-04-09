const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop');
let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  };
 
function changeBodyBGcolor(color) {
    document.body.style.backgroundColor = color;
  };

startBtn.addEventListener("click", () => {
timerId = setInterval(() => {
return changeBodyBGcolor(getRandomHexColor());
}, 1000);
startBtn.disabled = true; 
}); 

stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    startBtn.disabled = false; 
});
