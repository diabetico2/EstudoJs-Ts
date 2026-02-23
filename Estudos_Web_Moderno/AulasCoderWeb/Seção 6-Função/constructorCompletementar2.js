function carro(modelo, ano, marca) {
  (this.marca = marca), (this.modelo = modelo), (this.ano = ano);

  this.buzinar = function () {
    return `bip, buzinda do ${this.modelo} (${this.ano} da marca ${this.marca})`;
  };
}

const meucarro = new carro('Sienna', '2012', 'Fiat');

// Teste: Mudando o modelo depois de criar
meucarro.modelo = "Palio"; 

// Como você usou 'this.modelo', ele vai imprimir "Palio" corretamente!
console.log(meucarro.buzinar());