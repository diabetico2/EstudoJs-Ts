//! ARQUIVO 3: CONTROLE DE LOOPS (FOR/IN, BREAK, CONTINUE)

// ==========================================================
// * FOR...IN (Loop 'Para...Em')
// ==========================================================
//? Use para iterar sobre as CHAVES (propriedades) de um OBJETO.

const pessoa = {
  nome: 'Allan',
  idade: 21,
  profissao: 'Estudante'
};

console.log("--- Exemplo FOR...IN ---");
// "Para cada 'chave' DENTRO DE 'pessoa'..."
for (let chave in pessoa) {
  console.log(`A chave é: ${chave} | O valor é: ${pessoa[chave]}`);
}
// OBS: Para iterar sobre valores de um ARRAY (ex: [1, 2, 3]),
// é mais comum usar o loop FOR...OF (que você verá depois).

// ==========================================================
// * BREAK e CONTINUE (Controle de Loops)
// ==========================================================
//? Usados DENTRO de loops (for, while) para alterar o fluxo.
//? Lembre-se: 'break' não funciona em 'if' sozinho,
//? ele quebra o LOOP PAI.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// * Exemplo BREAK (Parar / Quebrar)
//   Objetivo: Parar o loop assim que encontrar o número 5.
console.log("\n--- Exemplo BREAK ---");
for (let i = 0; i < numeros.length; i++) {
  let num = numeros[i];
  
  if (num === 5) {
    console.log("Achei o 5! Saindo do loop...");
    break; // ! SAI IMEDIATAMENTE DO 'FOR'
  }
  
  console.log(num); // Só vai imprimir 1, 2, 3, 4
}

// * Exemplo CONTINUE (Pular / Continuar)
//   Objetivo: Pular (ignorar) todos os números pares.
console.log("\n--- Exemplo CONTINUE ---");
for (let i = 0; i < numeros.length; i++) {
  let num = numeros[i];
  
  // Se o número for par...
  if (num % 2 === 0) { 
    continue; // ! PULA O RESTO DA ITERAÇÃO E VAI PARA O PRÓXIMO 'i'
  }
  
  console.log(num); // Só vai imprimir 1, 3, 5, 7, 9
}