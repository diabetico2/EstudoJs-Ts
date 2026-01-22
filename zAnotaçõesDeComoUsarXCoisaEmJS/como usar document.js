/* =========================================================================
   📚 O CANIVETE SUÍÇO DO DOM (Document Object Model)
   Um guia rápido para manipular elementos HTML com JavaScript.
   =========================================================================
*/

// -------------------------------------------------------------------------
// 1. O SNIPER (Seleção de Elementos) 🎯
// Serve para pegar elementos do HTML para usar no JS.
// -------------------------------------------------------------------------

// Pega APENAS O PRIMEIRO elemento que encontrar com essa classe
const botao = document.querySelector('.minha-classe');

// Pega pelo ID (igual ao CSS, usa #)
const titulo = document.querySelector('#meu-id');

// DICA: Evite getElementById ou getElementsByClassName. 
// O querySelector é mais moderno e usa a mesma lógica do CSS.


// -------------------------------------------------------------------------
// 2. A RECEPCIONISTA (Eventos e Delegação) 🧠
// O jeito mais profissional de lidar com cliques (usado no seu cronômetro).
// -------------------------------------------------------------------------

// Em vez de colocar um vigia em cada botão, colocamos um no documento todo.
document.addEventListener('click', function(e) {
    
    // e.target = "Quem exatamente foi clicado?" (O elemento HTML)
    const el = e.target;

    // classList.contains = "Esse elemento tem esse crachá/classe?"
    if (el.classList.contains('btn-iniciar')) {
        console.log('Clicou no iniciar');
    }

    if (el.classList.contains('btn-pausar')) {
        console.log('Clicou no pausar');
    }
});


// -------------------------------------------------------------------------
// 3. O MAQUIADOR (Manipulação de Estilos/Classes) 🎨
// Mude a aparência adicionando ou removendo classes do CSS.
// -------------------------------------------------------------------------

const caixa = document.querySelector('.caixa');

// ADICIONAR: Coloca uma classe (ex: ficar vermelho)
caixa.classList.add('destaque');

// REMOVER: Tira uma classe
caixa.classList.remove('oculto');

// ALTERNAR (Toggle): O interruptor. Se tem, tira. Se não tem, põe.
// Muito bom para menus que abrem e fecham ou modo escuro.
caixa.classList.toggle('aberto');


/* =========================================================================
   APROFUNDANDO: O "PASSO 3" E O "PASSO 4" (Encontrando um Pai)
   Por que precisamos do querySelector antes do appendChild?
   =========================================================================
*/

// 1. CRIAR (O Fantasma)
// O 'p' existe agora na memória, mas está flutuando no vazio. 
// O usuário NÃO VÊ isso ainda.
const novoParagrafo = document.createElement('p');
novoParagrafo.innerText = 'Estou invisível ainda!';


// 2. SELECIONAR O PAI (A Parede)
// Aqui nós definimos ONDE o elemento vai morar.
// O 'body' é a tag <body> do seu HTML. É a "parede mestra" da casa.
const body = document.querySelector('body'); 

// 💡 DICA: Poderia ser qualquer outro lugar!
// Se você quisesse colocar dentro de uma div com classe 'caixa':
// const minhaCaixa = document.querySelector('.caixa');


// 3. CONECTAR (Pendurar o quadro)
// O appendChild faz a conexão física.
// Ele diz: "Pegue o 'novoParagrafo' e coloque DENTRO do 'body', no final."
body.appendChild(novoParagrafo);

/* VISUALIZANDO A ÁRVORE (DOM)
   
   ANTES DO JS:
   <body>
       <h1>Título</h1>
   </body>

   DEPOIS DO JS:
   <body>
       <h1>Título</h1>
       <p>Estou invisível ainda!</p>  <-- O appendChild colocou aqui!
   </body>
*/


// -------------------------------------------------------------------------
// 5. A LIMPEZA (Remover Elementos) 🗑️
// Como apagar coisas da tela.
// -------------------------------------------------------------------------

// Exemplo: Clicar num botão "X" para apagar uma tarefa
document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        // el é o botão. 
        // el.parentElement é o Pai do botão (a linha da lista inteira).
        // remove() deleta ele do HTML.
        el.parentElement.remove(); 
    }
});


// -------------------------------------------------------------------------
// 6. O CONTEÚDO (Ler e Escrever) 📝
// -------------------------------------------------------------------------

const display = document.querySelector('.relogio');

// innerHTML: Lê ou altera o HTML interno (perigoso com inputs de usuário, mas útil)
// Use para coisas simples como mudar números ou texto com formatação básica.
display.innerHTML = '00:00:00'; 
display.innerHTML = '<strong>Negrito</strong>'; 

// innerText: Mais seguro, trata tudo como texto puro.
display.innerText = 'Texto seguro'; 

// value: Usado APENAS para inputs de formulário (caixa de texto)
const input = document.querySelector('.meu-input');
console.log(input.value); // Pega o que o usuário digitou