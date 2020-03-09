var elementUl = document.querySelector('ul')

function renderLoading(loading) {
    elementUl.innerHTML = ""

    var textElement = document.createTextNode('Carregando...')
    var loadingElement = document.createElement('li')

    loadingElement.appendChild(textElement)
    elementUl.appendChild(loadingElement)
}

function renderRepositories(repositories){
    elementUl.innerHTML = "";
    
    for(repo of repositories){
        const textElement = document.createTextNode(repo.name)
        const liElement = document.createElement('li')

        liElement.appendChild(textElement)
        elementUl.appendChild(liElement)
    }
}

function ex(){
    var user = document.querySelector('input').value

    if(!user) return
    renderLoading()

    console.log(user)
    axios.get(`https://api.github.com/users/${user}/repos`)

    .then(function(response) {
        renderRepositories(response.data)
    })
    .catch(function(error) {
        alert('[ERRO] 404')
    })
}

/*2º exercício
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



3º exercício
A partir do resultado do exemplo anterior adicione um indicador de
carregamento em tela no lugar da lista apenas enquanto a requisição
estiver acontecendo:

<li>Carregando...</li>*/