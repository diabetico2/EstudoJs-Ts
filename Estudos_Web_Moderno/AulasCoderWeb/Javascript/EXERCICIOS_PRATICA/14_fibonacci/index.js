// ============================================================
// EXERCÍCIO 14 - NÍVEL 4: SEQUÊNCIA FIBONACCI
// ============================================================
// Objetivo: Crie uma função que retorna um array com a
// sequência de Fibonacci até N termos
//
// Fibonacci: cada número é a soma dos dois anteriores
// Sequência: 1, 1, 2, 3, 5, 8, 13, 21, ...
//
// Exemplos:
// fibonacci(5)   // [1, 1, 2, 3, 5]
// fibonacci(7)   // [1, 1, 2, 3, 5, 8, 13]
// fibonacci(10)  // [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//
// CAMINHO DE RACIOCÍNIO:
// 1. Comece com os dois primeiros números (1, 1)
// 2. Para cada novo número, qual é a regra?
// 3. Você vai usar um loop (for ou while)?
// 4. Quantas vezes o loop deve executar?
// 5. A cada iteração, você soma os dois últimos e adiciona ao array
//
// DOCUMENTAÇÃO:
// - Array (criação): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
// - for loop: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for
// - Array.push(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push
// - Array[índice]: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Indexed_collections
//
// EXEMPLO DO CONCEITO:
// Começar com [1, 1]
// Depois: novo = array[array.length-1] + array[array.length-2]
// Isso suma os dois últimos da lista
// Adiciona ao array com .push()
// ============================================================

function fibonacci(n) {
  // Seu código aqui
}

// Teste seu código:
// console.log(fibonacci(5));   // [1, 1, 2, 3, 5]
// console.log(fibonacci(7));   // [1, 1, 2, 3, 5, 8, 13]
// console.log(fibonacci(10));  // [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// console.log(fibonacci(1));   // [1]
// console.log(fibonacci(2));   // [1, 1]
