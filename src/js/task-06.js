const validationInputEl = document.querySelector('#validation-input');

validationInputEl.addEventListener('blur', event => {
    if (event.target.value.length < event.target.dataset.length) {
        validationInputEl.classList.add('invalid');
        validationInputEl.classList.remove('valid');
        return;
    }
    validationInputEl.classList.add('valid');
    validationInputEl.classList.remove('invalid');
})
