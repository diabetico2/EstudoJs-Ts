// ============================================================
// EXERCÍCIO 25 - NÍVEL 2: ENCONTRAR MIN E MAX COM ÍNDICES
// ============================================================
// Objetivo: Crie uma função que retorna o valor MÍNIMO e
// MÁXIMO junto com seus ÍNDICES no array
//
// Exemplos:
// encontrarMinMax([5, 3, 8, 1, 9, 2])
// // { min: { valor: 1, indice: 3 }, max: { valor: 9, indice: 4 } }
//
// encontrarMinMax([10])
// // { min: { valor: 10, indice: 0 }, max: { valor: 10, indice: 0 } }
//
// CAMINHO DE RACIOCÍNIO:
// 1. Você precisa iterar o array (for ou .reduce())
// 2. Acompanhar o VALOR mínimo e seu índice
// 3. Acompanhar o VALOR máximo e seu índice
// 4. Comparar cada elemento
// 5. Retornar um objeto com as informações
//
// DOCUMENTAÇÃO:
// - for loop: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for
// - Array.reduce(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// - Objetos (estrutura): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects
//
// EXEMPLO DO CONCEITO:
// Começar com min = array[0], max = array[0]
// indiceMinn = 0, indiceMax = 0
// Iterar: if (elemento < min) atualizar min e indiceMin
// if (elemento > max) atualizar max e indiceMax
// Retornar objeto com tudo
// ============================================================

function encontrarMinMax(array) {
  // Seu código aqui
}

// Teste seu código:
// console.log(encontrarMinMax([5, 3, 8, 1, 9, 2]));
// // { min: { valor: 1, indice: 3 }, max: { valor: 9, indice: 4 } }
//
// console.log(encontrarMinMax([10]));
// // { min: { valor: 10, indice: 0 }, max: { valor: 10, indice: 0 } }
//
// console.log(encontrarMinMax([-5, -10, -2]));
// // { min: { valor: -10, indice: 1 }, max: { valor: -2, indice: 2 } }
