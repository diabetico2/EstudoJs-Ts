// ============================================================
// EXERCÍCIO 17 - NÍVEL 3: NÚMERO PERFEITO
// ============================================================
// Objetivo: Crie uma função que verifica se um número é perfeito
//
// Um número PERFEITO é quando a soma dos seus divisores
// (exceto o próprio número) é igual a ele
//
// Exemplos:
// - 6 é perfeito: divisores são 1, 2, 3 → 1 + 2 + 3 = 6
// - 28 é perfeito: divisores são 1, 2, 4, 7, 14 → 1+2+4+7+14 = 28
// - 10 NÃO é perfeito: 1 + 2 + 5 = 8 ≠ 10
//
// CAMINHO DE RACIOCÍNIO:
// 1. Como você encontra TODOS os divisores de um número?
// 2. Qual número você precisa testar para saber se divide?
// 3. O operador módulo (%) ajuda: numero % d === 0 significa divisível
// 4. Como você SOMA todos os divisores? (.reduce() ou loop)
// 5. Compare a soma com o número original
//
// DOCUMENTAÇÃO:
// - for loop: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for
// - Operador módulo (%): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Remainder
// - Array.push(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push
// - Array.reduce(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
//
// EXEMPLO DO CONCEITO:
// Iterar de 1 até numero-1
// Testar cada: if (numero % i === 0) significa i é divisor
// Coletar divisores: push ao array ou acumular no reduce
// Comparar: soma === numero
// ============================================================

function ehPerfeito(numero) {
  // Seu código aqui
}

// Teste seu código:
// console.log(ehPerfeito(6));    // true
// console.log(ehPerfeito(28));   // true
// console.log(ehPerfeito(10));   // false
// console.log(ehPerfeito(1));    // false (divisores vazios)
// console.log(ehPerfeito(496));  // true (496 é perfeito também!)
