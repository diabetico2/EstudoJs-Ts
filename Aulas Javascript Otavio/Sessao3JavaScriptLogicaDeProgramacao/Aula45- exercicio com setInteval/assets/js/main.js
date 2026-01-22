// --- CONFIGURAÇÃO INICIAL ---

// 1. Função que só serve para deixar o número bonito (00:00:00)
function formataTempo(segundos) {
    // Multiplicamos por 1000 porque o Date usa milissegundos
    const data = new Date(segundos * 1000); 
    
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

// 2. Selecionando os elementos do HTML
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

// 3. Estado da aplicação (Variáveis globais)
let segundos = 0; // Guarda a contagem atual
let timer

iniciar.addEventListener('click', function(){
   clearInterval(timer)
   timer = setInterval(function(){
     segundos ++
     relogio.innerHTML = formataTempo(segundos)
   }, 1000)
})