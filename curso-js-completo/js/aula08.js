/* Arquivo JS aula 07 DOM */

// DOM = Document Object Model
// Arvore com elementos desde o Brower, a Janela do Browser, o documento e  cada elemento html que formam os conteudos.

// PARA MANIPULAR O DOM PRECISAMOS
// indicar qual objeto usar, depois
// chamar um método(função) para
// selecionar ele, seus dados, trazer informações, etc.

// .querySelector()
// selecionar elemnto com base na tag, #id ou .class
let titulo = document.querySelector('h1')
console.log(titulo)
//document.querySelectorAll('.box')

// use o querySelector/all() para pegar uma info e armazene em uma variavel constante ou array

// .textContent - acessar o conteudo

titulo.textContent = 'DOM'

let testando = document.querySelectorAll('.box')
//console.log(testando)
document.write(testando[0].textContent)
testando[0].textContent += ' Texto qualquer'