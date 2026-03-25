// Exercicio extraido do PDF de Fundamentos de Programacao
let contandor = 0;
const mais = function (qtd) {
  let resul = "";
  while (contandor < qtd) {
    resul += "x";
    contandor++;
  }
  return resul;
};
console.log(mais(5));
