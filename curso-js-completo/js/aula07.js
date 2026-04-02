/* Exercicios 07 de JS */

// LUTADOR
document.write(`<h2>Informações</h2>`)
let lutador = {
    nome          : 'Fedor Vladimin',
    nacionalidade : 'Russo',
    idade         : 44,
    peso          : 106,
    altura        : 1.83
}

document.write(`Lutador: ${lutador.nome} <br>`)
document.write(`Nacionalidade: ${lutador.nacionalidade} <br>`)
document.write(`Idade: ${lutador.idade} anos <br>`)
document.write(`Peso: ${lutador.peso} Kg <br>`)
document.write(`Altura: ${lutador.altura} m <br>`)

// FRASE DO DIA
document.write(`<h2>Frase do dia</h2>`)

const data = {
    dia : 10,
    mes : 9,
    ano : 2021
}

const frase = 'Seja curioso. Leia de tudo. Tente coisas novas. O que as pessoas chamam de inteligencia se resume a curiosidade'

const autor = 'Aaron Swartz'

document.write(`${data.dia}/${data.mes}/${data.ano} <br>`)
document.write(`${frase} <br>`)
document.write(autor)

// MESES DO ANO
document.write(`<h2>Array de Meses do Ano</h2>`)

let meses = ['Janeiro', 'Fevereiro', 'Março']

document.write(`${meses[0]}, ${meses[1]}, ${meses[2]},...`)

// OBJETO
document.write(`<h2>Objeto Jogo</h2>`)

let jogo = {
    titulo : 'League Of Legends',
    dev    : 'Riot Games',
    lanc   : 2009
}

document.write(`Jogo: ${jogo.titulo} - LOL <br>`)
document.write(`Desenvolvido por: ${jogo.dev} <br>`)
document.write(`Ano do Lançamento: ${jogo.lanc}`)