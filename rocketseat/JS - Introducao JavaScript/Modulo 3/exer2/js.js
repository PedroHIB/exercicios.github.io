var user = document.querySelector('#user')
var res = document.querySelector('#res')

var exerc = function exerc(){
	return new Promise(function(resolve, reject){
		var xhr = new XMLHttpRequest()
		xhr.open('GET', `https://api.github.com/users/PedroHIB/repos`)
		xhr.send(null)

		xhr.onreadystatechange = function(){
			if (xhr.readyState === 4) {
				if(xhr.status === 200) {
					resolve(JSON.parse(xhr.responseText))
				} else {
					reject('Erro na requisição')
				}
			}
		}
	})
}

exerc()
	.then(function(response){
		console.log(response)
	})
	.catch(function(error){
		console.log(error)
	})

console.log(user.value)

/*
Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o nome do usuário
e clicar no botão buscar a aplicação deve buscar pela API do Github
(conforme URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:

URL de exemplo: https://api.github.com/users/diego3g/repos

Basta alterar "diego3g" pelo nome do usuário.

<input type="text" name="user">
<button onclick="">Adicionar</button>

Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:

<ul>
 <li>repo1</li>
 <li>repo2</li>
 <li>repo3</li>
 <li>repo4</li>
 <li>repo5</li>
</ul>
*/