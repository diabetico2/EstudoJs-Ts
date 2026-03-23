// Exercicio extraido do PDF de Fundamentos de Programacao

const mes = function (v) {
  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  return meses[v - 1]
};

console.log(mes(2));
