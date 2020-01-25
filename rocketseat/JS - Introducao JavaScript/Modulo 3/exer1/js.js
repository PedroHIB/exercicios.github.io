var idade = document.querySelector('#idade')
var btn = document.querySelector('button')
var res = document.querySelector('#res')



var ida = function(){
	return new Promise(function(resolve, reject){
		btn.onclick = function ida(){
			if (idade.value != ""){
				if (idade.value < 18){
					resolve(res.innerHTML = `Criança ${idade.value} anos - Maior de idade`)
				}else{
					resolve(res.innerHTML = `Adulto ${idade.value} anos - Maior de idade`)
				}
			}else{
				reject('[Erro] Insira um valor')
			}
		}
	})
}

ida()
	.then(function(response){
		console.log(response)
	})
	.catch(function(error){
		console.warn(error)
	})
 



/*
Crie uma função que recebe a idade de um usuário e 
retorna uma Promise que depois de 2 segundos retornará 
se usuário é maior ou não que 18 anos. Se o usuário ter
mais que 18 anos de idade o resultado deve cair no
.then, caso contrário, no .catch

function checaIdade(idade) {
 	// Retornar uma promise
}
checaIdade(20)
.then(function() {
	console.log("Maior que 18");
})
.catch(function() {
	console.log("Menor que 18");
});
*/