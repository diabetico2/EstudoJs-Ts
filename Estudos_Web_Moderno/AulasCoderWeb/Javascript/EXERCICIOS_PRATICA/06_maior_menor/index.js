// ============================================================
// EXERCÍCIO 06 - NÍVEL 2: ENCONTRAR MAIOR E MENOR
// ============================================================
// Objetivo: Crie uma função que receba um array e retorne 
// um OBJETO com as propriedades "maior" e "menor"
//
// Dicas:
// - Use Math.max(...array) para pegar o maior
// - Use Math.min(...array) para pegar o menor
// - Retorne um objeto: { maior: X, menor: Y }
// ============================================================

function encontrarMaiorMenor(numeros) {
  return {
    maior: Math.max(...numeros),
    menor: Math.min(...numeros)
  }
}

// Teste seu código:
 console.log(encontrarMaiorMenor([5, 2, 8, 1, 9]));  
// // { maior: 9, menor: 1 }
//
 console.log(encontrarMaiorMenor([100, 50, 75]));    
// // { maior: 100, menor: 50 }
