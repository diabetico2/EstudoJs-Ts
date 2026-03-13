// ============================================================
// EXERCÍCIO 07 - NÍVEL 2: CONTAR OCORRÊNCIAS
// ============================================================
// Objetivo: Crie uma função que receba um array e um elemento,
// e retorne quantas vezes o elemento aparece
//
// CAMINHO DE RACIOCÍNIO:
// OPÇÃO A: Filtrar e contar
// 1. A condição seria: manter APENAS o elemento procurado
// 2. O resultado é um novo array
// 3. Quantos elementos tem esse novo array?
//
// OPÇÃO B: Contar enquanto itera
// 1. Usar .reduce() para CONTAR (não somar)
// 2. Se encontra o elemento, incrementa o contador
// 3. Se não, deixa como está
//
// DOCUMENTAÇÃO:
// - Array.filter(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// - Array.reduce(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
//
// EXEMPLO DO CONCEITO:
// Contar é: começa em 0 e incrementa quando encontra algo
// Ou: filtra tudo igual e vê quantos restaram
// ============================================================

function contarOcorrencias(array, elemento) {
  const resul = array.filter((valor) => valor == elemento);
  return resul.length;
}

// Teste seu código:
console.log(contarOcorrencias([1, 2, 3, 2, 2, 4], 2)); // 3
console.log(contarOcorrencias(["a", "b", "a", "c"], "a")); // 2
console.log(contarOcorrencias([1, 2, 3], 5)); // 0
