const inputSabor = document.querySelector('#input-sabor'); 
const btnPedir = document.querySelector('#btn-pedir'); 
const forno = document.querySelector('.lista-pizzas'); 
 
// --- FUNCIONARIO 1: A MASSA --- 
function criaLi() { 
    // 1. Crie um elemento 'li' 
    // 2. Adicione a classe 'pizza-item' 
    // 3. Retorne o li 
} 
 
// --- FUNCIONARIO 2: O RECHEIO --- 
function criaSpan(sabor) { 
    // 1. Crie um 'span' 
    // 2. Coloque o innerText sendo o sabor 
    // 3. Retorne o span 
} 
 
// --- FUNCIONARIO 3: O CORTADOR --- 
function criaBotao() { 
    // 1. Crie um 'button' 
    // 2. innerText = 'Comer 😋' 
    // 3. Adicione a classe 'btn-comer' 
    // 4. Retorne o botao 
} 
 
// --- A CHEF (GERENTE) --- 
function montarPizza(sabor) { 
    // AQUI A MAGICA ACONTECE: 
    // 1. Chame const li = criaLi(); 
    // 2. Chame const span = criaSpan(sabor); 
    // 3. Chame const btn = criaBotao(); 
 
    // 4. Pendure o span e o btn dentro do li 
    // 5. Retorne o li completo 
} 
 
// --- EVENTOS --- 
btnPedir.addEventListener('click', function() { 
    const sabor = inputSabor.value; 
    if (sabor === '') return; 
 
    // Chame a Chef para montar a pizza: 
    const pizzaPronta = montarPizza(sabor); 
 
    // Coloque no forno 
    forno.appendChild(pizzaPronta); 
 
    inputSabor.value = ''; 
    inputSabor.focus(); 
}); 
 
// --- RECEPCIONISTA (APAGAR) --- 
forno.addEventListener('click', function(e) { 
    const el = e.target; 
    if (el.classList.contains('btn-comer')) { 
       el.parentElement.remove(); 
    } 
}); 
