var btn = document.querySelector('#btn')
var res = document.querySelector('div#res')
var adicionar = document.querySelector('#txt')
var nomes = ["Diego", "Gabriel", "Lucas"]

res.style.color = 'white'


btn.onclick = function renderizar(){
	/*var nomesElement = document.createElement('li')
	var nomesText = document.createtextNode(passando)
	
	listElement.appendChild(nomesElement)
	nomesElement.appendChild(nomesText)*/

	
	nomes.push(adicionar.value) //adicionar no vetor
	
	for (passando of nomes){
		res.innerHTML = `${nomes}`
	}
	adicionar.value = '' //inputElement.value = '' //esvaziar o input
}
/*
Seguindo o resultado do exercício anterior adicione um input em tela e um botão como a seguir:
		<input type="text" name="nome">
		<button onClick="adicionar()">Adicionar</button>
Ao clicar no botão, a função adicionar() deve ser disparada adicionando um novo item a lista de
nomes baseado no nome preenchido no input e renderizando o novo item em tela juntos aos
demais itens anteriores. Além disso, o conteúdo do input deve ser apagado após o clique.
*/