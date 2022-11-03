const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', event => {
    event.preventDefault();

    if (event.target.email.value === '' || event.target.password.value === '') {
        return alert('Всі поля повинні бути заповнені!');
    }
    const { elements: { email, password } } = event.target;
    console.log(`Email ${email.value}, password ${password.value}`);

    event.target.reset();
})