//Problema: rellenar el nombre de la persona y mostrar instantaneamente
//en la tarjeta
//Crear variable que va contener el nombre
const nameUser = document.querySelector('.name-user');
const cardUser = document.querySelector('.card-number');
const dateUser = document.querySelector('.date-user');
const cvcUser = document.querySelector('.back-number');

const inputName = document.querySelector('#card-name');
const inputCardNumber = document.querySelector('#card-number');
const inputMonth = document.querySelector('#month');
const inputYear = document.querySelector('#year');
const inputCvc = document.querySelector('#cvc');


window.addEventListener('load', ()=>{
    inputName.value = "";
    inputCardNumber.value = "";
    inputMonth.value = "";
    inputYear.value = "";
});


inputName.addEventListener('input', () => {
    nameUser.innerText = inputName.value;
});

inputCardNumber.addEventListener('input', () => {

      cardUser.innerText = inputCardNumber.value;
});

inputMonth.addEventListener('input', () => {
    dateUser.innerText = inputMonth.value + '/' + inputYear.value;
});

inputYear.addEventListener('input', () => {
    dateUser.innerText = inputMonth.value + '/' + inputYear.value;
});

inputCvc.addEventListener('input', ()=>{
    cvcUser.innerText = inputCvc.value;
});







//problema: tengo dos inputs pero solo un span
//capturar la fecha de un input en una variable y la otra en otra





