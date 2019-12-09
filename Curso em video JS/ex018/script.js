let num = document.getElementById('txtnum')
let tab = document.getElementById('seltab')
let res = document.querySelector('div#res')
let vetores = []

function validar(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    } else {
        return false 
    }
}

function validarLista(n, lista){
    if(lista.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
   if (validar(num.value) && !validarLista(num.value, vetores)) { //validar(num.valor do numero) && diferente dos valores da lista
        vetores.push(Number(num.value))
        let item = document.createElement('option')             //para adicionar no select
        item.text = `adicionou ${num.value} a tabela`          //adiciona o valor a lista
        tab.appendChild(item)                              //chamar a lista
        res.innerHTML = ''
    } else {
       window.alert(`ERROR`)
    }
    num.value = ``
    num.focus()
}

function final(){ 
    if (vetores.length == 0){
        window.alert(`Adicione valores antes de finalizar!`)
    } else {
        let tot = vetores.length
        let maior = vetores[0]
        let menor = vetores[0]
        let soma = 0
        let media = 0

        for (let pos in vetores){
            if (vetores[pos] > maior)
                maior = vetores [pos]
            if (vetores[pos] < menor)
                menor = vetores[pos]   
            soma += vetores[pos]        
        }
        media = soma/ tot
        res.innerHTML += `<p> Ao todo, temos ${tot} </p>`
        res.innerHTML += `<p>Maior valor eh: ${maior} </p>`
        res.innerHTML += `<p>Menor valor eh: ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores eh: ${soma}</p>`
        res.innerHTML += `<p>A media dos valores digitados eh: ${media}</p>`
    }
}