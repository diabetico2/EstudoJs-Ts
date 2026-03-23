// Exercicio extraido do PDF de Fundamentos de Programacao

//const pessoa = {nome: 'maria', profissao: 'dev'}
//const resul = Object.entries(pessoa)

//console.log(resul)

const transformar = function (valorRe) {
  const resultado = Object.entries(valorRe);

  return resultado;
};

console.log(
  transformar({
    nome: "Maria",
    profissao: "Desenvolvedora de software",
  }),
);
