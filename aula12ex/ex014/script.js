function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'manhã (1).png'
        document.body.style.background = 'yellow'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde (1).png'
        document.body.style.background = 'orange'
    } else {
        img.src = 'noite (1).png'
        document.body.style.background = 'darkblue'
    }
}