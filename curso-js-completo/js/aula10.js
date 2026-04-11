/* Aula 10 Funcoes ou metodos no Js */

let titulo = document.querySelector('h1')
titulo.textContent = 'Funções no JS'
let box = document.querySelectorAll('box')

//Funcoes sem parametros e sem retorno (procedure)

function olaMundo() {
    document.write('Olá mundo sem retorno <br>')
}

//funcoes sem parametros e com retorno (fuction)

function olaMundo2() {
    return 'olá mundo com retorno <br>'
}

olaMundo()
document.write(olaMundo2())

let x = 2
let y = 1
let mensagem = 'Jesus é o salvador'

// Funcoes com parametros e sem retorno(procedure)
function somar (a, b) {
    document.write((a + b) + "<br>")
}

function somar2(c, d) {
    return c + d
}

somar(x, y)
somar(10, 5)

document.write(`<p>${somar2(x, y)}</p>`)
document.write(`<p>${somar2(5, 2)}</p>`)

// Funcoes anonima = nao tem nome
// pode ou nn ter parametros
// pode ou n ter retorno
titulo.addEventListener('click', function() {
    console.log('Clicou no titulo')
})

// Aroow functions ES6 2015 em diante

const olaMundoArrow = () => document.write("Olá mundo!!!!!")

// nao precisa usar a palavra function
// nao precisa usar a palavra return
// nn usa nome na funcao
// nao preicsa colocar { } se for so uma instrucao

const olaMundo2Arrow = () => '<p>Olá mundo com arrow fuction</p>'

olaMundoArrow()
document.write(olaMundo2Arrow())