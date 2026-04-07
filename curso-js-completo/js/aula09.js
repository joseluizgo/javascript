/* Arquivo JS aula 09 DOM + alterar CSS */

let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 09 Manipular CSS'

let imagem = document.querySelector('#foto')
imagem.setAttribute('src', 'https://down-br.img.susercontent.com/file/cn-11134207-7ras8-m6z6xdso44ykfc')
imagem.setAttribute('width', '250px')

// MANIPULAR CSS

document.querySelector('h1').style.color = "red"

titulo.style.background = "blue"

let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'dark')
box[0].removeAttribute('class')

let tela = document.querySelector('body')

let btnDark = document.querySelector('#btdark')
let btnLight = document.querySelector('#btlight')

// Eventos dos botões
btnDark.addEventListener('click', modoDark);
btnLight.addEventListener('click', modoLight);

// Função para ativar modo escuro
function modoDark() {
    console.log('Modo dark ativado');
    tela.classList.add('dark');
    tela.classList.remove('light');
}

// Função para ativar modo claro
function modoLight() {
    console.log('Modo light ativado');
    tela.classList.remove('dark');
    tela.classList.add('light');
}