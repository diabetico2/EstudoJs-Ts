const nomes = ["ana", "bia", "leo", "gui"];

const resul = nomes.map(function (e) {
  return {
    nomes: e.toUpperCase(),
    status: "VIP",
  };
});

console.log(resul);

console.log("////////////////");

const nomes2 = [
  { nome: "ana", idade: 25 },
  { nome: "joão", idade: 22 },
  { nome: "maria", idade: 30 },
  { nome: "josé", idade: 16 },
  { nome: "carlos", idade: 29 },
];

const resul2 = nomes2.map(function (e) {
  return {
    nome: e.nome,
    idade: e.idade,
    velho: e.idade < 28 ? "novo" : "velho",
  };
});
console.log(resul2);
