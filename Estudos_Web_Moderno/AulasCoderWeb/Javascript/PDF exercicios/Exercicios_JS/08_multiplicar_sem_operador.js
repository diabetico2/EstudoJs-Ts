// Exercicio extraido do PDF de Fundamentos de Programacao
const multi = function (v1, v2) {
  let con = 0;
  let resul = 0;
  while (con < v2) {
    resul = v1 += v2;
    con++;
  }
  return resul;
};
console.log(multi(5,5))