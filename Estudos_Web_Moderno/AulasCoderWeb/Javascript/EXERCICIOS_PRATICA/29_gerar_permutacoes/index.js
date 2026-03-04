// ============================================================
// EXERCÍCIO 29 - NÍVEL 4: GERAR PERMUTAÇÕES
// ============================================================
// Objetivo: Crie uma função que gera TODAS as permutações
// possíveis de um array
//
// Exemplo:
// permutacoes([1, 2, 3])
// // [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
//
// permutacoes(['a', 'b'])
// // [['a','b'], ['b','a']]
//
// CAMINHO DE RACIOCÍNIO:
// 1. Caso base: se array tem 1 elemento, retorna [[elemento]]
// 2. Recursão: para cada elemento:
//    - Remove o elemento
//    - Calcula permutações do resto
//    - Coloca o elemento na frente de cada permutação
// 3. Combina todos os resultados
// 4. .flatMap() é útil aqui
//
// DOCUMENTAÇÃO:
// - Recursão: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions#recursion
// - Array.slice(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// - Array.flatMap(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
// - Array.map(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//
// EXEMPLO DO CONCEITO:
// Base: [1] → [[1]]
// [1,2]:[1] fixo + permutacoes([2]), [2] fixo + permutacoes([1])
// Resultado: [[1,2], [2,1]]
// ============================================================

function permutacoes(array) {
  // Seu código aqui
}

// Teste seu código:
// console.log(permutacoes([1, 2]));
// // [[1,2], [2,1]]
//
// console.log(permutacoes(['a', 'b', 'c']).length);
// // 6 (3! = 6 permutações)
//
// console.log(permutacoes([1]));
// // [[1]]
