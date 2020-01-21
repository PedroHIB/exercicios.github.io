var btn = document.querySelector('#btn');

btn.onclick = function (){
	var pos = Math.floor(Math.random() * 100 + 1)
	var boxE = document.createElement('div')

	boxE.style.zIndex="-1"
	boxE.style.position = 'absolute'
	boxE.style.top = pos+'px'
	boxE.style.left = pos+'px'
	boxE.style.width = '100px'
	boxE.style.height = '100px'
	boxE.style.border = "2px solid #"+pos+pos
	boxE.style.backgroundColor = '#f00'
	boxE.classList.add('box')

	document.body.appendChild(boxE)
}

/*Crie um botão que ao ser clicado cria um novo elemento
em tela com a forma de um quadrado vermelho 
com 100px de altura e largura. Sempre que o 
botão for clicado um novo quadrado deve
aparecer na tela.*/