const bodyEl = document.querySelector('body');
console.log(bodyEl);
const buttonEl = document.querySelector('.change-color');
console.log(buttonEl);
const spanEl = document.querySelector('.color');
console.log(spanEl);

buttonEl.addEventListener('click', () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}