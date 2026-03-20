function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    fala: function () {
      return `o ${this.nome} ${sobrenome} tem ${altura} de altura e ${peso} de peso`;
    },
    altura,
    peso,
    get imc(){
        const indice = this.peso / this.altura  ** 2
        return indice.toFixed()
    }
  };
}

// Teste criando duas pessoas diferentes:
const p1 = criaPessoa("Maria", "Silva", 1.65, 60);
const p2 = criaPessoa("João", "Oliveira", 1.8, 90);

console.log(p1.fala());
console.log(p2.fala());

console.log(p1.imc);
console.log(p2.imc);