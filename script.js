let number1 = document.querySelector("#number1");
let number2 = document.querySelector("#number2");
let buttonElementSoma = document.querySelector("#buttonSoma");
let buttonElementSub = document.querySelector("#buttonSub");
let buttonElementMul = document.querySelector("#buttonMul");
let buttonElementDiv = document.querySelector("#buttonDiv");
let resultado = document.querySelector("#resultado");
let buttonElementResete = document.querySelector("#resete");

function CalcularSoma() {
    resultado.innerHTML = Number(number1.value) + Number(number2.value);
}

function CalcularSub() {
    resultado.innerHTML = Number(number1.value) - Number(number2.value);    
}

function CalcularMul() {
    resultado.innerHTML = Number(number1.value) * Number(number2.value);
}

function CalcularDiv() {
    resultado.innerHTML = Number(number1.value) / Number(number2.value);
}

function Resete() {
    resultado.innerHTML = "";
    number1.value = "";
    number2.value = "";
}



