function aleatorio(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}
// let rand = aleatorio(1, 50);
const min = 1;
const max = 50;
let rand = 10

while (rand !== 10) {
  rand = aleatorio(min, max);
  console.log(rand);
}

console.log('##################')
do {
   rand = aleatorio(min, max);
  console.log(rand);
} while(rand !==10)
