function adicionar() {
    var n = []
    n = document.getElementById('n')
    var list = document.getElementById('lista')
    var resul = document.getElementById('resul')

    if (n.value.length == 0){
        alert('[ERRO] você é burro? adicione um numero.')
    } else {
        var num = (n.value)
        var item = document.createElement('option')
        item.text = `Valor ${num} adicionado`
        list.appendChild(item)
    }

    function finalizar() {
        resul.innerHTML = `ola ${num} aaaa`
    }
}