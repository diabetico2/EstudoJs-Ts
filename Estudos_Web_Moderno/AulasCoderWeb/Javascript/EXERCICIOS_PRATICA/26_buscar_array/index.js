// ============================================================
// EXERCÍCIO 26 - NÍVEL 3: BUSCAR COM FILTROS
// ============================================================
// Objetivo: Crie uma função que receba um array de objetos 
// (pessoas) e um objeto com filtros, retornando os que combinam.
//
// Exemplo de pessoas:
// [
//   { nome: "João", idade: 25, cidade: "SP", ativo: true },
//   { nome: "Maria", idade: 30, cidade: "RJ", ativo: false },
// ]
//
// Exemplo de filtros:
// { idade: 25, ativo: true }  → retorna João
//
// Dicas:
// - Percorra o array de pessoas
// - Para cada pessoa, verifique se todas as propriedades do filtro batem
// - Você pode usar Object.keys() ou .every()
// ============================================================

function buscarComFiltros(pessoas, filtros) {
  // Seu código aqui
}

// Teste seu código:
// const pessoas = [
//   { nome: "João", idade: 25, cidade: "SP" },
//   { nome: "Maria", idade: 30, cidade: "SP" },
//   { nome: "Pedro", idade: 25, cidade: "RJ" }
// ];
// console.log(buscarComFiltros(pessoas, { idade: 25 }));
// // Retorna: João e Pedro
