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