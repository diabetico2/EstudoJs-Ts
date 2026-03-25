const moedas = [0.25, 0.5, 0.1, 1.0];

// Lembre-se: o reduce recebe dois parâmetros (acumulador, atual)
const totalNoCofre = moedas.reduce((acumulador, atual) => {
  return acumulador + atual;
});

console.log("Eu tenho R$", totalNoCofre);
// Resultado esperado: 1.85
