// Exercicio extraido do PDF de Fundamentos de Programacao
const inverso = function (valor) {
  const tipo = typeof valor;
        if (tipo == 'boolean') return !tipo
        else if (tipo == 'number') return -valor
        else return 'erro'
};

console.log(inverso(true));
console.log(inverso(4));
console.log(inverso('4'));
