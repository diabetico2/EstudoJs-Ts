// let controle = 0
// const nome = 'Luiz'

// while (controle <= nome.length){
//     console.log(nome[controle])
//     controle++
// }

// console.log('cabo')

const min = 1
const max = 50
function random(min, max) {
  const r = Math.random() * (max - min) + min;

  return Math.floor(r);
}
let rand = random (min,max)
while (rand !== 10 ){
  rand = random(min,max)
  console.log(rand)
}