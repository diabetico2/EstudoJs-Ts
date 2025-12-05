//! ARQUIVO 2: ESTRUTURAS DE REPETIÇÃO (LOOPS)

// ==========================================================
// * FOR (Loop 'Para')
// ==========================================================
//? Use quando você SABE quantas vezes quer repetir.
//   (Para i = 0; enquanto i < 5; some 1 ao i)
console.log("--- Exemplo FOR ---");
for (let i = 0; i < 5; i++) {
  console.log(`Contando (FOR): ${i}`);
}
// i = 0 -> Roda
// i = 1 -> Roda
// i = 2 -> Roda
// i = 3 -> Roda
// i = 4 -> Roda
// i = 5 -> Condição (i < 5) é falsa, o loop para.

// ==========================================================
// * WHILE (Loop 'Enquanto')
// ==========================================================
//? Use quando você NÃO SABE quantas vezes vai repetir,
//? mas sabe a CONDIÇÃO DE PARADA.

console.log("\n--- Exemplo WHILE ---");
let contador = 0; // 1. Variável de controle é FORA do loop
while (contador < 5) { // 2. A condição é checada ANTES de rodar
  console.log(`Contando (WHILE): ${contador}`);
  contador++; // 3. Você deve incrementar manualmente
}

// ==========================================================
// * DO/WHILE (Faça... Enquanto)
// ==========================================================
//? Igual ao WHILE, mas tem uma diferença:
//? O bloco de código SEMPRE RODA PELO MENOS UMA VEZ.

console.log("\n--- Exemplo DO/WHILE (Diferença) ---");

// Exemplo com WHILE: a condição é checada primeiro e é falsa,
// então o código NUNCA roda.
let j = 10;
console.log("Antes do While:", j);
while (j < 5) {
  console.log("Isso NUNCA vai aparecer no console");
  j++;
}
console.log("Depois do While:", j); // Mostra 10

// Exemplo com DO/WHILE: o bloco roda primeiro,
// e SÓ DEPOIS a condição é checada.
let k = 10;
console.log("\nAntes do Do/While:", k);
do {
  console.log("Isso VAI aparecer no console UMA vez");
  k++;
} while (k < 5); // A condição (11 < 5) é checada e é falsa.
console.log("Depois do Do/While:", k); // Mostra 11