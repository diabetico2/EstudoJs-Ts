// ============================================================
// EXERCÍCIO 19 - NÍVEL 2: REMOVER DUPLICATAS
// ============================================================
// Objetivo: Crie uma função que remove elementos duplicados
// de um array, mantendo apenas uma ocorrência de cada
//
// Exemplos:
// removerDuplicatas([1, 2, 2, 3, 1, 4])  // [1, 2, 3, 4]
// removerDuplicatas(['a', 'b', 'a', 'c']) // ['a', 'b', 'c']
// removerDuplicatas([5, 5, 5])  // [5]
//
// CAMINHO DE RACIOCÍNIO:
// 1. Qual estrutura guarda apenas valores únicos? (Set)
// 2. Como você cria um Set a partir de um array?
// 3. Como você converte um Set de volta para array?
// 4. ALTERNATIVA: usar .filter() com .indexOf()
// 5. ALTERNATIVA: usar .reduce()
//
// DOCUMENTAÇÃO:
// - Set: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set
// - Set → Array: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/from
// - Array.filter() + indexOf(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
//
// EXEMPLO DO CONCEITO:
// Set elimina duplicatas automaticamente
// [...new Set(array)] converte Set de volta para array
// Ou: .filter((val, idx, arr) => arr.indexOf(val) === idx)
// ============================================================

function removerDuplicatas(array) {
  // Seu código aqui
}

// Teste seu código:
// console.log(removerDuplicatas([1, 2, 2, 3, 1, 4]));  // [1, 2, 3, 4]
// console.log(removerDuplicatas(['a', 'b', 'a', 'c'])); // ['a', 'b', 'c']
// console.log(removerDuplicatas([5, 5, 5]));  // [5]
// console.log(removerDuplicatas([1, 2, 3]));  // [1, 2, 3] (sem duplicatas)
