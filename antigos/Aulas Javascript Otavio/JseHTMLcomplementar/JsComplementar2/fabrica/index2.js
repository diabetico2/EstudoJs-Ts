function criaPersonagem(nome, raca, arma) {
  return {
    nome,
    raca,
    arma,
    atacar: function () {
      return `O ${this.nome} da raça ${this.raca} com a ${this.arma}`;
    },
    get receberDano(){
        return `O ${this.nome} recebeu dano, agora está furioso`
    }
  };
}
const p1 = criaPersonagem("Legolas", "Elfo", "Arco");
console.log(p1.atacar()); // "O Elfo Legolas atacou usando Arco!"
console.log(p1.receberDano); // "O Elfo Legolas atacou usando Arco!"