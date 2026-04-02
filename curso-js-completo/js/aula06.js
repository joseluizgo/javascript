// comentario em linha

/*
Comentario em bloco
*/

//criar variaveis use let ou var
let produto = 'Arroz'
let quant = 2
let precoUnitario = 4.99
let precoTotal = quant * precoUnitario
document.write(`preço total R$ ${precoTotal}<br>`)
console.log(new Intl.NumberFormat('pt-BR').format(precoTotal))
produto = "Feijão"
//Estamos pegando nossa variavel precoTotal e formatando para uma string local do pt-BR, com style currency q é monetario e o nosso simbolo monetario pe o BRL
document.write(`Preço total ${precoTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} <hr>`)

// criar constante
const nome = 'Edson Maia'
const peso = 83.5
const altura = 1.75
const imc = peso / (altura * altura)

document.write(`IMC: ${imc} <br>`)
document.write(`IMC: ${imc.toFixed(1)} <br>`)

let nota1 = 7.5
let nota2 = 5.5
let nota3 = 4.0
let notaFinal = (nota1 + nota2 + nota3) / 3
notaFinal = notaFinal.toFixed(1)
// um numero do formato inteiro ptbr
notaFinal = Intl.NumberFormat('pt-BR').format(notaFinal)
document.write(`Nota final: ${notaFinal} <br>`)

let compra = 1999.99
let desconto = 145.42
let compraComDesconto = compra - desconto

document.write(compraComDesconto.toLocaleString('pt-BR'))