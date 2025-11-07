//escreva uma função que recebe 2 numeros e retorne o maior deles
const min = 0
const max = 999
let n1 = Math.random() * (max - min) + min;
let n2 = Math.random() * (max - min) + min;
console.log(n1)
console.log(n2)

function calculo(){
    console.log(`valor de n1 é: ${Math.floor(n1)}, valor de n2 é ${Math.floor(n2)}`)
 if (Math.floor(n1) > Math.floor(n2)){
    console.log(`logo, n1 é maior, ${Math.floor(n1)}`)
 } else {
    console.log(`logo, n2 é maior, ${Math.floor(n2)}`)
 }
}
calculo()
console.log('/////////////////////////////////')
console.log('versão do professor')

const max2 = (x,y) => x > y ? x : y;
console.log(max2(10,5))