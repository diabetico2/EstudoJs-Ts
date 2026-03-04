// ============================================================
// EXERCÍCIO 12 - NÍVEL 4: FILTRAR E ORDENAR PRODUTOS
// ============================================================
// Objetivo: Crie uma função que receba um array de produtos com
// preço e categoria, e retorne APENAS os produtos de uma categoria
// específica, ORDENADOS por preço (do mais barato para o mais caro)
//
// Dados de entrada (exemplo):
// const produtos = [
//   { nome: 'Notebook', categoria: 'eletrônicos', preco: 3000 },
//   { nome: 'Mouse', categoria: 'eletrônicos', preco: 50 },
//   { nome: 'Cadeira', categoria: 'móveis', preco: 200 },
//   { nome: 'Teclado', categoria: 'eletrônicos', preco: 150 }
// ];
//
// Resultado esperado:
// filtrarPorCategoria(produtos, 'eletrônicos')
// // [{ Mouse 50 }, { Teclado 150 }, { Notebook 3000 }]
//
// CAMINHO DE RACIOCÍNIO:
// 1. Você precisa de DUAS operações: filtrar E ordenar
// 2. Qual método filtra elementos?
// 3. Qual método ordena elementos?
// 4. A ordem importa? Filtra primeiro ou ordena primeiro?
// 5. Como você acessa o preço de cada objeto? (objeto.propriedade)
//
// DOCUMENTAÇÃO:
// - Array.filter(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// - Array.sort(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// - Acessar propriedades de objeto: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects
//
// EXEMPLO DO CONCEITO:
// Cadeia de métodos: filtrar primeiro, depois ordenar
// sort() usa uma função: (a, b) => a.preco - b.preco (crescente)
// Você vai usar .filter() e .sort() em sequência
// ============================================================

function filtrarPorCategoria(produtos, categoria) {
  // Seu código aqui
}

// Teste seu código:
// const produtos = [
//   { nome: 'Notebook', categoria: 'eletrônicos', preco: 3000 },
//   { nome: 'Mouse', categoria: 'eletrônicos', preco: 50 },
//   { nome: 'Cadeira', categoria: 'móveis', preco: 200 },
//   { nome: 'Teclado', categoria: 'eletrônicos', preco: 150 }
// ];
//
// console.log(filtrarPorCategoria(produtos, 'eletrônicos'));
// // [{ nome: 'Mouse', categoria: 'eletrônicos', preco: 50 },
// //  { nome: 'Teclado', categoria: 'eletrônicos', preco: 150 },
// //  { nome: 'Notebook', categoria: 'eletrônicos', preco: 3000 }]
//
// console.log(filtrarPorCategoria(produtos, 'móveis'));
// // [{ nome: 'Cadeira', categoria: 'móveis', preco: 200 }]
