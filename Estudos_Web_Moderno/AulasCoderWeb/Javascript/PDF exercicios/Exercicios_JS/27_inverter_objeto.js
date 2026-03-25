// Exercicio extraido do PDF de Fundamentos de Programacao 

const inverter = function(a){
 const paresInvertido = Object.entries(a)
  .map(parValor => parValor.reverse())

  return Object.fromEntries(paresInvertido)
}


console.log(inverter({ a: 1, b: 2, c: 3 })) 
// retornará { 1: "a", 2: "b", 3: "c" }