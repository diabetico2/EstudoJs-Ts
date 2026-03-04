// ============================================================
// EXERCÍCIO 26 - NÍVEL 3: EMBARALHAR ARRAY
// ============================================================
// Objetivo: Crie uma função que embaralha (shuffle) um array
// de forma aleatória (algoritmo Fisher-Yates)
//
// Exemplos:
// shuffle([1, 2, 3, 4, 5])  // [3, 1, 4, 5, 2] (aleatório)
// shuffle([1, 2, 3, 4, 5])  // [4, 2, 5, 1, 3] (diferentes cada vez)
//
// CAMINHO DE RACIOCÍNIO:
// 1. Use Math.random() para gerar índice aleatório
// 2. Você precisa TROCAR elementos de posição
// 3. Algoritmo Fisher-Yates: iterar do final pro início
// 4. Para cada posição, escolher um índice aleatório até ali
// 5. Trocar elemento atual com elemento aleatório
//
// DOCUMENTAÇÃO:
// - Math.random(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// - Math.floor(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
// - Trocar variáveis: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators
//
// EXEMPLO DO CONCEITO:
// randIndice = Math.floor(Math.random() * (i + 1))
// Isso gera número aleatório de 0 até i (inclusive)
// Trocar: [arr[i], arr[randIndice]] = [arr[randIndice], arr[i]]
// Isso é desestruturação/swap em uma linha!
// ============================================================

function shuffle(array) {
  // Seu código aqui
}

// Teste seu código:
// console.log(shuffle([1, 2, 3, 4, 5]));  // Aleatório (ex: [3, 1, 4, 5, 2])
// console.log(shuffle(['a', 'b', 'c', 'd']));  // Aleatório
// console.log(shuffle([1]));  // [1] (um elemento não muda)
// console.log(shuffle([1, 2]));  // [1,2] ou [2,1] (50% chance)
