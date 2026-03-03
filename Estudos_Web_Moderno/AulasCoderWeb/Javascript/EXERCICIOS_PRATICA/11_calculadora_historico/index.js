// ============================================================
// EXERCÍCIO 11 - NÍVEL 4: CALCULADORA COM HISTÓRICO
// ============================================================
// Objetivo: Crie um objeto calculadora que:
// - Tenha propriedade _historico (array vazio)
// - Tenha um método "calcular(a, operador, b)" que:
//   - Faz a operação
//   - GUARDA no histórico em formato: "5 + 3 = 8"
// - Tenha um getter "historico" que retorna todas as operações
// - Operadores: +, -, *, /, %
//
// Dicas:
// - Use switch/case para os operadores
// - .push() para adicionar ao histórico
// - Retorne a string formatada
// ============================================================

const calculadora = {
  _historico: [],
  
  // Seu código aqui
};

// Teste seu código:
// console.log(calculadora.calcular(5, '+', 3));    // 8
// console.log(calculadora.calcular(10, '*', 2));   // 20
// console.log(calculadora.calcular(20, '/', 4));   // 5
// console.log(calculadora.historico);
// // ["5 + 3 = 8", "10 * 2 = 20", "20 / 4 = 5"]
