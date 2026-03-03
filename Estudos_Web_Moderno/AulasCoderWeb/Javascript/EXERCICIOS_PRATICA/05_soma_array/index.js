// ============================================================
// EXERCÍCIO 05 - NÍVEL 2: SOMA DE ARRAY
// ============================================================
// Objetivo: Crie uma função que receba um array de números 
// e retorne a soma de todos.
//
// Dicas:
// - Use .reduce() para acumular valores
// - .reduce((acumulador, elemento) => acumulador + elemento, 0)
// - O segundo parâmetro (0) é o valor inicial do acumulador
// ============================================================

function somarArray(numeros) {
  const soma = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)
  return soma
}

// Teste seu código:
 console.log(somarArray([1, 2, 3, 4, 5]));        // 15
 console.log(somarArray([10, 20, 30]));           // 60
 console.log(somarArray([]));                     // 0
