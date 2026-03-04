// ============================================================
// EXERCÍCIO 20 - NÍVEL 3: MÉDIA PONDERADA
// ============================================================
// Objetivo: Crie uma função que calcula a média ponderada
// de notas e seus respectivos pesos
//
// Média ponderada = (nota1 * peso1 + nota2 * peso2 + ...) / (peso1 + peso2 + ...)
//
// Exemplos:
// mediaPonderada([7, 8, 6], [1, 2, 1])
// = (7*1 + 8*2 + 6*1) / (1+2+1) = (7+16+6) / 4 = 29/4 = 7.25
//
// CAMINHO DE RACIOCÍNIO:
// 1. Você precisa calcular: (nota * peso) para CADA par
// 2. Soma TODOS esses produtos
// 3. Soma TODOS os pesos
// 4. Divide produto total por peso total
// 5. Use .reduce() para ambas as somas
//
// DOCUMENTAÇÃO:
// - Array.reduce(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// - Operador de índice (array[i]): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Indexed_collections
//
// EXEMPLO DO CONCEITO:
// Para cada índice i:
//   produto_i = notas[i] * pesos[i]
// Soma todos os produtos
// Soma todos os pesos
// Divide: soma_produtos / soma_pesos
// ============================================================

function mediaPonderada(notas, pesos) {
  // Seu código aqui
}

// Teste seu código:
// console.log(mediaPonderada([7, 8, 6], [1, 2, 1]));     // 7.25
// console.log(mediaPonderada([9, 10], [0.5, 0.5]));      // 9.5
// console.log(mediaPonderada([5, 6, 7], [1, 1, 1]));     // 6 (sem peso, média simples)
// console.log(mediaPonderada([10], [2]));                // 10
