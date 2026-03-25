// Exercicio extraido do PDF de Fundamentos de Programacao
const par = function (...v1) {
  const ePar = p => p % 2 == 0;

  const resul = v1.filter(ePar);

  return resul;
};
console.log(par(1,2,3,4));
