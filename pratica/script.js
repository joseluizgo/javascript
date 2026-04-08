/* Mudando o fundo da pagina */

let corpo = document.querySelector('body')
let btndark = document.querySelector('#dark')
let btnlight = document.querySelector('#light')
let btnimg = document.querySelector('#imagem')
let imge = document.querySelector('#foto')

btnimg.addEventListener('click', gerar)
btndark.addEventListener('click', fdark)
btnlight.addEventListener('click', flight)

function fdark() {
    corpo.classList.add('dark')
    console.log('Modo escuro')
    corpo.classList.remove('light')
}

function flight() {
    corpo.classList.add('light')
    console.log('Modo Claro')
    corpo.classList.remove('dark')
}

function gerar() {
    console.log('aaa')
    imge.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwZAYgsgkHYNape7Q1jU-UwSYPo53DHlSVQ&s')
}