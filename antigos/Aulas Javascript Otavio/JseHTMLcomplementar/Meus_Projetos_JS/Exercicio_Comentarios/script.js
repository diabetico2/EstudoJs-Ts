const inputNome = document.querySelector('#input-nome'); 
const inputMsg = document.querySelector('#input-msg'); 
const btnPostar = document.querySelector('#btn-postar'); 
const feed = document.querySelector('#feed-comentarios'); 

function criaNome(nomeUsu){
    const span = document.createElement('span')
    span.setAttribute('class', 'span')
    span.innerHTML = nomeUsu
    return span
}
function criaPost(postUsu){
    const p = document.createElement('p')
    p.setAttribute('class', 'p')
    p.innerHTML = postUsu
    return p
}
function limpar(){
  inputMsg.value = ''
  inputNome.value = ''
  inputMsg.focus()
  inputNome.focus()
}

function botaoDeletar(){
    const btnApagar = document.createElement('button')
    btnApagar.innerText = 'apagar'
    btnApagar.setAttribute('class', 'apagar')
    return btnApagar
}

function criaCard(nomeUsu, postUsu){
    const nome = criaNome(nomeUsu)
    const post = criaPost(postUsu)
    const btnApagar = botaoDeletar()
    const li = document.createElement('li')

    li.appendChild(nome)
    li.appendChild(post)
    li.appendChild(btnApagar)

    return li

}
btnPostar.addEventListener('click', function(){
const nome = inputNome.value
const msg = inputMsg.value
if(nome ===''|| msg === '') return

const postagem = criaCard(nome, msg)
feed.appendChild(postagem)
limpar()
})


// 2. Use condicao (nome === '' || msg === '') para validar. 
feed.addEventListener('click',function(e){
    const el = e.target
    if(el.classList.contains('apagar')){
        el.parentElement.remove()
    }
})