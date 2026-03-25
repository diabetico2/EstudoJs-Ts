Array.prototype.reduce2 = function (callback, vInicial) {
  const indicieIncial = vInicial ? 0 : 1;
  let acumulador = vInicial || this[0];
  for (let i = indicieIncial; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i, this);
  }
  return acumulador;
};

const soma = (total, valor) => total + valor;
const num = [1, 2, 3, 4, 5, 6];
console.log(num.reduce2(soma, 21));
