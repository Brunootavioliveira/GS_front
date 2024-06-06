function irlogin(){
    window.location.href = 'login.html'
}

function entrar(){
    let user = document.getElementById('user').value
    let senha = document.getElementById('senha').value

    if (user == '1234' && senha == '1234'){
        window.location.href = 'index.html'
    }
    else{
        alert('Usuário e/ou senha estão incorretas')
    }
}


const btnCriar = document.querySelector("#btnCriar")
const listaPosts = document.querySelector('#listaPosts')
const inputTexto = document.querySelector('#inputTexto')
const selectCategoria = document.querySelector('#selectCategoria')
const img1 = document.querySelector('#img1')
const img2 = document.querySelector('#img2')
const img3 = document.querySelector('#img3')
const filtroCategoria = document.querySelector('#filtroCategoria')

const posts = []

var filtrado = posts.filter(function(filtro) { return filtro.categoria === filtroCategoria.value})

btnCriar.addEventListener('click', function (infosDoEvento){
    infosDoEvento.preventDefault()

    criaPost()
})

filtroCategoria.addEventListener('click', function(filtro){
    filtro.preventDefault()

    renderizarNaTela()
})

function criaPost(){
    const postNovo = {
        texto: inputTexto.value,
        img1: img1.value,
        img2: img2.value,
        hora: new Date().toLocaleString()
    }

    posts.unshift(postNovo)

    renderizarNaTela()
}

window.onload = renderizarNaTela()

function renderizarNaTela(){

    listaPosts.innerHTML = ''

    posts.forEach(
        post => {
            let novoPost = document.createElement('li')
            novoPost.innerHTML = `
            
            <section id="post">
                <div class="full-screen-image" style="background-image: url('img/secao1.avif');">
                    <div class="content">
                        <div class='post'>
                            <div class='infopost'>
                                <h1>${post.texto}</h1>

                                <div id="carouselExample" class="carousel slide">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active tamanhoimg">
                                        <img src="${post.img1}" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="carousel-item tamanhoimg">
                                        <img src="${post.img2}" class="d-block w-100" alt="...">
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <p>Data e hora: ${post.hora}</p>
                                <button onClick='editarPost(${posts.indexOf(post)})'> Editar </button>
                                <button onClick='apagarPost(${posts.indexOf(post)})'> Apagar </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`
                listaPosts.append(novoPost)
            

        }
    )
}

function editarPost(idPost){
    const textoModificado = prompt('digite o novo nome: ', posts[idPost].texto)

    posts[idPost].texto = textoModificado

    alert('Texto alterado com sucesso!')

    renderizarNaTela()
}

function apagarPost(idPost){
    posts.splice(idPost, 1)

    renderizarNaTela()

}
