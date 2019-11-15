function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = 20
    //var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas.`

    if(hora >= 0 && hora < 12){
        //dia
        img.src = 'manha.png'
        document.body.style.background = '#efeae4'
    } else if(hora >=12 && hora <= 18){
        //tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#746c69'
    }else{
        //noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#374b52'
    }
}
