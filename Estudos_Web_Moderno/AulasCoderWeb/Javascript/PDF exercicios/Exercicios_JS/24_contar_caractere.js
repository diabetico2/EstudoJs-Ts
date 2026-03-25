// Exercicio extraido do PDF de Fundamentos de Programacao
const qtdCarac = function (pala, oq) {
  return [...oq].filter((caracter) => caracter === pala).length;
};

console.log(qtdCarac("a", "ola"));
