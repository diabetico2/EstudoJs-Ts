function carro(velocidadeMaxima = 200, delta = 5) {
  // Atributo privado
  let velocidadeAtual = 0;

  // Método público
  this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = velocidadeMaxima;
    }
  };
  // Método público
  this.getVelocidadeAtual = function () {
    return velocidadeAtual;
  };
}
const uno = new carro();
uno.acelerar();
console.log(`Uno: ${uno.getVelocidadeAtual()}`);

const ferrari = new carro(350, 20);
ferrari.acelerar();
console.log(`Ferrari: ${ferrari.getVelocidadeAtual()}`);

console.log(typeof carro);
console.log(typeof ferrari);

