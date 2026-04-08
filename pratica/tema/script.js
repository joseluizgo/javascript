let btndark = document.querySelector('#btdark')
let btnlight = document.querySelector('#btlight')
let fundo = document.querySelector('body')
let text = document.querySelector('h1')

btndark.addEventListener('click', fdark)
btnlight.addEventListener('click', flight)

function fdark() {
    fundo.classList.add('dark')
    fundo.classList.remove('light')
    btndark.classList.add('btnndark')
    btnlight.classList.add('btnndark')
    btndark.classList.remove('btnnlight')
    btnlight.classList.remove('btnnlight')
    text.classList.add('text-dark')
    text.classList.remove('text-light')
}

function flight() {
    fundo.classList.add('light')
    fundo.classList.remove('dark')
    btndark.classList.add('btnnlight')
    btnlight.classList.add('btnnlight')
    btndark.classList.remove('btnndark')
    btnlight.classList.remove('btnndark')
    text.classList.add('text-light')
    text.classList.remove('text-dark')
}