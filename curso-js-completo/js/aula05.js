/* ARquivo JS aula 05 Objetos*/

// CRIAR OBJETO

let pessoa = {
    nome   : 'Edson',
    idade  : 40,
    peso   : 83.5,
    altura : 1.75,
    doador : false
}

let produtos = {
    descricao : [],
    preco : []
}

const carros = {
    marca : ['Ford', 'Fiat', 'GM'],
    modelo : ['Ka', 'Uno', 'Corsa'],
    ano : [1999, 2005, 2010]
}

/*

É possivel acessar propriedades usando o nome do objeto mais o nome do atributo/propriedade, por exemplo

pessoa.nome
pessoa['nome']

*/

let imc = pessoa.peso / (pessoa.altura * pessoa.altura)

// .toFixed(X)
//limita o numero de casas decimais

console.log("IMC " + imc.toFixed(2))

// ALTERAR/ATUALIZAR VALOR de propriedade
pessoa.nome = "Edson Maia"
produtos.descricao = ['Arroz']
produtos.preco = [4.99]

// Usando spreed operator
produtos.descricao = [...produtos.descricao, 'Feijão', 'Trigo']
produtos.preco = [...produtos.preco, 9.99, 4.79]

// usando spreed operator em objetos const
carros.marca  = [...carros.marca, 'WV']
carros.modelo = [...carros.modelo, 'Fusca']
carros.ano    = [...carros.ano, 1997]