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
const fala = falafrase("ola");

// 5. Execução: Usamos o robô 'fala' pela primeira vez.
const resto = fala("mundo");
console.log(resto); // Resultado: "ola mundo"


// --- PARTE NOVA (REUTILIZAÇÃO) ---

// 6. Reutilizando a variável 'fala'.
// NÃO precisamos chamar 'falafrase' de novo. O robô já está pronto e configurado.
// Só entregamos os finais diferentes, e ele mantém o começo ("ola").

const novo = fala("!!"); 
const pergunta = fala("tudo bem?");

console.log(novo);      // Resultado: "ola !!"
console.log(pergunta);  // Resultado: "ola tudo bem?"