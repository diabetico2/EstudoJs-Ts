// Em vez de (e) => e[1] > 10
// Você faz ([chave, valor]) => valor > 10
const soChave = function (obj) {
  return Object.entries(obj)
    .filter(([chave, valor]) => valor > 10)
    .map(([chave, valor]) => chave);
};

console.log(soChave({ a: 5, b: 15, c: 20, d: 8 }));
