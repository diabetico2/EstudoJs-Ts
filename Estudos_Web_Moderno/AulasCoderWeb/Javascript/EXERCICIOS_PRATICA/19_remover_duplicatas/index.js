// ============================================================
// EXERCÍCIO 19 - NÍVEL 2: REMOVER DUPLICATAS
// ============================================================
// Objetivo: Crie uma função que receba um array e 
// retorne um novo array sem elementos duplicados.
//
// Dicas:
// - Pense em estruturas que não permitem duplicatas
// - Ou verifique se o elemento já existe antes de adicionar
// - Há métodos de array que podem ajudar
// ============================================================

function removerDuplicatas(array) {
  const arrayUnico = [...new Set(array)]
  return arrayUnico
}

// Teste seu código:
 console.log(removerDuplicatas([1, 2, 2, 3, 4, 4, 4, 5]));  // [1, 2, 3, 4, 5]
 console.log(removerDuplicatas(['a', 'b', 'a', 'c']));      // ['a', 'b', 'c']
 console.log(removerDuplicatas([1, 1, 1]));                 // [1]
