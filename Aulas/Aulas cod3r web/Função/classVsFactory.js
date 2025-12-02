// Classe
class Pessoa {
  constructor(nome) {
    this.nome = nome;
    // caso não use o this.nome, o nome não será armazenado no objeto
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`);
  }
}
const p1 = new Pessoa("João");
p1.falar();

// Factory
const pessoa = (nome) => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`),
  };
};
const p2 = pessoa("Joana");
p2.falar();

