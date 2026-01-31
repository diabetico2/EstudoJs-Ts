//factory function(função sabrica)
//constructor function(função construtora)
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    set nomeCompleto(valor) {
      valor = valor.split(' ')
      this.nome = valor.shift()
      this.sobrenome = valor.join(' ')
      console.log(valor)
    },
    fala: function (assunto = 'Falando sobre nada') {
      return `${this.nome} está ${assunto}`;  
    },
    altura: a,
    peso: p,
    //getter
    get imc() {
      // passa a fingir ser um atributo
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed();
    },
  };
}

const p1 = criaPessoa("allan", "jose", 1.8, 90);
p1.nomeCompleto = "José dos Santos";
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());
