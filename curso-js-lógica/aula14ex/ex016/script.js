function contar(){
    var i = document.getElementById('inicio')
    var f = document.getElementById('fim')
    var p = document.getElementById('pass')
    var resul = document.getElementById('resul')

    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        resul.innerHTML = ('Digite algum numero!')
    } else {
        var inicio = Number(i.value)
        var fim = Number(f.value)
        var passo = Number(p.value)
    }
    if (inicio > fim || passo > fim) {
        resul.innerHTML = "Impossivel calcular"
    } else {
        while (inicio <= fim) {
            resul.innerHTML += '👉' + inicio
            inicio += passo
        }
    }
}
