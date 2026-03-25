// Exercicio extraido do PDF de Fundamentos de Programacao
// Exemplo 1: Informação e Entretenimento
const despesas1 = [
  { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
  { nome: "Cinema", categoria: "Entretenimento", preco: 150 },
];

// Exemplo 2: Eletrônicos
const despesas2 = [
  { nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 },
  { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.9 },
];

const soma = despesas2
  .map((a) => a.preco)
  .reduce(function (ac, at) {
    return ac + at;
  });

console.log(soma);
