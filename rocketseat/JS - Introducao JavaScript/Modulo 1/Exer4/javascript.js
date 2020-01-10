var txt = document.querySelector('#box')
var btn = document.querySelector('#btn')
var res = document.getElementById('resposta')

btn.onclick = function (){
	if (txt.value >= 7){
		res.innerHTML = 'Jedi Master'
	} else {
		switch(txt.value){
			case '0':
			res.innerHTML = 'Iniciante'
			break;
			case '1':
			res.innerHTML = 'Iniciante => Intermediário'
			break;
			case '2':
			res.innerHTML = 'Intermediário'
			break;
			case '3':
			res.innerHTML = 'Intermediário => Avançado'
			break;
			case '4':
			case '5':
			case '6':
			res.innerHTML = 'Avançado'
			break;
			default:
			res.innerHTML = ''
			alert('[ERROR] Coloque um valor validov no campo!')
		}
	}
}

/*Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

function experiencia(anos) {
 // código aqui
}
var anosEstudo = 7;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master*/