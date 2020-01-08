var btn = document.querySelector('#btn') 
var res = document.querySelector('div#resultados')

btn.onclick = function(){
    var dado = {
        rua: document.getElementById('rua').value,
        numero:document.getElementById('numero').value,
        bairro:document.getElementById('bairro').value,
        cidade:document.getElementById('cidade').value,
        uf:document.getElementById('uf').value,
    }  
        return alert(`O usuário mora em ${dado.cidade}-${dado.uf},
        no bairro ${dado.bairro}, na rua ${dado.rua} com nº${dado.numero}.`)
}

