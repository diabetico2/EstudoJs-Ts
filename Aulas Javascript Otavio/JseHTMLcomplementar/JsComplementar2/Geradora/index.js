function geradorAleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function* geradorDeID() {
  let i = 0;
  while (true) {
    i++;
    yield {
      id: i,
      codigo: geradorAleatorio(50, 5000000000),
    };
  }
}
const g = geradorDeID();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
