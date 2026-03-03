// ============================================================
// EXERCÍCIO 12 - NÍVEL 4: FILTRO DE PRODUTOS
// ============================================================
// Objetivo: Crie uma função que receba um array de produtos 
// e retorne apenas produtos que:
// - Preço <= 500
// - Categoria é "eletrônicos" OU "livros"
// Depois ordene por preço (do menor para o maior)
//
// Dicas:
// - Use .filter() para filtrar
// - Use .sort() para ordenar: (a, b) => a.preco - b.preco
// - Array de exemplo:
//   [
//     { nome: "Notebook", preco: 3000, categoria: "eletrônicos" },
//     { nome: "Mouse", preco: 50, categoria: "eletrônicos" },
//     { nome: "Livro JS", preco: 80, categoria: "livros" },
//     { nome: "Teclado", preco: 200, categoria: "periféricos" }
//   ]
// ============================================================

function filtrarProdutos(produtos) {
  // Seu código aqui
}

// Teste seu código:
const meusProdutos = [
  { nome: "Notebook", preco: 3000, categoria: "eletrônicos" },
  { nome: "Mouse", preco: 50, categoria: "eletrônicos" },
  { nome: "Livro JS", preco: 80, categoria: "livros" },
  { nome: "Teclado", preco: 200, categoria: "periféricos" },
  { nome: "Monitor", preco: 450, categoria: "eletrônicos" },
];

// console.log(filtrarProdutos(meusProdutos));
// Esperado: Mouse (50), Livro JS (80), Monitor (450)
// em ordem de preço
