//filter, map, reduce

//filter -> sempre vai retornar um array, com a mesma quantidade de elementos ou menos
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const numerosFiltrados = numeros.filter((valor) => valor > 10);
// console.log(numerosFiltrados);

//retorne as pessoas que tem o nome com 5 letras ou mais
//retorne as pessoas com mais de 50 anos
//retorne as pessoas cujo nome termina com a
const pessoas = [
  { nome: "Luiz", idade: 60 },
  { nome: "Beatriz", idade: 24 },
  { nome: "Ricardo", idade: 42 },
  { nome: "Helena", idade: 19 },
  { nome: "Marcos", idade: 55 },
  { nome: "Sofia", idade: 31 },
];

const pessoasComNomeGrande = pessoas.filter(
  (objeto) => objeto.nome.length >= 5,
);
console.log(pessoasComNomeGrande);

const pessoasVelha = pessoas.filter((objeto) => objeto.idade >= 50);
console.log(pessoasVelha);

const retornaA = pessoas.filter((objeto) =>
  objeto.nome.toLowerCase().endsWith("a"),
);
console.log(retornaA);
