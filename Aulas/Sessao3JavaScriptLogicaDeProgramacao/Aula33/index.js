const pessoa = {
  nome: "Allan",
  sobrenome: "Jose",
  idade: 21,
  endereco: {
    rua: "Seila",
    numero: 20,
  },
};
const pessoa2 = {
  nome: "Ruan",
  sobrenome: "Maria",
  idade: 44,
  endereco: {
    rua: "pão",
    numero: 55,
  },
};
// Atribuição via desestruturação
// const { nome: teste = "", sobrenome } = pessoa;
// const { nome, sobrenome } = pessoa;
// const {
//   endereco: {rua: r = 123, numero },
//   endereco,
// } = pessoa2;
const {nome, ...resto} = pessoa;
console.log(nome, resto);
