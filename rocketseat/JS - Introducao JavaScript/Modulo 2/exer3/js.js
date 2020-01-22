var btn = document.querySelector('#btn')
var nomes = ["Diego", "Gabriel", "Lucas"]
var j = nomes.lenght
var res = document.querySelector('div#res')

btn.onclick = function (){
  res.innerHTML = ""
  for (i = 0; i < 3; i++){
    res.style.color = 'white'
    res.innerHTML += `<ul><li>${nomes[i]}</li></ul>`
  }
}

/*
A partir do seguinte vetor:
    var nomes = ["Diego", "Gabriel", "Lucas"];
Preencha uma lista (<ul>) no HTML com os itens da seguinte forma:
● Diego
● Gabriel
● Lucas
*/