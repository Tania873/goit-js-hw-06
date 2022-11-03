const btnDecrementEl = document.querySelector('[data-action="decrement"]');
const countEl = document.querySelector('#value');
const btnIncrementEl = document.querySelector('[data-action="increment"]');

let counterValue = 0;

btnDecrementEl.addEventListener('click', () => {
    counterValue -= 1;
    countEl.textContent = counterValue;
})

btnIncrementEl.addEventListener('click', () => {
    counterValue += 1;
    countEl.textContent = counterValue;
})