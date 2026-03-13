// ============================================================
// EXERCÍCIO 04 - NÍVEL 2: FILTRAR PARES
// ============================================================
// Objetivo: Crie uma função que receba um array de números
// e retorne apenas os pares.
//
// CAMINHO DE RACIOCÍNIO:
// 1. Como você identifica se um número é par?
// 2. Qual operação matemática ajuda a identificar pares?
// 3. Como você filtra um array baseado em uma condição?
// 4. O .filter() mantém ou remove elementos que são true?
//
// DOCUMENTAÇÃO:
// - Array.filter(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// - Operador módulo (%): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Remainder
//
// EXEMPLO DO CONCEITO:
// .filter() testa CADA elemento com uma função
// Se a função retorna true, mantém; se false, remove
// Você precisa decidir QUAL é a condição que define "par"
// ============================================================

function filtrarPares(numeros) {
  const resultado = numeros.filter((valor) => valor % 2 == 0);
  return resultado;
}

// Teste seu código:
console.log(filtrarPares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(filtrarPares([10, 15, 20, 25])); // [10, 20]
console.log(filtrarPares([1, 3, 5, 7])); // []
