//factory function(função sabrica)
//constructor function(função construtora)
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,
    fala: function (assunto) {
      return `${this.nome} está ${assunto}`;
    },
    altura: a,
    peso: p,
    //getter
    get imc() { // passa a fingir ser um atributo
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed();
    },
  };
}

const p1 = criaPessoa("allan", "jose", 1.8, 90);
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.imc);

