// ============================================================
// EXERCÍCIO 21 - NÍVEL 3: ORDENAR ARRAY DE OBJETOS
// ============================================================
// Objetivo: Crie uma função que ordena um array de objetos
// por uma propriedade específica (crescente ou decrescente)
//
// Exemplos:
// const pessoas = [
//   { nome: 'Ana', idade: 28 },
//   { nome: 'Bruno', idade: 22 },
//   { nome: 'Carlos', idade: 35 }
// ];
//
// ordenarPor(pessoas, 'idade', 'asc')   // Bruno (22), Ana (28), Carlos (35)
// ordenarPor(pessoas, 'idade', 'desc')  // Carlos (35), Ana (28), Bruno (22)
// ordenarPor(pessoas, 'nome', 'asc')    // Ana, Bruno, Carlos
//
// CAMINHO DE RACIOCÍNIO:
// 1. Use .sort() com uma função comparadora
// 2. A função recebe dois objetos (a, b)
// 3. Compare a[propriedade] com b[propriedade]
// 4. Se 'asc': (a - b) para crescente, (b - a) para decrescente
// 5. E se for string? (use localeCompare())
//
// DOCUMENTAÇÃO:
// - Array.sort(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// - String.localeCompare(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
// - Operador ternário: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
//
// EXEMPLO DO CONCEITO:
// sort((a, b) => {
//   if (ordem === 'asc') return a[prop] - b[prop];
//   else return b[prop] - a[prop];
// })
// Para strings, use: a[prop].localeCompare(b[prop])
// ============================================================

function ordenarPor(array, propriedade, ordem = 'asc') {
  // Seu código aqui
}

// Teste seu código:
// const pessoas = [
//   { nome: 'Ana', idade: 28 },
//   { nome: 'Bruno', idade: 22 },
//   { nome: 'Carlos', idade: 35 }
// ];
//
// console.log(ordenarPor(pessoas, 'idade', 'asc'));
// // [{ Bruno, 22 }, { Ana, 28 }, { Carlos, 35 }]
//
// console.log(ordenarPor(pessoas, 'idade', 'desc'));
// // [{ Carlos, 35 }, { Ana, 28 }, { Bruno, 22 }]
//
// console.log(ordenarPor(pessoas, 'nome', 'asc'));
// // [{ Ana, 28 }, { Bruno, 22 }, { Carlos, 35 }]
