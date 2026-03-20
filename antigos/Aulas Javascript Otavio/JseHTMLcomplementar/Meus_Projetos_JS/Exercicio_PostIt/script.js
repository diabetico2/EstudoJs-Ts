const inputTexto = document.querySelector('#texto-nota');
const btnAdicionar = document.querySelector('#btn-add');
const quadro = document.querySelector('.quadro');

// --- PASSO 1: A FABRICA DE POST-ITS ---
function criarPostIt(texto) {
    const div = document.createElement('div')
    div.setAttribute('class', 'nota')
    const p = document.createElement('p')
    p.innerHTML = texto

    const btnLixo = document.createElement('button')
    btnLixo.setAttribute('class', 'btn-lixo')
    btnLixo.innerText = 'X'
    div.appendChild(p)
    div.appendChild(btnLixo) 
    return div
    // 1. Crie uma DIV. Dê a classe 'nota' para ela.
    // 2. Crie um P. Coloque o texto nele.
    // 3. Crie um BUTTON. Texto 'X', classe 'btn-lixo'.
    // 4. MONTAGEM: Coloque o P e o BUTTON dentro da DIV.
    // 5. Retorne a DIV.
}
function limpaTexto (){
    inputTexto.value = ''
    inputTexto.focus()
}
// --- PASSO 2: O GATILHO ---
btnAdicionar.addEventListener('click', function() {
   // 1. Pegue o valor do input.
    const valor = inputTexto.value
    // 2. Se vazio, retorne.
    if(valor === '') return
    // 3. Chame a fabrica: const nota = criarPostIt(valor);
    const nota = criarPostIt(valor)
    // 4. Pendure a nota no quadro.
    quadro.appendChild(nota)
    // 5. Limpe o input.
    limpaTexto()
});

// --- PASSO 3: A RECEPCIONISTA (O Desafio) ---
quadro.addEventListener('click', function(e) {
    const el = e.target;
    if(el.classList.contains('btn-lixo')){
        el.parentElement.remove()
    }

    // 1. Verifique se o elemento tem a classe 'btn-lixo'
    // DICA: use el.classList.contains('...')
    // 2. Se tiver, remova o PAI do elemento (parentElement)
});
