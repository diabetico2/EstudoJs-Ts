// ============================================================
// EXERCÍCIO 05 - NÍVEL 2: SOMA DE ARRAY
// ============================================================
// Objetivo: Crie uma função que receba um array de números
// e retorne a soma de todos.
//
// CAMINHO DE RACIOCÍNIO:
// 1. Você precisa ACUMULAR valores (ir somando)
// 2. .reduce() é feito para esse propósito
// 3. Pense: com que valor você começa? (0 para soma)
// 4. A cada elemento, qual operação você faz?
// 5. O resultado É o acumulador após processar tudo
//
// DOCUMENTAÇÃO:
// - Array.reduce(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
//
// EXEMPLO DO CONCEITO:
// .reduce() passa 2 coisas: o acumulador e o elemento atual
// Você combina eles e retorna o novo acumulador
// Esse processo se repete para cada elemento
// ============================================================

function somarArray(numeros) {
  const resul = numeros.reduce((acumulador, valor) => acumulador + valor);
  return resul;
}

// Teste seu código:
console.log(somarArray([1, 2, 3, 4, 5])); // 15
console.log(somarArray([10, 20, 30])); // 60
console.log(somarArray([0])); // 0
