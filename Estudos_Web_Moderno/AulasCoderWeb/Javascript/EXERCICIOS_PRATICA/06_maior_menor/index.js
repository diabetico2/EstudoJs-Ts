// ============================================================
// EXERCÍCIO 06 - NÍVEL 2: ENCONTRAR MAIOR E MENOR
// ============================================================
// Objetivo: Crie uma função que receba um array e retorne
// um OBJETO com as propriedades "maior" e "menor"
//
// CAMINHO DE RACIOCÍNIO:
// 1. JavaScript tem funções para encontrar min/max
// 2. Pense: essas funções funcionam com array ou com números soltos?
// 3. Como você "desembrulha" um array para passar números soltos?
// 4. Como você retorna DOIS valores? (maior E menor)
//
// DOCUMENTAÇÃO:
// - Math.max(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
// - Math.min(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/min
// - Operador spread (...): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax
//
// EXEMPLO DO CONCEITO:
// Existe um operador (...) que "expande" arrays
// Objetos podem ter múltiplas propriedades
// Você armazena dois valores em um objeto retornado
// ============================================================

function encontrarMaiorMenor(numeros) {
  const menor = Math.min(...numeros);
  const maior = Math.max(...numeros);
  return `Maior: ${maior}, menor: ${menor}`;
}

// Teste seu código:
console.log(encontrarMaiorMenor([5, 2, 8, 1, 9]));
// // { maior: 9, menor: 1 }
//
console.log(encontrarMaiorMenor([100, 50, 75]));
// // { maior: 100, menor: 50 }
