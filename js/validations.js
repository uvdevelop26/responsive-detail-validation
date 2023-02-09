window.onload = iniciar;

const submit = document.querySelector('.btn-confirm');

function iniciar() {
    submit.addEventListener('click', validateForm, false);
}

function validateName() {
    let element = document.querySelector('#card-name');

    if (!element.checkValidity()) {
        if (element.validity.valueMissing) {
            error(element, "Can't be blank")
        }

        return false
    }

    return true
}

function validateCardNumber() {
    let element = document.querySelector('#card-number');

    if (!element.checkValidity()) {
        if (element.validity.valueMissing) {
            error(element, "Can't be blank")
        } else if (element.validity.patternMismatch) {
            error(element, "Wrong format, numbers only")
        }

        return false
    }

    return true
}


function valideMonth() {
    let element = document.querySelector('#month');
    if (!element.checkValidity()) {
        if (element.validity.valueMissing) {
            error(element, "Can't be blank");
        } else if (element.validity.rangeOverflow) {
            error(element, "Wrong format, insert valid month");
        } else if (element.validity.rangeUnderflow) {
            error(element, "Wrong format, insert valid month");
        }

        return false
    }

    return true
}

function valideYear() {
    let element = document.querySelector('#year');
    if (!element.checkValidity()) {
        if (element.validity.valueMissing) {
            error(element, "Can't be blank");
        } else if (element.validity.rangeOverflow) {
            error(element, "Wrong format, insert valid year");
        } else if (element.validity.rangeUnderflow) {
            error(element, "Wrong format, insert valid year");
        }

        return false
    }

    return true
}

function validateCvc() {
    let element = document.querySelector('#cvc');

    if (!element.checkValidity()) {
        if (element.validity.valueMissing) {
            error(element, "Can't be blank");
        } else if (element.validity.rangeOverflow) {
            error(element, "Wrong format, insert cvc");
        } else if (element.validity.rangeUnderflow) {
            error(element, "Wrong format, insert cvc");
        }

        return false
    }

    return true
}


function validateForm(e) {
    deleteError();
    if (validateName() && validateCardNumber() && valideMonth() && valideYear() && validateCvc()) {
        return true
    } else {
        e.preventDefault();
        return false
    }
}

function error(element, message) {
    let errorMessage = document.querySelectorAll('.error-message');
    if (element.name == 'name') {
        errorMessage[0].innerHTML = message;
        element.classList.add('error-input');
        element.classList.remove('input-border');
    } else if (element.name == 'card-number') {
        errorMessage[1].innerHTML = message;
        element.classList.add('error-input');
        element.classList.remove('input-border');
    } else if (element.name == 'month') {
        errorMessage[2].innerHTML = message;
        element.classList.add('error-input');
        element.classList.remove('input-border');
    } else if (element.name == 'year') {
        errorMessage[2].innerHTML = message;
        element.classList.add('error-input');
        element.classList.remove('input-border');
    } else if (element.name == 'cvc') {
        errorMessage[3].innerHTML = message;
        element.classList.add('error-input');
        element.classList.remove('input-border');
    }

}

function deleteError() {
    let forms = document.forms[0];
    for (const form of forms) {
        if (form.classList.contains('error-input')) {
            form.classList.remove('error-input');
            form.classList.add('input-border');
        }
    }

    let errorMessages = document.querySelectorAll('.error-message');

    for (const errorMessage of errorMessages) {
        errorMessage.innerHTML = '';
    }
}




