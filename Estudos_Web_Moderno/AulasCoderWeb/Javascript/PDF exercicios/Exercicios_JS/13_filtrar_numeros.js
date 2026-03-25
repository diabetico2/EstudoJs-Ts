// Exercicio extraido do PDF de Fundamentos de Programacao

const filtrarNumeros = function (arra) {

  return arra.filter(item => {
       return typeof item === 'number'
  })
};

console.log(filtrarNumeros(["Javascript", 1, "3", 2, "Web", 20]));
