// let a = "A";
// let b = "B";
// let c = "C";
// const letras = [b, c, a];
// [a, b, c] = letras;
// console.log(a, b, c);
// const numeros = [10, 20, 30, 40, 50, 60];
// const [primeiroNumero, segundoNumero, ...resto] = numeros; // ao declarar uma variavel com 3 pontos (...)
//  ele ira pegar todo o resto do array na desestruturação
// console.log(primeiroNumero, segundoNumero, resto);
const numeros = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const [lista1, lista2, lista3] = numeros;
console.log(lista1[2]);
