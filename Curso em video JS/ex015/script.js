function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.leight == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //cria a tag img
        img.setAttribute('id', 'foto') //cria a id com nome de foto <img id="foto">
        
        if(fsex[0].checked){
            genero = "homem"
            if (idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'bebe-m.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-m.png')
            }else if (idade <50){
                //adulto
                img.setAttribute('src', 'adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        } else if(fsex[1].checked){
            genero = "mulher"
            if (idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'bebe-f.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-f.png')
            }else if (idade <50){
                //adulta
                img.setAttribute('src', 'adulto-f.png')
            }else{
                //idosa
                img.setAttribute('src', 'idoso-f.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}