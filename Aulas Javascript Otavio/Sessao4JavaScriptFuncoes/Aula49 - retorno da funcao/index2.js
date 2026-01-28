// 1. A função externa recebe a primeira parte da frase.
function falafrase(começo) {
  // 2. A função interna é criada para receber o resto da frase depois.
  function falaResto(resto) {
    // Ela tem acesso ao 'começo' (que foi guardado antes)
    // e ao 'resto' (que chegou agora).
    return começo + " " + resto; // (Coloquei um espaço aqui para ficar bonito!)
  }

  // 3. A função externa entrega (retorna) a função interna pronta para uso.
  return falaResto;
}

// 4. Configuração: Guardamos "ola" na variável 'começo'.
// A variável 'fala' agora é a função interna pronta pra receber o resto.
const fala = falafrase("ola");

// 5. Execução: Passamos "mundo" para a função 'fala'.
// Ele junta: "ola" (memória) + " " + "mundo" (novo).
const resto = fala("mundo");

console.log(resto); // Resultado: "ola mundo"
