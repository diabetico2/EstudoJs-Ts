// ============================================================
// EXERCÍCIO 04 - NÍVEL 2: FILTRAR PARES
// ============================================================
// Objetivo: Crie uma função que receba um array de números
// e retorne apenas os pares.
//
// Dicas:
// - Um número é par se: numero % 2 === 0
// - Use .filter() para filtrar
// - O .filter() recebe uma função que retorna true/false
// ============================================================

function filtrarPares(numeros) {
const resultado = numeros.filter((valor) => valor % 2 === 0);
 return resultado
}

// Teste seu código:
console.log(filtrarPares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(filtrarPares([10, 15, 20, 25])); // [10, 20]
console.log(filtrarPares([1, 3, 5, 7])); // []

