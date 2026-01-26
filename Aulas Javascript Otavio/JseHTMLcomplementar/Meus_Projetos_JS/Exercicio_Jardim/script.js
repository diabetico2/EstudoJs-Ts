// --- PARTE 1: PLANTAR (Igual ao anterior) ---
// Crie a funcao que ao clicar no botao, cria um 'p' com '🌻' e joga no gramado.
const btnPlantar = document.querySelector('#botao-plantar');
const gramado = document.querySelector('.gramado');


function criaP(){
    const p = document.createElement('p')
    return p
}

btnPlantar.addEventListener('click',function(){
    const p = criaP()
    p.innerHTML = '🌻'
    gramado.appendChild(p)
})

gramado.addEventListener('click', function(e){
    const el = e.target
    if(el.tagName === 'P'){
        el.remove()
    }
})


// --- PARTE 2: COLHER (Nivel Medio) ---
// 1. Adicione um ouvinte de clique no GRAMADO (nao no botao)
// 2. Lembre-se de passar o (e) na funcao: function(e)
// 3. Crie uma variavel para pegar o alvo: const el = e.target;
// 4. Faça um IF: Se o 'el.tagName' for igual a 'P'...
// 5. ...entao 'el.remove()'


