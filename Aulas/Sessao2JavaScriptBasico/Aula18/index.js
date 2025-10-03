// const array = [1,2,3];
// array.push(4);
// array[0] = 'Allan';
//array = 'Outra' não é possivel com const
// console.log(array)

// function criaPessoa (nome,sobrenome,idade){
//     return{
//         nome,
//         sobrenome,
//         idade
//     }
// }

// const pessoa1 = criaPessoa('Allan','José',21);
// const pessoa2 = criaPessoa('Maria','Oliveira',33);

// console.log(pessoa1.nome)

const pessoa1 = {
  nome: "allan",
  sobrenome: "jose",
  idade: 21,

  fala() {
    // console.log(`${this.nome}, ${this.sobrenome},  está falando oi`);
    console.log(`${this.idade}, é a idade de ${this.nome},`);
  },

  incrementaIdade(){
    this.idade++;
  }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();