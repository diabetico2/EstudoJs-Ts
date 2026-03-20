const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const numerosEmDobro = numeros.map(function (valor) {
  return `Allan ->${valor * 2}`;
});
//console.log(numerosEmDobro)

const pessoas = [
  { nome: "Luiz", idade: 60 },
  { nome: "Beatriz", idade: 24 },
  { nome: "Ricardo", idade: 42 },
  { nome: "Helena", idade: 19 },
  { nome: "Marcos", idade: 55 },
  { nome: "Sofia", idade: 31 },
];
const somenteNme = pessoas.map((valor) => valor.nome);
const somenteIdade = pessoas.map((valor) => ({ idade: valor.idade }));
console.log(somenteNme);
console.log(somenteIdade);

const comIds = pessoas.map(function(obj, indice){
   obj.id = (indice + 1) * 1000
   return obj
})
console.log(comIds)