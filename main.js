const form = document.querySelector('form');
const fnameField = document.querySelector('.first-name');
const fname = document.querySelector('#fname');

const lnameField = document.querySelector('.last-name');
const lname = document.querySelector('#lname');

const emailField = document.querySelector('.email');
const email = document.querySelector('#email');

const passField = document.querySelector('.password');
const password = document.querySelector('#password');

function checkEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,5}$/;
    if (!email.value.match(emailPattern)) {
        return emailField.classList.add('invalid');
    }
    emailField.classList.remove('invalid');
}

function checkFirstName() {
    if (fname.value === '') {
        return fnameField.classList.add('invalid');
    }
    fnameField.classList.remove('invalid');
}

function checkLastName() {
    if (lname.value === '') {
        return lnameField.classList.add('invalid');
    }
    lnameField.classList.remove('invalid');
}

function checkPassword() {
    if (password.value === '') {
        return passField.classList.add('invalid');
    }
    passField.classList.remove('invalid');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkEmail();
    checkFirstName();
    checkLastName();
    checkPassword();

    email.addEventListener('keyup', checkEmail);
    email.addEventListener('keyup', checkFirstName);
    email.addEventListener('keyup', checkLastName);
    email.addEventListener('keyup', checkPassword);
})

