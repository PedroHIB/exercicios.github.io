var btn = document.querySelector('#btn')
var skills = ["javascript", "ReactJS", "React Native"]

btn.onclick = function (){
	for(var i = 0; i <= 2; i++){
		if (skills.indexof !== '0' && skills[i] == "javascript") {
			return console.log (true)
		} else {
			return console.log(false)
		}
	}
}


/*Escreva uma função que verifique se o vetor de habilidades
 passado possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não.

function temHabilidade(skills) {
	// código aqui
}


Dica: para verificar se um vetor contém um valor, utilize o método indexOf*/