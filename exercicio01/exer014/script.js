function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var date = new Date()
    //var hora = date.getHours()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background ="gray"

  }
    else if (hora >= 12 && hora <= 18) {
        img.src  = 'fototarde.png'
        document.body.style.background = "orange"

  }
    else{
        img.src = 'fotonoite.png'
        document.body.style.background = "black"
 }

}
