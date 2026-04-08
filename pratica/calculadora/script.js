// NUMEROS DA CALCULADORA
let zero = document.querySelector('#zero')
let um = document.querySelector('#um')
let dois = document.querySelector('#dois')
let tres = document.querySelector('#tres')
let quatro = document.querySelector('#quatro')
let cinco = document.querySelector('#cinco')
let seis = document.querySelector('#seis')
let sete = document.querySelector('#sete')
let oito = document.querySelector('#oito')
let nove = document.querySelector('#nove')

zero.addEventListener('click', fzero)
function fzero(){resul.innerHTML += 0}
um.addEventListener('click', fum)
function fum(){resul.innerHTML += 1}
dois.addEventListener('click', fdois)
function fdois(){resul.innerHTML += 2}
tres.addEventListener('click', ftres)
function ftres(){resul.innerHTML += 3}
quatro.addEventListener('click', fquatro)
function fquatro(){resul.innerHTML += 4}
cinco.addEventListener('click', fcinco)
function fcinco(){resul.innerHTML += 5}
seis.addEventListener('click', fseis)
function fseis(){resul.innerHTML += 6}
sete.addEventListener('click', fsete)
function fsete(){resul.innerHTML += 7}
oito.addEventListener('click', foito)
function foito(){resul.innerHTML += 8}
nove.addEventListener('click', fnove)
function fnove(){resul.innerHTML += 9}


// COMANDOS
let limpar = document.querySelector('#limpar')
let deletar = document.querySelector('#deletar')
let igual = document.querySelector('#igual')
let resul = document.querySelector('.resul')

// OPERADORES LOGICOS
let porc = document.querySelector('#porcentagem')
let divi = document.querySelector('#dividir')
let mult = document.querySelector('#mult')
let sub = document.querySelector('#sub')
let soma = document.querySelector('#soma')