const litrosAbastecidos = [10, 25, 5, 40, 12];

// 1. Crie o map para transformar litros em reais (litro * 5)
const mapeado = litrosAbastecidos.map(function (e) {
  return e * 5;
});
console.log(mapeado);
// 2. Crie o reduce para somar esses valores
const resul = mapeado.reduce(function (ac, e) {
  return ac + e;
});
// 3. Mostre o faturamento total no console
console.log(resul);
// Resultado esperado: 460
