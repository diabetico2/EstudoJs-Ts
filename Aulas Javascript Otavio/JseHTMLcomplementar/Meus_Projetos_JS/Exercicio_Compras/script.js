

const inputProduto = document.querySelector('#input-produto'); 
const inputQtd = document.querySelector('#input-qtd'); 
const btnAdicionar = document.querySelector('#btn-add'); 
const listaCompras = document.querySelector('.lista-compras'); 
 
// Agora e com voce. Crie as funcoes e os eventos! 

function criaProduto(nomeProduto){
   const h3 = document.createElement('h3')
   h3.innerHTML = nomeProduto
   h3.setAttribute('class', 'nomeProduto')
   return h3
}
function criaQuant(qtd){
    const p = document.createElement('p')
    p.innerHTML = qtd
    p.setAttribute('class', 'paragrafo')
    return p
}

function limpar(){
    inputProduto.value = ''
    inputQtd.value = ''
    inputProduto.focus()
    inputProduto.focus()
}

function criarBotaoApagar(){
    const btnApagar = document.createElement('button')
    btnApagar.setAttribute('class', 'apagar')
    btnApagar.innerText = 'apagar'
    return btnApagar
}

function montarLista(nomeProduto, qtdProduto){
    const div = document.createElement('div')
    const h3 = criaProduto(nomeProduto)
    const p = criaQuant(qtdProduto)
    const apagar = criarBotaoApagar()
    
    div.appendChild(h3)
    div.appendChild(p)
    div.appendChild(apagar)
 limpar()
 return div
}

btnAdicionar.addEventListener('click',function(){
 const produto = inputProduto.value
 const qtd = inputQtd.value
if(produto === '' && qtd === '') return

const info = montarLista(produto, qtd)
listaCompras.appendChild(info)
})

listaCompras.addEventListener('click', function(e){
    const el = e.target
    if (el.classList.contains('apagar')){
        el.parentElement.remove()
    }
})