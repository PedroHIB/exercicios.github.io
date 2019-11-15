function calcular(){
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] faltam dados!!!')
        
    } else {
        res.innerHTML = `Contanto: `
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
       
        if(p <= 0){
            window.alert('Passo invalido!! ')
        }        
        
        if (i < f){
            for(let c = i; c <= f; c += p ) { //contagem crescente
                res.innerHTML += `${c} \u{1F449}`
            }
        }else{
            for(let c = i; c >= f; c -= p ) { //contagem regressiva
                res.innerHTML += `${c} \u{1F449}` 
            }
        }res.innerHTML += `\u{1F3C1}`
    }   
}