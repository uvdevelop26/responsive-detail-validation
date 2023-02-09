window.onload = iniciar;

const submit = document.querySelector('.btn-confirm');
const continuePage = document.querySelector('.btn-continue');

function iniciar() {
    submit.addEventListener('click', validateForm, false);
    continuePage.addEventListener('click', backPage, false);
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
        let formContainer = document.querySelector('.form-container');
        let completeContainer = document.querySelector('.complete-container');
        e.preventDefault()
        formContainer.classList.add('display-none')
        completeContainer.classList.remove('display-none');

        return true
    } else {
        e.preventDefault();
        return false
    }
}

function backPage() {
    let formContainer = document.querySelector('.form-container');
    let completeContainer = document.querySelector('.complete-container');

    if (!completeContainer.classList.contains('display-none') && formContainer.classList.contains('display-none')) {
        completeContainer.classList.add('display-none');
        formContainer.classList.remove('display-none')
    }

    cleanForm();
    

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

function cleanForm(){
    let forms = document.forms[0];
    for (const form of forms) {
        if (form.value !== '') {
          form.value = ''  
        }
    }
}




