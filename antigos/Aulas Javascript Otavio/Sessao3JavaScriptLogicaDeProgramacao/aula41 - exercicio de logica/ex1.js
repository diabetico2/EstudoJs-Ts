//Escreva uma função que recebe 2 números e retorne o maior deles
const num1 = 10
const num2 = 20


function Verfica(){
    if (num1 > num2){
   console.log(`${num1} é maior que ${num2}`)
    } else if (num1 < num2){
          console.log(`${num2} é maior que ${num1}`)
    } else {
        console.log(`ambos são iguais`)
    }
}

Verfica()

//Versão professor

const max2 = (x,y) => x > y ? x : y;
console.log(max2(10,20))