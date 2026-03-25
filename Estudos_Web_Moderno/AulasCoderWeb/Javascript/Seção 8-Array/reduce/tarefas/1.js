const numeros = [2, 5, 8, 11, 20];

// Dica: Use o operador de resto (%) para saber se é par: (n % 2 === 0)
const resultadoMap = numeros.map((n) => {
  return n % 2 === 0 ? n * 2 : n;
});

console.log(resultadoMap);
// Resultado esperado: [4, 5, 16, 11, 40]
