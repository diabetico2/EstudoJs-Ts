// 1. A função externa (Fábrica) recebe a primeira parte da frase.
function falafrase(começo) {
  
  // 2. A função interna (Robô) é criada para receber o resto da frase.
  function falaResto(resto) {
    // O Robô lembra do 'começo' (escopo externo) e junta com o 'resto' (parametro dele).
    return começo + " " + resto; 
  }

  // 3. A função externa entrega o robô pronto para uso.
  return falaResto;
}

// 4. Configuração: Guardamos "ola" na memória.
// A variável 'fala' agora é o robô configurado para dizer "ola" no início.
const fala = falafrase("ola"); // AQUI: Estamos criando a variável (dando um nome para o robô)

// 5. Execução: Usamos o robô 'fala' pela primeira vez.
// AQUI: Estamos usando a variável (mandando o robô trabalhar)
const resto = fala("mundo");
console.log(resto); // Resultado: "ola mundo"

// A Melhor Analogia: O Carimbo
// Pense que a variável fala é um Carimbo onde está gravado fixo a palavra "ola".

// Você pega um papel onde está escrito "mundo".

// Bate o carimbo: Fica "ola mundo".

// Você joga esse papel fora e pega outro onde está escrito "!!".

// Bate o mesmo carimbo: Fica "ola !!".


// --- PARTE NOVA (REUTILIZAÇÃO) ---

// 6. Reutilizando a variável 'fala'.
// NÃO precisamos chamar 'falafrase' de novo. O robô já está pronto e configurado.
// Só entregamos os finais diferentes, e ele mantém o começo ("ola").

const novo = fala("!!"); 
const pergunta = fala("tudo bem?");

console.log(novo);      // Resultado: "ola !!"
console.log(pergunta);  // Resultado: "ola tudo bem?"