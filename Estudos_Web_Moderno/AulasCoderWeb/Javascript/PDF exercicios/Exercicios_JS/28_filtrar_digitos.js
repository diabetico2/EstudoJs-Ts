// Exercicio extraido do PDF de Fundamentos de Programacao
const filtrarPorDigitos = function (numeros, digitos) {
  return numeros.filter(function (a) {
    const conv = a.toString();
   return conv.length == digitos;
  });
};

console.log(filtrarPorDigitos([38, 2, 365, 10, 125, 11], 2));
// retornará [38, 10, 11] (Apenas os que têm 2 dígitos)
