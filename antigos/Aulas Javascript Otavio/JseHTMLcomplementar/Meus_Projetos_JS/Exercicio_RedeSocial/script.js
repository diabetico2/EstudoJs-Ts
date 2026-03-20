const inputUser = document.querySelector('#input-user'); 
const inputMsg = document.querySelector('#input-msg'); 
const btnPostar = document.querySelector('#btn-postar'); 
const feed = document.querySelector('.feed'); 
 
// --- 1. CABECALHO (O NOME EM NEGRITO) --- 
function criaAutor(nome) { 
   const span = document.createElement('span')
   span.innerHTML = nome
   span.setAttribute('id', 'span')
   return span
} 
 
// --- 2. O TEXTO DO POST --- 
function criaTexto(mensagem) { 
   const li = document.createElement('li')
   li.setAttribute('id', 'texto')
   li.innerHTML = mensagem
   return li
} 
 
// --- 3. O BOTAO DELETAR --- 
function criaBotaoDelete() { 
   const deletar = document.createElement('button')
   deletar.innerText = 'deletar'
   deletar.setAttribute('class', 'delete')
   return deletar
} 
 
// --- 4. A GERENTE (RECEBE 2 COISAS!) --- 
function criaPost(nome, mensagem) { 
   const div = document.createElement('div')
   div.setAttribute('class', 'post')
   const nomeh1 = criaAutor(nome)
   const mensagemp = criaTexto(mensagem)
   const btn = criaBotaoDelete()

   div.appendChild(nomeh1)
   div.appendChild(mensagemp)
   div.appendChild(btn);

   return div
   
} 
function limpa(){
   inputMsg.value = ""
   inputUser.value = ""
   inputUser.focus()
   inputMsg.focus()
}
 
// --- EVENTOS --- 
btnPostar.addEventListener('click', function() { 
   const autor = inputUser.value
   const msg = inputMsg.value

   if (autor === '' || msg === '') return

   const postagem = criaPost(autor, msg)
   feed.appendChild(postagem)
   limpa()
}); 
 
feed.addEventListener('click', function(e) { 
   const le = e.target
  if(le.classList.contains('delete')){
      le.parentElement.remove()
   }
}); 
