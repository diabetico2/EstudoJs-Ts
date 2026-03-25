class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome; //< com o super, ele chama esse sobrenome
  }
}
class Pai extends Avo {
  // O 'extends' é o elevador automático: faz o Pai herdar todas as habilidades (métodos e propriedades) do Avo.
  constructor(sobrenome, profissao = "professor") {
    super(sobrenome); // forma comum para chamar a função construtora da class (nesse caso, o Avo)
    this.profissao = profissao;
  }
}

class Filho extends Pai{ // agora filho herda as habilidades do pai
constructor(){
    super('Silva') // ele chama o sobrenome do pai, igual aconteceu acima
}
}

const filho = new Filho
console.log(filho)