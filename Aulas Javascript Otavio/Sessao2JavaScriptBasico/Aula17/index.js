// function soma(x = 1, y = 1) {
//   const resultado = x + y;
//   return resultado;
// }
// const resultado = soma(4, 3);
// console.log(resultado);


//* Jeito antigo mas ainda extremamente utilizado
// const raiz = function(n){
//  return Math.sqrt(n)
// };
// console.log(raiz(9))
// console.log(raiz(16))

//*Jeito novo de fazer function ( arrow function )
const raiz = n => n ** 0.5

console.log(raiz(9))
console.log(raiz(16))