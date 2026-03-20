function Carro(carro, modelo, marca) {
  this.carro = carro;
  this.marca = marca;
  this.modelo = modelo;

  this.detahes = () => {
    return `Este ${carro} é um ${marca} de ${modelo}`
  };
}

const carro1 = new Carro('Siena', 'chevrolet', '2022')
console.log(carro1.detahes())